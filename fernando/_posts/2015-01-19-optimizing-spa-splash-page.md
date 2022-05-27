---
layout: post
title: Optimizing Single Page App Splash Screen
author: fernando
---

With the growing trend of single page app/websites, initial page load tend to take a bit longer.
The advantage being that after only small bits of JSON will be passed from the client/server.

When I started working on Jackpine website, I paid little attention on the images
which were being handed over from the designer. Pretty soon the total
size for the page download was nearing 2.0 MB, 1.6 MB for images.

The intial splash page background image was around 307 KB and from using the Google inspector
end of the stack and would slowly reveal itself.  This looked horrible. After some
searching on the web on prioritizing GET requests for the background image I found
that by default background images are last to build becasue they are set in the CSS.
You could inline the css background but that would make the HTML structure have styling not
cool for the semantics nerds. And even if you did add the inline it would still load after
GETting all those huge JS libraries needed.

The solution is simple just instantiate a Javascript image object with
the source of the image.

CODE HERE

{% highlight javascript %}
img = new Image;
img.src = 'image/source.png';
{% endhighlight %}

And placing this inline at the top of the html page before any calls to the JS or CSS, GETs
image before anything else.  For more bonus points in quick loading don't use any jQuery, just
straight JS and it will shave a few milliseconds.  And for even more make a low res picture and
overlap the images using the CSS background comma spearated.

{% highlight css %}
background-image: url(low-res.png), url(high-res.png);
{% endhighlight %}

This will basically load the first image on the list and once the next image is complete it will
overlap it in a sudden blink. The effect is pretty suddle if you aren't looking for it.

Now your page might be getting somewhere and looking a little more snappy on the first laod.
To really polish it off add and fade in effect to the text and your page is on its way to really
pro work.  Because what happend is that if you are using some fancy web font this again add to a
bit of timing that cause the text to rended with some default font followed by the web font.
And since the image is the screen first you might want the fade in in to avoid having a nasty
flash of text.

Well all this shouldn't add to much time to your project for adding some extra quality to your
site. Feel free to check the source code on this site. And I hope you enjoyed this tech write up.

