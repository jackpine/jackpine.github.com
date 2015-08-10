---
layout: post
title: Dangerous Cycling Intersections in Los Angeles
author: michaelkirk
published: true
---

Goal
----

Rank the most dangerous intersections for cyclists in Los Angeles.

Process
-------

To find all the bicycle collisions that occured in each intersection in Los
Angeles we needed to get the following:

1. Intersections in Los Angeles
2. Bicycle collisions in Los Angeles
3. Count the collisions per intersection

### Intersections

To get all the intersection in Los Angeles, we start with all the streets in
the LA Planning Department's [Circulation file](#data-circulation). Using
QGIS's *Line Intersections* tool, we can turn the streets (a bunch of lines),
into intersections (a bunch of points) (Go to *Menu:Vector > Analysis > Line
Intersections*). You want to intersect the circulation layer with itself,
leaving the OBJECTID as the unique identifier.

Now, because our intersections are infinitesimal points, we need to calculate a
buffer around the point to represent the size of the intersection. To simplify
analysis, we assume that all collisions within 30 feet of the center of the
intersection should be considered as having happened "at" that intersetion.

To do this, create a new buffer (Go to: *Menu: Vector > GeoProcessing Tools > Buffer*).
Select your new intersections layer as the input vector layer, and set
buffer distance to 30. Save your output shapefile as "intersection
buffers". Make sure you're using a CRS whose units are in feet!

### Bicycle Collisions

We used the [TIMS](#data-tims) data source, which includes all reported
automobile involved collisions in California. Using QGIS we filtered this to
just Bicycle Collisions, and then cropped it to the area surrounding Los
Angeles streets.

### Collisions per Intersection

Now, we want to count all the collisions that occured within each one of
these buffers. Using the QGI Points in Polygon feature,
(Menu: Vector > Analysis > Points in Polygon) we counted the number of
collisions within our intersection buffer layer. Inspect the attributes
table for the new layer, sort by count, and *viola*. LA's most dangerous
intersections.

Data Sources
------------

### <a name="data-circulation"></a> Circulation File

From [Los Angeles Planning Department](http://cityplanning.lacity.org/)'s
Circulation file (streets data). Go to "GIS Data".

Here's the version we used in our analysis: [Circ.zip](https://collision-la.s3-uswest-1.amazonaws.com/data/2015-08-06-dangerous-cycling-intersections-in-los-angeles/Circ.zip)

### <a name="data-tims"></a> TIMS SWITRS Collision Database

From [TIMS](http://tims.berkeley.edu/), who geocodes all the collisions in the [SWITRS California collision database](http://iswitrs.chp.ca.gov/).

Here's the version we used in our analysis: [SWITRS_2003_2012_SHP.zip](https://collision-la.s3-uswest-1.amazonaws.com/data/2015-08-06-dangerous-cycling-intersections-in-los-angeles/SWITRS_2003_2012_SHP.zip)

### Data we Produced

You can download all of our layers and an example QGIS project file.

[intersections-2015-08-06.zip](https://collision-la.s3-uswest-1.amazonaws.com/data/2015-08-06-dangerous-cycling-intersections-in-los-angeles/intersections-2015-08-06.zip)

