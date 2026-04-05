+++
title      = "tab/tabgroup shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

The `tab`/`tabgroup` shortcodes organize related content into switchable
panels — useful for showing the same concept in multiple languages,
platforms, or formats.

## Syntax

```
{{</* tabgroup id="optional-id" />}}
{{</ tab title="Label" />}}
Content here.
{{</ /tab />}}
{{</ /tabgroup */>}}
```

{{< layout >}}
{{< md >}}
### tabgroup
- `id` → unique id for multiple groups on one page (optional)
{{< /md >}}
{{< md >}}
### tab
- `title` → tab button label (default: "Tab")
{{< /md >}}
{{< /layout >}}

{{< hr fade >}}

## Code in Tabs

```
{{</* tabgroup />}}
{{</ tab title="Python" />}}
...
{{</ /tab />}}
{{</ /tabgroup */>}}
```

{{< tabgroup id="code-example" >}}

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

{{< tab title="Rust" >}}
```rust
fn main() {
    println!("Hello, world!");
}
```
{{< /tab >}}

{{< /tabgroup >}}

{{< hr fade >}}

## Multiple Tab Groups

Use `id` to distinguish groups when more than one appears on a page.

{{< tabgroup id="os-install" >}}
{{< tab title="Linux" >}}
```bash
sudo apt install hugo
```
{{< /tab >}}
{{< tab title="macOS" >}}
```bash
brew install hugo
```
{{< /tab >}}
{{< tab title="Windows" >}}
```bash
choco install hugo
```
{{< /tab >}}
{{< /tabgroup >}}
