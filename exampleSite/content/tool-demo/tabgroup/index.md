+++
title      = "Tab/Tabgroup Shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Tab groups let you show related content in different formats:

{{< tabgroup >}}

{{< tab title="Python" >}}
```python
def hello():
    print("Hello, world!")
```
{{< /tab >}}

{{< tab title="JavaScript" >}}
```javascript
function hello() {
  console.log("Hello, world!");
}
```
{{< /tab >}}

{{< tab title="Go" >}}
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```
{{< /tab >}}

{{< /tabgroup >}}
