---
layout: post
title: Cycling Collisions Heatmap in Los Angeles
author: michaelkirk
published: true
---

We wanted to find out where the most automobile/bicycle collisions were happening.

![Heatmap of bicycle collisions in Los Angeles]({{site.baseurl}}/images/blog/plain heatmap.png)

One of the hard things about using a heatmap visualization is showing a meaningful difference between different scales of data. For example, it has to look OK for a collision-dense area like Downtown Los Angeles, while still showing useful information for somewhere with relatively fewer collisions, like downtown Chico. It's akin to the problem of dynamic range, or adaptive exposure in photography. We need to ensure Downtown Los Angeles doesn't look like one giant red blob, nor is it desirable to imply that because Chico has less total collisions that there aren't places that are more problematic, thus deserving of more attention.

To achieve this, the scaling is done adapatively, considering the total number of incidents viewable on the map pane, and weighting the clustering of collisions so as to (hopefully) utilize the full spectrum of color, showing where the *relatively* collision prone places are.

But this highlights another problem of heatmaps - there is no absolute sense of what we're seeing. To partially address this, we introduced a line chart showing the number of collisions represented by the viewable area, and showed how they've changed over time.
