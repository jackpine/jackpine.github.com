--- 
layout: post 
title: Why Code Reviews Don't Work
author: michaelkirk
---

Let's get this out of the way, you *absolutely* should be doing code
reviews. Read [these](asd) [great](asdf) [articles](asdf) for reasons
why. For those of us already doing code reviews, let me lay out what I
think is a pretty typical failure scenario:

Your team has a policy that all code must be reviewed by someone other
than the author before it can be merged into the mainline branch. You
are using Github's [pull request
feature](https://help.github.com/articles/using-pull-requests) to
facilitate this process.

One day your partner submits a pull request for you to review. You
settle down with a big old cup of coffee and focus on their code. You
find an unused variable introduced in their change, leave a comment
and move on. The rest of the code takes a little while to work out in
your head, but you are eventually convinced it's correct, and give
your stamp of approval. Your teammate dutifully removes the unused
variable and merges their code into the main line branch. Success -
Everyone go home!

Fast forward to the next day, you are working on a brand new feature
that touches the same part of the code base that you just reviewed.

*But what is all this shit?*

Overly procedural code, ambiguous method names ("computeData" are you
*kidding* me? That could mean anything!), the call chain is a tangle
of barbed wire. As you thrash about, the code is your enemy. It
violates every rule of common sense good programming you know. *It is
evil*.

How can this be the same code you reviewed yesterday? What is it about
the code review process that prevents our brains from seeing code in
it's "true" form? To that point, I want to talk about how we can think
about code reviews so as to improving the quality of the software we
are building and increase the value of the experience for the
participants in the code review.

Minutia
-------

The biggest enemey of finding low quality code in a
code review is slipping into auto-pilot. It's the same thing that
makes some people bad at pair programming. You have to convince
yourself not only that it's a valuable experience, but that it's a
*difficult* one, and that you need to be paying attention. I'm not a
fan of "try harder" coaching, so I've got some real concrete
advice. Separate your code review into two passes. The first pass is a
superficial linting check while the second is a critical investigation
of the structure of the code.

In the first pass, I don't think about the code too hard. I just make
sure there are no egregiously wrong approaches, or unused variables,
typos, etc. The point is that these small things are distractions. By
fixating on them, I "feel" like I've done my job on a code review. I
made five improvements, after all, even if none of those improvements
considered the big picture.

As an aside, using a real automated software linter to minimize the
cost of the first pass on the reviewer. An ex-Googler once told me
that he loved an automated style guide checker, even though he didn't
like the aesthetics of the style guide. The effect of having a neutral
*deterministic* review of style made it so that people *stopped
arguing about style*, and focused on something interesting.

After the linting pass, regardless of if I found any issues, I review
the *entire* feature again. The goal is to reset my brain. Now that
the distractions are gone, I can focus on the intent of the code.

This is a well known "bait and switch". Conside the case of [xxx]
wherein serious security bugs were deliberately introduced under the
cover of surrounding trivial software bugs. Smoke and mirrors!

So, the first step is a style and lint check, and the second step is
convincing yourself that you understand the code. The final step is
the mythical *quality* step.

Communism Works in Theory
-------------------------

Even if the code is "correct" that doesn't mean that it is "good". Do
the abstractions make sense? Do they fit within the patterns of the
existing codebase?  Are we inventing needless new vbocabulary? Can I
reasonably easily modify the behavior should it become necessary?

How do you tell? I admit, I can almost never tell the *quality* of the
code until I try to work with it. My proposal is, as part of the code
review, commit a refactoring step. That's right - get your stink on
that code. Now, this could be controversial in team where people are
defensive about their code, but I would argue that people need to get
over that sooner rather than later. That kind of attitude is toxic.

[insert Fowler quote about refactoring as a means of understanding]

Explain that you're primarily doing it as an excercise in
understanding the code. Ask the person who contributed the code to
verify that your refactor is correct and if they think they are an
improvement.

Of course, ultimately, code reviews are only as valuable as your teams
commitemnt ot doing them. Obviously *you* care, you're reading an
article with a link-baity title just to make sure your values are
being fairly represented. But how do you evangalize the practice to
your team? Mandating code reviews is simple enough, but any schmoe can
say "LGTM". My approach to this is to be very verbose, and largely
positive in code reviews. Consider the "Sandwich" of human
interactions. You know the sandwich right?

If you have something critical to say, preface it by saying something
nice, and then follow it up with something nice, however insubstantial
they may be.

E.g. "Your code is hard to understand. Can you simplify it?" becomes
"You are accomplishing a lot with this code, but it is hard to
understand. Can you simplify it? I think it's on the right track."

See what I did there?! The sandwich. I know it sounds pandering, but I
stand by it.

As I was saying, I tend to be really verbose, I leave a stream of
comments charting my thought process. e.g. "What is the method
for?"... 10 lines later... "Oh I get it." This record becomes an
unadulterable evidence for how literate the code is. A lot of code
"looks good" once you understand it, but we all know that code is read
many times more than it is written, and optimizing for reading code by
working out the parts that confuse you upon reading it is a way to
address this.

I also am known to include some fluffy comments, just to show that I'm
paying attention ("Yup - this method looks good", "nice use of <some
obscure method>! Didn't know about that one.")

That brings me to my next point

Get Personal Value out of Code Reviews
======================================

I find code reviews to be one of the more valuable things I get out of
working with other engineers of all levels. Everyone has something to
teach, everyone has something to learn. Foster a culture of
appreciating peoples trivial knowledge as a means of encouraging them
to give even more meaningful contributions to the learning
process. Another example of this is making sure that you prefer acting
on peoples feedback. If you feel that some suggestion to one of *your*
code reviews is a "six of one / half dozen of the other" situation,
prefer whatever one was suggested. For one, maybe they have some
ineffable, but real, reason to prefer a particular approach. As long
as you see them as equivalent, it's a win to do something someone
suggests. It shows you are receptive (you *are* receptive right?).

Profound Conclusion
===================

Like most things, I don't feel that I'm particularly good at code
reviews, but I *have* made some headway since I started. By not
fixating on trivial errors, actually working with the code, and
fostering an environment that nurtures teaching and learning you can
make code reviews a more valuable process - valuable to your software
and valuable to your team.





