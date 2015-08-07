---
layout: post
title: Test Driven Code Rescue  (day 1)
author: michaelkirk
published: false
---


A former coworker referred a client to me. They were quickly coming up
on a hard deadline, tied to a real world event (*read: an <strong>actual</strong>  hard
deadline*).

I've been around the block once or twice, and participated in my fair
share of software disasters. But being older and slightly wiser, I wanted to
avoid jumping into any quagmire. Time was super tight, but I told my
potential client that I needed to evaluate the codebase before agreeing
to work on the project.

Registration was already open. People had paid for this software. The
bulk of the functionality *had* to be ready in 9 days. Remember, this was
a *hard* deadline. If I was going to take on the project, I had to hit
the ground running. But first, I had one question...

Were there tests?
------------------

Sure enough there were!

302 tests. Given the size of the codebase, it seemed a little light, and
there were no integration tests at all. Still, the fundamental question
"Do these people care about testing?" was answered with a resounding "*At
least a little bit*".

I ran the test suite and told my new client I'd be able to start right
away. "No time to waste - what's the first feature I should build?" After
getting off the phone I looked back at my terminal.

    302 examples, 270 failures, 10 pending

Well, Shit.
-----------

"There must be some misunderstanding," I pleaded with the project
leader.

"Oh. Right." he said. "We've been moving so fast, trying to meet
this deadline, that we haven't had the time to keep the test suite
up-to-date." Then he assured me, "Once things settle down, we'll have time to
go back and fix everything up."

I've worked on projects where there were no tests, not very many tests,
really slow tests, or bad tests, but I'd never seen a test suite so
*completely* abandoned.

*I was conflicted*. My instinct was to immediately get the test suite
passing. *If we were going to have 302 tests, then I wanted 302 <strong>passing</strong>
tests dammit!* But on the other hand, I'd *just* been hired (like 30 minutes
ago). My client hired me to *build some features*, not to spend days
working on this invisible thing that he didn't understand. More than
that, if I put on my project manager hat, it wouldn't have been the
right thing for the project at that time. Remember *BIG DEADLINE
LOOMING*. I needed to let go of my sense of perfection and focus on
moving the project forward.

So let's recap: Software is rumbling apart, very green team, missing
features, deadline looming. Things are looking pretty dire. *But fear
not, gentle tester*.  I'm not about to throw away everything we've
learned to love about testing.
 
My compromise
-------------

Instead of spending days fixing every test, or completely
abandoning testing and BDD, I pasted this into every failing test:

    pending "disabled as part of the great spec reboot of Feb 12. 2013"


For those of you who don't speak [rspec](http://rspec.info), that
effectively short circuits the test.  If they were failing, I just
disabled them. That's right, I didn't even *read* them.

This left me with:

    302 examples, 0 failures, 270 pending

OK. I know. Not super inspiring. I just gave up on all those tests.
I'm not a superhero. But now we were in a position to have a
*meaningful regression suite*. Now *a failing test meant something*.
More importantly, it established the idea that *we were going to start
respecting tests*.

At least, in *my* mind it did. I will say that over the following weeks
getting people to even *run* the tests, let alone write any, was an
uphill battle. But the test suite gradually grew, as I tested all my new
features and bug fixes and firmly requested other developers to write
tests for their work. I unpended specs as I had chance to edit
the code that affected them. Also, whenever I had a few minutes of
downtime, I would work my way through the neutered tests, bringing them
back into relevant specifications. Other developers on the team got
better about it, and some were even enthusiastic. *The battle of the
minds had been won!*

The Other Battle
----------------

Upon receiving my second (really) early morning phone call alerting me
to egregious bugs ("People can't register!"), it became obvious
that we could benefit from some integration testing. I introduced just
a couple basic integration tests (via [cucumber](http://cukes.info/)),
making sure that registration worked. Over the next days, along with
continued feature development, we fleshed out more integration testing
for the most important flows of our application. And with that, we
had solidified our testing strategy and graduated development to a place
where deploying broken code became the exception, not the norm.

Fixing things is fun!
---------------------

I was part of a somewhat <*ahem*> ragtag team on this project. The most
valuable thing I had to offer my teammates was not my
*super-human-coding* skills. What I had was an opportunity to exemplify
some discipline for my new team. The right amount of discipline changed
the mindset from "How are we going to get the next thing done." to "How
can we leverage these new requirements to improve the codebase as a
whole."

The code base was initially really rough. We were initially deploying
severe bugs daily. I cannot emphasize enough how valuable a regression
suite was in this situation. It allowed us to stop backsliding and move
forward. Every day was better than the last, as opposed to every day
having more things break, new features taking ever longer. It's
absolutely soul crushing to not feel  *empowered to make progress*.

Given the right strategy, committing to testing can be unobtrusive. You
don't have to "Stop everything and test." You don't have to be "driven"
by your tests (though sometimes I prefer to). If you are strategic, you
can apply just the right amount of testing to just the right parts of
your project to maximize the time you spend doing *useful* work. Build
new features instead of cleaning up messes. Instead of pulling
all-nighters grappling with poorly understood code, just try something,
run the test suite and go home already. Maybe you can even sleep to a
reasonable hour. ;)
