+++
title      = "hr shortcode"
date       = 2026-04-04
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Markdown supports basic horizontal rules using `---`.

---

{{< space "3rem" >}}

However, we can use the `hr` shortcode to add styled horizontal breaks as an alterative.

```
{{</* hr */>}}
```

The default is a line using using the `mute` color which matches the normal text color.

{{< hr >}}

### Options
- line → (default)
- dots
- dashed
- fade

```
{{</* hr dots */>}}
```

{{< hr dots >}}

```
{{</* hr dashed */>}}
```

{{< hr dashed >}}

```
{{</* hr fade */>}}
```

{{< hr fade >}}

### Colors
- mute (default)
- info
- note
- warning
- success
- error
- important

```
{{</* hr line info */>}}
```

{{< hr line info >}}

```
{{</* hr fade info */>}}
```

{{< hr fade info >}}

```
{{</* hr dashed note */>}}
```

{{< hr dashed note >}}
