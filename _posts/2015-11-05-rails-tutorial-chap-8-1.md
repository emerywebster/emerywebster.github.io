---
layout: post
title: Rails Tutorial - Chapter 8 (Part 1 of 2)
categories: Development
tags: Rails Ruby Learning
common-css:
  - "/assets/css/pygment_highlights.css"
---
I'll be honest, I had to go through this chapter twice just to _get it_. It's a beast. And the concepts are much more complex than previous chapters. Part of the reason I'm posting notes throughout this tutorial is to ensure it sticks.

With that, I'm divvying this chapter into three sections:

1. **Creating the User Session** (what happens when you enter stuff into a login form)
2. **Log in / Log out** (what happens after successfully entering login info)
3. **Remember me** [update: this post already pretty massive so I'll cover this bit in [Part 2](#)]

Here we go...

--- 

## 1. Creating the User Session

Hartl begins with this context:

> HTTP is a **stateless** protocol, treating each request as an independent transaction that is unable to use information from any previous requests. This means there is no way within the hypertext transfer protocol to remember a user’s identity from page to page; instead, web applications requiring user login must use a session, which is a semi-permanent connection between two computers (such as a client computer running a web browser and a server running Rails).

We attack this two difference ways. First by creating a user **_session_** (temporary / expire automatically), and then again later with a **_cookie_** (longer-lived).

First we create a _sessions_ controller like so:

{% highlight ruby %}
class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
    else
      # Create an error message.
      render 'new'
    end
  end

  def destroy
  end
end
{% endhighlight %}

Initially I struggled with the concept of `params[:whatever]`...but after some digging I found that it's basically just a placeholder for a nested hash (user data submitted through the login form). So `params[:session]` translates to `{ password: "foobar", email: "user@example.com" }`. 

Going further, `params[:session][:email]` just points to the submitted email address (and the same could be applied with `...[:password]`)[^1].

To pound this concept in a little further let's explain what's really going on with the punchline in the above code:

{% highlight ruby %}
if user && user.authenticate(params[:session][:password])
{% endhighlight %}

Here we need for the user to exist and for the password to be correct (kinda obvious when you think of what the login form does). So here are the possible results:

<img src="https://cldup.com/_LwxXvlbU4-3000x3000.png" class="center-image" />

With an existing `user` and the correct password via `params[:session][:password]` both equating to true...the controller will then _create_ the user session and send them on to the correct page.

---

The last part of this section applies a <span style="background-color:#f2dede; border-color:#ebccd1; color:#a94442; padding:2px; border:1px solid transparent; border-radius:4px; font-family:arial;">flash</span> for incorrect logins (with accompanying test). 

Here's a quick look at the test (which <strong><small><span style="color:red">FAILS</span></small></strong>):

{% highlight ruby %}
# Added to users_login_test.rb
require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest

  test "login with invalid information" do
    get login_path
    assert_template 'sessions/new'
    post login_path, session: { email: "", password: "" }
    assert_template 'sessions/new'
    assert_not flash.empty?
    get root_path
    assert flash.empty?
  end
end
{% endhighlight %}


We can then <strong><small><span style="color:green">PASS</span></small></strong> our test (and apply the flash) by adding this line to the `else` portion of the session controller code.

{% highlight ruby %}
flash.now[:danger] = 'Invalid email/password combination'
{% endhighlight %}

So far so good.

---

## 2. Log in / Log out

Kind of a big one. I'll try to keep it brief &mdash; here's what we're doing:

- Log the user in with a temporary session cookie that expires automatically upon browser close
- define `log_in` method to add to the `create` action (in session controller)
- define `current_user` method to find the user in the database corresponding to the login session id
- change the view (header links)for logged in users
- introduce fixtures + define `digest` method
- ensure users are logged in automatically when they sign up
- define `log_out` method to add to the `destroy` action (in the controller)
- test everything along the way

---

First we introduce the _sessions helper_ to define the `log_in` method, which looks like this: 

{% highlight ruby %}
# Added to sessions_helper.rb
def log_in(user)
  session[:user_id] = user.id
end
{% endhighlight %}

We can then add that to our session empty controller comment from Section 1 above:

{% highlight ruby %}
# Added to sessions_controller.rb
def create
  user = User.find_by(email: params[:session][:email].downcase)
  if user && user.authenticate(params[:session][:password])
    log_in user ### this line to log them in
    redirect_to user ### this line to take them to their user page
  else
    flash.now[:danger] = 'Invalid email/password combination'
    render 'new'
  end
end
{% endhighlight %}

---

Next we need to define the `current_user` to pull info from the database corresponding to their session id. 

{% highlight ruby %}
# Returns the current logged-in user (if any).
def current_user
  @current_user ||= User.find_by(id: session[:user_id])
end
{% endhighlight %}

We use an instance variable (`@current_user`) here in case it appears multiple multiple times on the page.

Also worth noting that the `||=` operation line is equivalent to the code below (but simpler/better):

{% highlight ruby %}
if @current_user.nil?
  @current_user = User.find_by(id: session[:user_id])
else
  @current_user
end
{% endhighlight %}

So the `||=` operation will stop if `@current_user` is available/true...and will otherwise continue on to the search.

---

Next we need to change the layout links for logged in users. We first do this by defining a method that checks if the user is logged in (in other words, is `current_user` not `nil`):

{% highlight ruby %}
# Added to app/helpers/sessions_helper.rb

# Returns true if the user is logged in, false otherwise.
def logged_in?
  !current_user.nil?
end
{% endhighlight %}

With that in place we're able to add some conditional code to the header:

{% highlight erb %}
<%# Added to app/views/_header.html.erb %>

<% if logged_in? %>
  <%# Dropdown menus for your settings, logout, etc. %>
<% else %>
  <%# Original link to login. %>
  <li><%= link_to "Log in", login_path %></li>
<% end %>
{% endhighlight %}

---

Almost there! Next we need to test everything with some sample user data. We do this with [fixtures](http://guides.rubyonrails.org/testing.html#the-low-down-on-fixtures):

{% highlight yaml %}
# Create test/fixtures/users.yml

webb:
  name: Webb Example
  email: webb@example.com
  password_digest: <%= User.digest('password') %>
{% endhighlight %}

And then add an instance variable for `:webb` in the login test:

{% highlight ruby %}
# Modify test/integration/users_login_test.rb

  def setup
    @user = users(:webb)
  end
{% endhighlight %}

---

I also mentioned that we need to log in new users automatically whenever they sign up. To do this just need to add `log_in user` to the `create` action in our user controller.

Then we add `assert is_logged_in?` to the `users_signup_test.rb` to ensure it works along the way.

---

**Finally**, we need the ability to log out. To do this we go back to our `sessions_helper` to define the method:

{% highlight ruby %}
# Logs out the current user.
def log_out
  session.delete(:user_id)
  @current_user = nil
end
{% endhighlight %}

Then we can use that method in our sessions controller:

{% highlight ruby %}
def destroy
  log_out
  redirect_to root_url
end
{% endhighlight %}

The test for this is pretty gnarly but showcases a nice, full list of steps that are fairly easy to understand:

{% highlight ruby %}
# Add to test/integration/users_login_test.rb
  test "login with valid information followed by logout" do
    get login_path
    post login_path, session: { email: @user.email, password: 'password' }
    assert is_logged_in?
    assert_redirected_to @user
    follow_redirect!
    assert_template 'users/show'
    assert_select "a[href=?]", login_path, count: 0
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@user)
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to root_url
    follow_redirect!
    assert_select "a[href=?]", login_path
    assert_select "a[href=?]", logout_path,      count: 0
    assert_select "a[href=?]", user_path(@user), count: 0
  end
end
{% endhighlight %}

---

I'm guessing a lot of people bail on the project at some point during this chapter... For me, writing everything out here helped a HUGE amount, [so on we go](#)!

[^1]:    [Stack Overflow](http://stackoverflow.com/questions/6885990/rails-params-explained) provides a really helpful explanation of rails `params` as well.
