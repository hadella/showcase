+++
title      = "Starfield"
date       = 2023-05-09
draft      = false
thumbnail  = "images/starfield-thumb.png"
p5_border_color = "transparent"
+++

{{< p5 sketch="sketch.js" files="star.js" width="800" height="600" responsive=true
  caption="Move the mouse right to increase or left to decrease speed">}}

---

**Starfield** is an implementation of
[Coding Challenge #1](https://www.youtube.com/watch?v=17WoOqgXsRM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH)
from [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman.

A field of stars flies toward the viewer, simulating warp speed travel through space.
Each star is positioned in 3D space and projected onto the 2D canvas, growing larger
as it approaches. Moving the mouse left slows the warp, moving right accelerates it.
