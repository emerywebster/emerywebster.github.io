---
layout: post
title: Local Home Page
categories: Development
tags: home.dev setup apache mysql 
---
When I started rebuilding this site I also took some time to clean up (and properly establish) all my dev _stuff_ &mdash; organizing old projects, establishing backup/deploy processes, and **reworking my local dev environment**.

Along the way I discovered [The Perfect Web Development Environment](https://mallinson.ca/osx-web-development/) from Chris Mallinson and replicated it on my machine. There were pretty much zero pain points and it didn't take very long to get everything up and running. I highly recommend it if you're looking for a clean local setup.

The real kicker with Chris's configuration is that he also adds a local home page (@ [http://home.dev](http://home.dev)) so you can quickly access all of your projects in a nice visual list. I forked his GitHub repo :octocat: and made a handful of [changes](https://github.com/emerywebster/LocalHomePage) to better match my projects.

All said and done it looks like this:

![Local home page home.dev](https://cldup.com/NDFNMUInVT-2000x2000.png)

Everything functions as a link (in some cases as a shortcut to `/wp-admin/`)...the only caveat is that anything requiring an additional server command to start obviously won't work without it (e.g. rails apps).

Still, super helpful and a fun little mini project to house all your stuff :shipit:.





