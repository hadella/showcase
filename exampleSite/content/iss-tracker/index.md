+++
title      = "ISS Tracker"
date       = 2023-05-08
draft      = false
thumbnail  = "images/iss-tracker-thumb.png"
p5_border_color = "transparent"
p5_sound    = false
+++

{{< p5 sketch="sketch.js" width="960" height="484" caption="ISS Tracker Demo" >}}

<div id="iss-data" class="iss-json"></div>
<script>
window.addEventListener("message", function(e) {
    document.getElementById("iss-data").textContent = e.data;
});
</script>

---

**ISS Tracker** queries a live API for the current GPS position of the
International Space Station, plotting it as a red dot on a map of Earth.
As time passes, a red trail marks the path the station has traveled.

This demo illustrates two key p5.js concepts: loading external assets
via `preload()` — which ensures the globe image is ready before the
sketch runs — and fetching live data from a remote API using `loadJSON()`.
It also exposed some interesting quirks of running p5 inside an iframe,
which helped shape how this theme handles sketch embedding.

The original source of this sketch is unknown but may originate from
[The Coding Train](https://www.youtube.com/@TheCodingTrain), Daniel
Shiffman's excellent YouTube channel covering creative coding with p5.js.
