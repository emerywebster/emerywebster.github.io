---
layout: post
title: Local Home Page
categories: Development
tags: home.dev setup apache mysql 
---
About [the same time](/2015/10/02/launched/) I began reworking this site I decided to clean up all my dev _stuff_  &mdash; organizing everything (both on my machine and on any servers), relocating old projects into specified subdomains for safe keeping, establishing backup and deploy processes, and **reworking my local dev environment**.

While planning this out I discovered [The Perfect Web Development Environment](https://mallinson.ca/osx-web-development/) post from Chris Mallinson. It didn't take very long to get everything up and running and there were pretty much zero pain points. I highly recommend it.

The real kicker IMO is that he also adds a local home page (@ http://home.dev) so you can quickly access all of your projects. I've since forked it :octocat: and made [a handful of changes](https://github.com/emerywebster/LocalHomePage) I found pretty helpful:

- Nicer fonts
- Added 'GitHub' icon for any GitHub Pages projects
- Ensure 'WordPress' icon appears in case it's tucked into a `/wp/` sub-directory
- Ensure favicon shows if it's not in the root directory (for whatever reason)

All said and done it looks like this:

![Local home page home.dev](https://cldup.com/NDFNMUInVT-2000x2000.png)

Super helpful and a fun little mini project to house all your real projects... :neckbeard:





