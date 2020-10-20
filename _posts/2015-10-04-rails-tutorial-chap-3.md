---
layout: post
title: Rails Tutorial - Chapter 3
categories: Development
common-css:
  - "/assets/css/vendor/highlight.css"
---
On the surface I haven't really done anything with the app yet. It's basically just four simple pages&mdash;but there's quite a bit going on beneath the surface and I'm really enjoying the progression. 

### Some Take Aways

1. Further explanation of the MVC framework and exposure to REST principles
2. Introduction to _Don't Repeat Yourself_ (DRY) principles
3. Introduction to **Test Driven Development (TDD)**

The best epiphanies of this chapter came through TDD (partly because I've had a decent amount of exposure to the others). Learning to write a test that fails and then _sequentially_ making changes until the test passes...is pretty interesting. Here's an example of how that might look:

---

**Step 1: Write a failing test for a new Contact page**

{% highlight ruby %}
# From app/test/controllers/static_pages_controller_test.rb

test "should get contact" do
  get :contact
  assert_response :success
  assert_select "title", "Contact | #{@base_title}"
end
{% endhighlight %}

**Step 2: Run test suite**

=> `error: [no route matches "contact"]` _Ah-ha!_

**Step 3: Go back and add the contact code to routes.rb**

**Step 4: Run test suite again...**

=> `error: [no action matches "contact"]` _Ah-ha!_

**Step 5: Go back and add the contact action to the static_pages controller**

**Step 6: Run test suite again...**

...

...

...

**Step [x]: Pass! (high fives)**

---

I can see how developers might find this cumbersome and repetitive...but I can also see how it would be greatly beneficial when writing large complex applications. Plus it's super helpful when learning how all of the pieces link together in this lesson (this post is mostly just beneficial to me for now...).

Still, excited to learn more!