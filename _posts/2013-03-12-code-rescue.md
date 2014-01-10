---
layout: post
title: Test Driven Code Rescue  (day 1)
---

A former coworker referred a client to me. They were quickly coming up
on a hard deadline, tied to a real world event (read: an *actual*  hard
deadline).

I've been around the block once or twice, and participated in my fair
share of software disasters. But being older and slightly wiser, I wanted to
avoid jumping into any quagmire. Time was super tight, but I told my
potential client that I needed to evaluate the codebase before agreeing
to work on the project.

Registration was already open. People had paid for this software. The
bulk of the functionality had to be ready in 9 days, when the service
opened. Remember, this was a *hard* deadline, tied to a real world
event. So, I needed to take the proverbial shit or get off the proverbial
pot. Basically I had one question...

Were there tests?
------------------

Sure enough there were!

302 tests. Given the size of the codebase, it seemed a little light, and
there were no integration tests at all. Still, the fundamental question
"Do these people care about testing?" was answered with a resounding "At
least a little bit."

I ran the test suite and told my new client I'd be able to start right
away. No time to waste - what's the first feature I should build? After
getting off the phone I looked back at my terminal.

    302 examples, 270 failures, 10 pending

Well, Shit.
-----------

"There must be some misunderstanding.", I pleaded with the project
leader.

"Oh. Right." he said. "We've been moving so fast, trying to meet
this deadline, that we haven't had the time to keep the test suite
up-to-date." Then he assured me, "Once things settle down, we'll have time to
go back and fix everything up."

I've worked on projects where there were no tests, or not very many
tests, or really slow tests, or bad tests . But I'd never seen a test
suite so *completely* abandoned. 

I was conflicted. My instinct was to immediately get the test suite
passing. If we were going to have 302 tests, then I wanted 302 passing
tests. But on the other hand, I'd *just* been hired (like 30 minutes
ago). My client hired me to build some features. It would be a hard sell
to my new client - "Now, before I build the thing you hired me to build,
I need to work on some invisible thing that you don't know anything
about for a few days, *then* I can come back and work on the thing that
you asked me to do. Cool?" More than that, if I put on my project
manager hat, it wouldn't have been the right thing for the project.
Remember *BIG REALWORLD DEADLINE LOOMING*. I needed to let go a little.

But fear not, gentle tester, I'm not about to throw away everything we've
learned to love about testing.
 
My compromise
-------------

Instead of spending days fixing every test, or completely
abandoning testing and BDD, I spent 20 minutes pasting this into every
failing test:

    pending "disabled as part of the great spec reboot of Feb 12. 2013"


For those of you who don't speak [rspec](http://rspec.info), that
effectively short circuits the test.  If they were failing, I just
disabled them. That's right, I didn't even *read* them.

This left me with:

    302 examples, 0 failures, 270 pending

OK. Not super inspiring. I just gave up on all those tests. I know. But
I'm not a superhero. And *now* we were in a position to have a
*meaningful regression suite*. What I mean is, now *a failing test meant
something*. More importantly, it established the idea that *we were
going to start respecting tests*.

At least, in *my* mind it did. I will say that over the following weeks getting
people to even *run* the tests, let alone write any, was an ongoing struggle.
More than once I got an early morning call about something as basic as "people
can't sign up". Lo and behold, run the test suite against the currently
deployed branch and it failed. (A wiser me would have invested in setting
up CI to automatically run the tests for everybody, but, to my credit,
I already felt like I was ruffling feathers with the amount of time I
was spending "not doing development.")

So the test suite gradually grew as I tested all my new features and bug
fixes. And firmly requested other developers to write tests for their
new features. I unpended specs as I had chance to edit the code that
affected them. Also, whenever I had a few minutes of downtime, I would
work my way through the neutered tests, bringing them back into relevant
specifications.

Upon receiving my second (really) early morning phone call alerting me
to really egregious bugs ("People can't register!"), it became obvious
that we could benefit from some integration testing. I'd introduced just
a couple basic integration tests (via [cucumber](http://cukes.info/)),
making sure that registration worked.

I was part of a somewhat _ahem_ ragtag team on this project. I think the
most valuable thing I had to offer my teammates was not my
super-human-coding skills. Just having some discipline changes the
mindset from "How are we going to get the next thing done." to "How can
we leverage these new requirements to improve the codebase as a whole."

I cannot emphasize enough how valuable a minimal (at least) regression
suite was in this situation. It allowed us to stop backsliding, and move
forward. Every day was better than the last, as opposed to every day
having more things break, new features taking ever longer. It's
absolutely soul crushing to not feel like you are *allowed to make
progress*.

You don't have to "Stop everything and test." You don't have to be
"driven" by your tests (though sometimes I prefer to). If you are
strategic, you can apply just the right amount of testing to just the
right parts of your project to maximize the time you spend doing
*useful* work. Build new features instead of cleaning up messes. Instead
of pulling all-nighters grappling with poorly understood code, just try
something, run the test suite and go home already.

"Code Rescue" describes a situation in which a project has gone off the
track. It's gone so far off that track that just "putting in some extra
hours" or "trying harder" are completely insufficient to get the project
gaining ground. The project is in the infamous software death spiral. It
also presents a unique time for a radical shift in strategy.

The climate that necessitates code rescue is probably tense, and often
people don't know they're in it. The symptoms people talk about manifest
in "The Software". "The Software" is broken.  "The Software" is slow.
"The Software" isn't done. But perhaps more significant than the
symptoms of the code, there is often a lack of trust and a sense of
antagonism between people that should, no *must*, collaborate in order
to succeed. The code is the canary in the coal mine.

