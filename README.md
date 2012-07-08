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

    # use guard to recompile assets automagically when files change.
    bundle exec jekyll --server &
    bundle exec guard

    # or you can manually recompile and bounce the server every time you make a change
    bundle exec jekyll && bundle exec jekyll --server
    
    
