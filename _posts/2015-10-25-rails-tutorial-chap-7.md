---
layout: post
title: Rails Tutorial - Chapter 7
categories: Development
tags: Rails Ruby Learning
---
Soooo I now have a <img src="/assets/img/ak_scare1.gif" alt=":scare:"> working <img src="/assets/img/ak_scare2.gif" alt=":scare:" class="wp-smiley"> version of the app live on [heroku](https://ewh-rails-sample.herokuapp.com). 

**Things you can do with it...**

- Sign up
- Look at static pages
- (Literally that's it)

**Things you can't do with it (for now)...**

- Login
- Post anything
- View/follow other users
- Update your profile
- Delete your account
- Modify users (as an admin)
- (Literally anything else you can think of)

**Other things I've noticed**

- Doesn't look great on mobile (perhaps we'll get to this in a later chapter)

---

We covered quite a bit of ground on this one. Here's a quick recap:

- Built the actual sign up form
- Introduced a debugger via the `byebug` gem to help isolate problems if/when they occur (and also help see what's happening after each request)
- Created <span style="background-color:#dff0d8; border-color:#d6e9c6; color:#3c763d; padding:2px; border:1px solid transparent; border-radius:4px; font-family:arial;">success flash</span> when users sign up (and send them to their initial _profile_ page)
- Created <span style="background-color:#f2dede; border-color:#ebccd1; color:#a94442; padding:2px; border:1px solid transparent; border-radius:4px; font-family:arial;">error flash</span> when users don't sign up properly (fail our tests for validity/format/etc).
- Added SSL (https) to our production environment (heroku) &mdash; this encrypts all relevant information before it leaves the local browser and goes to the server/db.

So yeah, it's _starting to_ look and feel like a real app, which is neat :beers:.


