---
  layout: post
  title: Asset Managers for Rails and Django
  author: samvevang
---

Django was my first real taste of what a web framework
could be. The ORM, templating and other "batteries-included" components
profoundly changed the way I thought about web development. Here was a
_literate_ set of technologies that brought together complimentary
patterns and idioms to speed up web development. I took the "web
framework for perfectionists with deadlines" and ran with it.

[Web Frameworks](http://en.wikipedia.org/wiki/Web_application_framework#General-purpose_website_frameworks) vary a lot but usually include:

* ORM for manipulating Models
* Template language: To express markup via inheritence and templating language. Something like [erb](http://en.wikipedia.org/wiki/Erb) or [jinja2](http://jinja.pocoo.org/docs/) 
* Controller classes: Delegate your app's RESTful queries to e.g. the Model layer
* Asset manager: Concatenate and minify javascript. Compile stylesheets and markup into CSS and HTML

When it comes to technology, being opinionated can be a good thing. It means knowing how the layers of a modern web development stack should integrate together. I love django's ORM and template inheritance, but I continually found myself wrestling with assets, invalidating chaches, and dealing with bugs in early asset managers like django-compress. Django doesn't have a built-in asset manager and it needs one. The [staticfiles](https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/) app comes close: it's basically a way to group static assets by each Django app, but it doesn't provide any facility to minify or compile intermediate languages like Less.

Wherein the Author Discovers the Rails Asset Pipeline
-----------------------------------------------------

Coming from the Django/Python side of things, I had dabbled with a few third-party [asset apps](https://www.djangopackages.com/grids/g/asset-managers/), but the jump to Rails 3 was a big surprise: Suddenly, I could concatenate and minify javascript, compile haml or sass, automatically bust client caches after editing my files.  The kicker is that I can have all this _and_ easy deployment to various cloud platforms like heroku. I'm interested in platforms that can quickly target a "conventional" build process. After all it's more important to get those releases out the door than to worry about how to minify 30+ JS files down to a reasonable handful of resources.


