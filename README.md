Installation
============

    # get source
    git clone git@github.com:jackpine/jackpine.github.com
    cd jackpine.github.com

    # install necessary libraries
    bundle

    # compile assets
    bundle exec jekyll 
    
    # run local webserver
    bundle exec jekyll serve


Deployment
==========

Anytime you push to master, Github will compile and deploy
your assets to http://jackpine.github.com


Development
===========
You have to recompile assets and restart the server as you make changes.

You can do this manually by restarting the server

    bundle exec jekyll serve

Or - you can use guard to recompile assets whenever any files change.

    bundle exec guard
