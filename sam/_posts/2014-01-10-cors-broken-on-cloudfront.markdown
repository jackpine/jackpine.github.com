---
  layout: post
  title: CloudFront Breaks Web Fonts on Firefox
  author: samvevang
---

Fancy CSS fonts using @font-face have [been around](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face#Browser_compatibility) for a while now. These fonts are defined in a stylesheet and encoded as special [WOFF or TTF](http://www.fontsquirrel.com/tools/webfont-generator) resources. The good news is that this opens a whole new world of comic-sans style fonts ready to be used in your web application. The bad news is that in the case of a CDN you have to fiddle with cached CORS headers to make them work on Firefox.

In a recent rails project we discovered that all our beautiful new fonts looked terrible when viewed with Firefox. Instead of "Big Noodle Titling" we were getting a garish Helvetica, our fallback font. Looking at the trace of network connections in the browser's debugger, we discovered that in Firefox the web fonts were throwing a Cross-Origin error: 

    14:30:14.610 downloadable font: download failed (font-family:
    "big_noodle_titling" style:normal weight:normal stretch:normal src index:2):
    bad URI or cross-site access not allowed

Chrome, however, was downloading and displaying the fonts just fine.

CORS and WebFonts, the mystery deepens
---------------------------------------

Cross Origin Resource Sharing a.k.a. [CORS](https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS) is a way for web domains to tell the browser that it's OK to access and use resources from another domain. The wikipedia has a great example of [how the CORS mechanism works](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing#How_CORS_works). The client proclaims which domain it acquired the font url from and the asset host responds with the domain that the font can be used on. This is how Firefox works. It turns out that when it comes to web fonts Chrome was completely ignoring CORS and was not even bothering to send out the "hey I downloaded this from" Origin header with the request for the font. If Chrome had done this, there wouldn’t have been a problem (assuming we live in a Chrome/Firefox universe). However because Chrome didn’t ask, the asset host had no reason to respond with the "it's OK to go ahead and use this font" Access-Control-Allow-Origin header.

Because Caching
---------------

We were serving our Rails assets to CloudFront from our application, So every time we deployed to production the browsers dutifully downloaded the new asset bundles. Since CloudFront caches headers, if the first client to hit the asset resources was a browser that disregarded CORS for web fonts (Chrome), the assets were cached in CloudFront _without_ the CORS headers. Likewise, if the browser honored CORS (Firefox), the assets were cached in CloudFront _with_ the correct headers.

The solution was to broadcast the Access-Control-Allow-Origin header with each HTTP response from our asset resources. Doing that bypassed the 'runtime' configuration of CORS. In our case because we didn't have any complex rules associated with our fonts. We assumed that all the assets served by our CDN were _only_ going to be used on our app's domain  Once we decided on a solution we wrote a simple [Rack middleware](https://github.com/svevang/rack-customheader) to inject the appropriate header. Now each time CloudFront hits our assets, there is no ambiguity on the client end, we are explicitly giving the go-ahead to use the font for our domain. If you're using a caching CDN like CloudFront, assume the general case and structure your CORS headers appropriately.
