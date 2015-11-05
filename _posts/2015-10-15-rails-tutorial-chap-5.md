---
layout: post
title: Rails Tutorial - Chapter 5
categories: Development
tags: Rails Ruby Learning
---
This chapter was pretty basic. It did start to bring the app to life visually...and there were certainly some tricky exercises surrounding application _helpers_, etc. 

One major component involved integrating [bootstrap](http://getbootstrap.com/) and [SASS](http://sass-lang.com/). All the FEDs I know absolutely love SASS, but I've never had much of a chance to fully understand (let alone implement into a project). This was also the first time I had the opportunity to use bootstrap&mdash;even though it's just scratching the surface.

One resource that was particularly helpful is the [list of existing Less variables](http://getbootstrap.com/customize/#less-variables). This really makes the stylesheets easy to maintain and read.

The other standout (that I'm somewhat shocked I didn't fully comprehend previously) are nested elements. Here's an example from the Sample App code[^1].

```scss
    // From app/assets/stylesheets/custom.css.scss
    
    footer {
      margin-top: 45px;
      padding-top: 5px;
      border-top: 1px solid #eaeaea;
      color: #777;
      a {
        color: #555;
        &:hover {
         color: #222;
        }
      }
      small {
       float: left;
      }
      ul {
        float: right;
        list-style: none;
        li {
          float: left;
          margin-left: 15px;
        }
      }
```

You can review the same [commit diff](https://github.com/emerywebster/rails_sample-app/commit/032a1aa24c7dbead3f60d7de8fa50e0d92ba81f0#diff-b2bb630942ce6e7ab7704565fd365420R71) on GitHub as well. :octocat:

Moving on to heavier stuff soon (user models, finalizing signups and microposts, followers, etc).

[^1]:    This is pretty dern ugly...mental note to find a way to add some color here soon.