---
layout: post
title: Rails Tutorial - Chapter 6
categories: Development
tags: Rails Ruby Learning
common-css:
  - "/assets/css/vendor/pygment_highlights.css"
---
Before I get to the meat of this I have to note the significance of today, October 21, 2015, which is the day Marty McFly arrives in _the future_ and we're introduced to all kinds of iconic inventions like hoverboards and self-lacing shoes. My favorite tribute is (predictably) [golf-related](https://instagram.com/p/9GgNQKuzwM/)... :golf:

---

Back to it. My progress on the Rails Tutorial remains steady. Chapter 6 is about **modeling users**. So...what is a model?  According to Wikipedia, a model "stores data that is retrieved according to commands from the controller and displayed in the view." That's somewhat helpful in the context of the MVC architectural pattern, but what does it really mean?

While this seems to vary depending on the technologies/frameworks/languages involved, it appears to me that models can be defined as a way to **describe data structures and the methods to access them**. In other words what type of information do we need to store, how should it be treated (by the user and the system), and how do we access/manipulate it?

In this chapter we started down this path by creating and building upon a _User_ model. Generally users have names, emails, (timestamps), and passwords. We created each of these by _generating_ the User model (rails tees this up pretty simply) and then telling it how to handle each attribute. That's the easy part.

{% highlight shell %}
$ rails generate model User name:string email:string
{% endhighlight %}

We then built some tests and [red / green / refactored](https://en.wikipedia.org/wiki/Test-driven_development) them as we've done before. This included:

- Validity (user names/emails can't be blank in the system)
- Length (entries must be greater than zero but less than 255 characters)
- Format (can a user enter _foo@example..com_ and walk away without realizing they made a mistake?)
- Uniqueness (is this user's email already in the system?)

We also learned about secure password creation via hashes...which in this case is largely handled by the ruby gem `bcrypt`. We also learned about database **indexing** so our application doesn't need to search every single line of our database to find what it's looking for each time.

Finally we learned about **migrations**...which IMHO are the most interesting aspect of all of this.

Within _app/db/migrate_ I have three files:

- `[timestamp]_create_users.rb`
- `[timestamp]_add_index_to_users_email.rb`
- `[timestamp]_add_password.rb`

These files are essentially incremental instructions for 'how to construct the database' (and are translated by Rails into SQL when it's time to run the `bundle exec rake db:migrate` command.

So this code:

{% highlight ruby %}
# From [timestamp]_create_users.rb
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps null: false
    end
  end
end
{% endhighlight %}

...will execute SQL commands behind the scenes to set up the database architecture (create table, add columns for name/email...and add timestamps). So if I make a mistake when structuring the `_add_password` migration piece I can just perform a `db:rollback`, make any necessary changes, and then `db:migrate` it back into place. Pretty cool.

While it's pretty clear that you don't need to have a deep understanding of SQL to perform any of this, it certainly wouldn't hurt to learn more. I've had quite a bit of exposure to MySQL when working with WordPress sites, etc...but Hartl suggests 'reading the SQL corresponding to Active Record commands.' 

Time to add another item to the TODO list![^1]

[^1]:    This is already like the sixth time this has happened while going through this tutorial. You learn one thing only to realize that you really need to learn something else as well. It's clear that this never-ending learning pattern is a big part of web development...which is also part of the reason I'm drawn to it.



