---
layout: article.njk
title: "Aliexpress Caught Fingerprinting Users"
description: "Aliexpress caught using sounds in the user's browser to track people across sessions"
date: 2026-08-28
cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FMP6H46MMKNPKRH2S6WLECHKTOA.jpg&f=1&nofb=1&ipt=d3c667cd36425316abb422feaa808449513d80300b35e17f3b006bd3fe7e3a0a"
coverAlt: "Shopping cart with AliExpress logo in the background"
---

The popular Alibaba-owned online shopping marketplace Aliexpress has been under investigation for using fingerprinting tactics, such as using an almost silent sound through your browser window to detect variation in the output caused by differences in hardware. This alongside other existing data such as the user's browser and operating system can be used to fingerprint their device and tracked across sessions. Tom Ritter, a Firefox developer and Tor Project contributer, has stated that their protections largely blocked the attempts:

> browser fingerprinting is a far-too-pervasive method of tracking users across the web, but at least for WebAudio specifically, it's not very effective. Firefox has largely eliminated this fingerprinting vector. ([ritter.vg](https://ritter.vg/blog-webaudio_alibaba.html), 20 August 2026)

Most Chromium-based browsers with lesser security such as Google Chrome, Microsoft Edge, and Opera have been left vulnerable to this tactic and others deployed by Aliexpress.