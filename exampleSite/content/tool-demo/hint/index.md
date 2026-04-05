+++
title      = "hint shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Hints come in several types for different purposes. Without a label, the hint is styled simply.

```
{{</* hint */>}}
This is a simple hint without a label; use for for general callouts
{{</* /hint */>}}
```

{{< hint >}}
This is a simple hint without a label; use for for general callouts
{{< /hint >}}

*The `showcase` Hugo theme doesn't support normal markdown blockquotes, as the `hint` shortcode is essentially its replacement.*

## Syntax

```
{{</* hint [option] [tint] */>}}
```

{{< layout >}}
{{< md >}}
### Option
- (empty) → (default)
- info
- note
- warning
- success
- error
- important
{{< /md >}}
{{< md >}}
### Tint
- true
- false → (default)
{{< /md >}}
{{< /layout >}}

## Examples

```
{{%/* hint info */%}}
This is an informational hint. Great for sharing helpful info. No tint.
{{%/* /hint */%}}
```

{{% hint info %}}
This is an informational hint. Great for sharing helpful info. No tint.
{{% /hint %}}

```
{{%/* hint info true */%}}
This is an informational hint. Great for sharing helpful info.
{{%/* /hint */%}}
```

{{% hint info true %}}
This is an informational hint. Great for sharing helpful info.
{{% /hint %}}

{{< hr fade >}}

```
{{%/* hint note */%}}
This is a note hint. Use it for general observations or side notes. No tint.
{{%/* /hint */%}}
```

{{% hint note %}}
This is a note hint. Use it for general observations or side notes. No tint.
{{% /hint %}}

```
{{%/* hint note true */%}}
This is a note hint. Use it for general observations or side notes.
{{%/* /hint */%}}
```

{{% hint note true %}}
This is a note hint. Use it for general observations or side notes.
{{% /hint %}}

{{< hr fade >}}

```
{{%/* hint warning */%}}
Use warning hints to caution readers about potential issues. No tint.
{{%/* /hint */%}}
```

{{% hint warning %}}
Use warning hints to caution readers about potential issues. No tint.
{{% /hint %}}

```
{{%/* hint warning true */%}}
Use warning hints to caution readers about potential issues.
{{%/* /hint */%}}
```

{{% hint warning true %}}
Use warning hints to caution readers about potential issues.
{{% /hint %}}

{{< hr fade >}}

```
{{%/* hint success */%}}
This is an success hint. Perfect for highlighting achievements. No tint.
{{%/* /hint */%}}
```

{{% hint success %}}
This is an success hint. Perfect for highlighting achievements. No tint.
{{% /hint %}}

```
{{%/* hint success true */%}}
This is an success hint. Perfect for highlighting achievements.
{{%/* /hint */%}}
```

{{% hint success true %}}
This is an success hint. Perfect for highlighting achievements.
{{% /hint %}}

{{< hr fade >}}

```
{{%/* hint error */%}}
This is an error hint. Perfect for highlighting mistakes to avoid. No tint.
{{%/* /hint */%}}
```

{{% hint error %}}
This is an error hint. Perfect for highlighting mistakes to avoid. No tint.
{{% /hint %}}

```
{{%/* hint error true */%}}
This is an error hint. Perfect for highlighting mistakes to avoid.
{{%/* /hint */%}}
```

{{% hint error true %}}
This is an error hint. Perfect for highlighting mistakes to avoid.
{{% /hint %}}

{{< hr fade >}}

```
{{%/* hint important */%}}
This is an important hint. Use it for **critical** information. No tint.
{{%/* /hint */%}}
```

{{% hint important %}}
This is an important hint. Use it for **critical** information. No tint.
{{% /hint %}}

```
{{%/* hint important true */%}}
This is an important hint. Use it for **critical** information.
{{%/* /hint */%}}
```

{{% hint important true %}}
This is an important hint. Use it for **critical** information.
{{% /hint %}}
