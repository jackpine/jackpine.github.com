---
layout: post
title: Test Driven Code Rescue  (day 1)
---

"Code Rescue" describes a situation in which a project has gone so far
off track, that just pulling in some overtime or "trying harder" are
insufficient to get the project gaining ground. Instead, unless
addressed, things will fall father and farther behind. A radical shift
in strategy is the only thing that *might* save the project.

The climate around this scenario can be tense. Typicall the symptom
people talk about manifests in "the software". "The Software" is broken.
"The Software" is slow. "The Software" isn't done. But apart from the
run down state of the code, there is often ill will and a lack of trust
between people that should, no *must*, collaborate in order to pull
through. The code is the canary in the coal mine.

A former coworker referred a client to me. They were coming up ast on a
hard dealine. 

I, being the dilligent developer that I am, didn't want to jump into a
quagmire. I told the client that I wanted to evaluate the codebase
before signing on to the project. Because we were literally operating on
the scale of days, not weeks, I needed to make a quick assesment of the
project and get in, or get out. Basically I had one question, "Were
there tests?" Sure enough there were! 302 tests. Given the size of the
codebase, it seemed a little light, and there were no integration tests
at all. Still, the fundamental question "Do these people care about
testing?" was answered.

I ran the test suite and told my new client I'd be able to start right
away. No time to waste - what's the first feature I should build? After
getting off the phone I looked back at my terminal.

    280 of 302 tests failed. 22 passed.

Well, Shit.

"There must be some misunderstanding.", I pleaded with the project
leader.

"Oh. Right." he said. "We've just been moving so fast trying to meet
this deadline that we haven't had the time to keep the test suite
up-to-date." He assured me, "Once things settle down, we'll have time to
go back and fix everythign up."

I've worked on plenty of projects where there were no tests, or not very
many tests, or really slow tests, or bad tests . But I'd never seen a
test suite so completely abandoned. 

I was conflicted. My instinct was to immediately get the
test suite passing. If we were going to have 302 tests, then I wanted
302 passing tests. But on the other hand, I'd *just* been hired (like 30
minutes ago). My client hired me to build some features. Not only would
it be a hard sell to my new client - "Now, before I build the thing you
hired me to build, I need to work on some invisibile thing that you
don't know anythign about for a few days, *then* I can come back and
work on the thing that you asked me to do. Cool?" But also, it
wouldn't have been the right thing for the project. Remember *BIG
REALWORLD DEADLINE LOOMING*. I needed to let go a little.

But fear not, gentle tester, I'm not about to throw away everything we've
learned to love about testing.
 
My compromise: instead of spending days fixing every test, or completely
abandoning testing and BDD, I spent 20 minutes pasting this into every
failing test:

    pending "disabled as part of the great spec reboot of Feb 12. 2013"


So for those of you who don't speak [rspec](http://rspec.info), that
effectively short circuits the test. That's right, I didn't even *read*
them. If they were failing, I just disabled them.

This left me with:

  0 of 302 tests failed. 22 passed. 280 pending.

OK. Not super inspiring. I just gave up on all those tests. I know. But
I'm not a superhero. And *now* we were in a position to have a
*meaningful regression suite*. What I mean is, now *a failing test meant
something*. More importantly, it established the idea that *we were
going to start respecting tests*.

At least, in *my* mind it did. I will say that over the following weeks getting
people to even *run* the tests, let alone write any, was an ongoing struggle.
More than once I got an early morning call about something as basic as "people
can't sign up". Lo and behold, run the test suite against the currently
deployed branch and it failed. A wiser me would have invested in setting
up CI to automatically run the tests for everybody, but, to my credit,
I already felt like I was ruffling feathers with the amount of time I
was spending "not doing development."

So the test suite gradually grew as I tested all my new features and bug
fixes. I unpended specs as I had chance to edit the code that affected
them. Also, whenever I had a few minutes of downtime, I would work my
way through the neutered tests, bringing them back into relevent
specifications.

Upon receiving my second early morning phone call alerting me to a
really egregious bugs ("People can't register!"), it became obvious
that we could benefit from some integration testing. I'd introduced just
a couple basic integration tests (via [cucumber](http://cukes.info/)),
making sure that registration worked.

I was part of a somewhat _ahem_ ragtag team on this projet. I think the
most valuable thing I had to offer my teammates was not my
super-human-coding skills, but just having some disciplinle changes the
mindset from "How are we going to get the next thing done." to "How can
we leverage these new requirements to improve the codebase as a whole."

You don't have to "Stop everything and test." You don't have to be
"driven" by your tests (though I sometimes prefer to). If you are
strategic, you can apply just the right amount of testing to just the
right parts of your project to maximize the time you spend doing
*useful* work. Build new features instead of cleaning up messes. Instead
of pulling all-nighters grappling with poorly understood code, just try
something, run the test suite and go home already.


