Installation
============

    # get source
    git clone git@github.com:jackpine/jackpine.github.com
    cd jackpine.github.com

    # install necessary libraries
    gem install bundler
    bundle

    # compile assets
    bundle exec jekyll 
    
    # run local webserver
    bundle exec jekyll --server


Deployment
==========

Anytime you push to master, Github will compile and deploy
your assets to http://jackpine.github.com


Development
===========
You have to recompile assets and restart the server as you make changes.

You can do this manually

    bundle exec jekyll && bundle exec jekyll --server

Or - you can use guard to recompile assets whenever any files change.

    bundle exec guard
