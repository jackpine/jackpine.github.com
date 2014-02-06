--- 
layout: post 
title: Why Code Reviews Don't Work
author: michaelkirk
---

*Let's get this out of the way - you **absolutely** should be doing
code reviews.
[Read why elsewhere](http://www.codinghorror.com/blog/2006/01/code-reviews-just-do-it.html).*

For those of us already doing code reviews, I'd like to lay out some
typical failure scenarios and present some approaches to mitigate
them.

My team has a policy that all code must be reviewed by someone other
than the author before being merged into the mainline branch.  We use
Github's
[pull request feature](https://help.github.com/articles/using-pull-requests)
to facilitate this process.

Imagine one day somone on the team submits a pull request for you to
review. You settle down with a *big ole cup of coffee*&trade; and
focus on their code. You notice their code introduced an unused
variable. You leave a comment and move on. The rest of the code
takes a little while to work out in your head, but you are eventually
convinced it's correct, and give your stamp of approval. Your teammate
dutifully removes the unused variable and merges their code into the
main line branch. *Success! Everyone go home!*

Fast forward to the next day, you are working on a brand new feature
that touches the same part of the codebase that you just
reviewed. Your brow furrows...

*What is this shit?*

Overly procedural code, ambiguous method names ("computeData" are you
*kidding* me? That could mean anything!), the call chain is
tangled. It violates every rule of common-sense-good-programming you
know. *It is evil*.

How can this be the same code you reviewed yesterday?

What is it about the code review process that prevents our brains from
seeing code in it's "true" form? In thinking about these problems over
the years, I've made some changes to my review process that improves
the quality of the software we build and increases the value of the
review experience for all participants.

Minutia
=======

The biggest enemey of finding low quality code in a code review is
slipping into auto-pilot. It's the same thing that makes for a bad
pair programming experience. You have to convince yourself that
reviewing code is not only important, but that it's *difficult*. You
aren't just reading code - you need to keep your brain on. I'm not a
fan of "try harder" style advice, so I've got some real concrete
suggestions. Separate your code review into two passes - the first pass is a
superficial linting check while the second is a critical investigation
of the structure of the code.

In the first pass, I don't think about the code too hard. I just make
sure there are no egregiously wrong approaches, or unused variables,
typos, etc. The point of this pass is to remove all
distractions. Otherwise, during the "real" review, by fixating on
these minor points, I "feel" like I've done my job and neglect big
picture issues.

As an aside, use real automated software linters to minimize the cost
of the first pass on the reviewer. An ex-Googler once told me that he
loved their automated style guide checker, even though he didn't
particularly like the aesthetics of the style. The effect of
having a neutral *deterministic* review of style made it so that
people could *stop arguing about style, and focus on something
interesting*.

After the linting pass, I review the *entire* feature again. The goal
is to reset my brain. Now that the distractions are gone, I can focus
on the intent of the code.

So, the first step is a style and lint check, and the second step is
convincing yourself that you understand the code. The final step is
the mythical *quality* step.

Communism Works in Theory
-------------------------

Even if the code is "correct" that doesn't mean that it is "good". Do
the abstractions make sense? Do they fit within the patterns of the
existing codebase?  Are we needlessly introducing new abstractions?
Can I reasonably easily modify the behavior of the code? Is the code
testable? All of these things are arguably measuring code quality.

How do you tell? I admit, I can almost never tell the *quality* of the
code until I try to work with it, but I'm amazed at how quickly I
adjust my opinion of code after trying to work with it, even just a
little bit. My proposal is, as part of the code review, commit a
refactoring step. That's right - get your stink on that code. Now,
this could be controversial in team where people are defensive about
their code, but I would argue that people need to get over that kind
of defensiveness sooner rather than later. That kind of attitude is
toxic.

[insert Fowler quote about refactoring as a means of understanding]

If it helps, explain that you're primarily doing it as an excercise in
understanding the code. Ask the person who contributed the code to
verify that your refactor is correct and if they think your changes
are an improvement. It is essential that there is a sense of group
ownership, thus group responsibility, of the codebase.

Ultimately, code reviews are only as valuable as your teams commitemnt
to doing them. Obviously *you* care. You're reading an article with a
link-baity title just to make sure your values are being fairly
represented. But how do you evangalize the practice to your team?
Mandating code reviews is simple enough, but any schmoe can say
"LGTM". I don't have a great answer to this. I try to lead by example
by being very verbose, and largely positive in my reviews. Consider
the "Sandwich" of human interactions. You know the sandwich right?

The Sandwich
------------

If you have something critical to say, preface it by saying something
nice, and then follow it up with something nice, however insubstantial
the nice parts may be.

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
paying attention ("Yup - this method looks good", "nice use of *&lt;some
obscure method&gt;*! Didn't know about that one.")

That brings me to my next point...

Get Personal Value
==================

I find code reviews to be incredibly valuable to my development as a
software engineer. Everyone has something to teach, everyone has
something to learn. Foster a culture of appreciating peoples
knowledge, regardless of how trivial, as a means of encouraging more
meaningful contributions in the future.

Default to accepting people's suggestions. If your code is being
reviewed, and someone makes a suggestion that you are truly ambivalent
about, prefer their version. For one, maybe they have some ineffable,
but very real, reason to prefer a particular approach. As long as you
see them as equivalent, it's a win to do something someone
suggests. It shows them that you are receptive (you *are* receptive
right?), and encourages future contributions by the reviewer.

Unprofound Conclusion
=====================

I don't feel that I've "mastered" the art of code reviews, but I have
thought about it a lot, and I have made some headway since I
started. By not fixating on trivial errors, actually working with the
code under review, and fostering an environment that nurtures teaching
and learning you can make code reviews a more valuable process -
valuable to your software and valuable to your team.
