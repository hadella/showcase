+++
title      = "Layout/Cell Shortcode"
date       = 2026-03-30
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
wide       = true
+++

## Gallery and Text Side-by-Side

{{< layout cols="1 1" gap="1rem" >}}

{{< cell >}}
{{< gallery >}}
images/frame-1.jpg
images/frame-2.jpg
images/frame-3.jpg
images/frame-4.jpg
images/frame-5.jpg
{{< /gallery >}}
{{< /cell >}}

{{< cell >}}
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
{{< /cell >}}

{{< /layout >}}

## Image and Text Side-by-Side

{{< layout cols="1 1" gap="1rem" >}}

{{< cell >}}
{{< img src="images/frame-1.jpg" >}}
{{< /cell >}}

{{< cell >}}
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
{{< /cell >}}

{{< /layout >}}

## Image Wall Exceeds Column Limit

{{< layout cols="1 1 1" >}}

{{< cell >}}
{{< img src="images/frame-1.jpg" >}}
{{< /cell >}}

{{< cell >}}
{{< img src="images/frame-2.jpg" >}}
{{< /cell >}}

{{< cell >}}
{{< img src="images/frame-3.jpg" >}}
{{< /cell >}}

{{< cell >}}
{{< img src="images/frame-4.jpg" >}}
{{< /cell >}}

{{< cell >}}
{{< img src="images/frame-5.jpg" >}}
{{< /cell >}}

{{< /layout >}}

## Two Columns of Text

{{< layout cols="1 1" gap="1rem" >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< /layout >}}

## Two Columns of Text with Left Column Wide

{{< layout cols="2 1" gap="1rem" >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
</p>
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< /layout >}}

## Two Columns of Text with Right Column Wide

{{< layout cols="1 2" gap="1rem" >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
</p>
{{< /cell >}}

{{< /layout >}}

## Three Columns of Text

{{< layout cols="1 1 1" gap="1rem" >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< /layout >}}

## Three Columns Middle One Wide

{{< layout cols="1 2 1" gap="1rem" >}}

{{< md >}}
- Item 1  
- Item 2  
  - SubItem 1  
  - SubItem 2  
- Item 3
{{< /md >}}

{{< cell >}}
{{% alert info %}}
This is an informational alert. Great for sharing helpful info. No tint.
{{% /alert %}}

{{% alert warning true %}}
This is a warning alert. Use it to caution readers about potential issues.
{{% /alert %}}

{{% highlight note %}}
Highlights are great for sharing key takeaways and notes. No tint.
{{% /highlight %}}

{{% highlight success true %}}
Your configuration is working correctly! No tint.
{{% /highlight %}}
{{< /cell >}}

{{< cell text="justify" >}}
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
{{< /cell >}}

{{< /layout >}}

## Code Blocks in Multi-Columns

{{< layout gap="1rem">}}

{{< cell >}}
{{< md >}}
```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```
{{< /md >}}
{{< /cell >}}

{{< cell >}}
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
{{< /cell >}}

{{< /layout >}}

## Get Crazy

{{< layout cols="1 1" gap="1rem" >}}

{{< cell >}}
{{< layout cols="1 1" >}}
{{< img src="images/frame-1.jpg" >}}
{{< img src="images/frame-2.jpg" >}}
{{< img src="images/frame-3.jpg" >}}
{{< img src="images/frame-4.jpg" >}}
{{< /layout >}}
{{< /cell >}}

{{< cell >}}
{{< table color="note">}}

| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |

{{< /table >}}
{{< /cell >}}

{{< details "Click to see technical details" true >}}
Here's some detailed technical information that most readers might not need. By hiding it in a collapsible section, you keep the main content focused while still providing depth for interested readers.

{{< cell >}}
You can include any Markdown content here:
- Lists
- Code blocks
- **Formatted text**
{{< /details >}}
{{< /cell >}}

{{< cell >}}
{{% alert info %}}
This is an informational alert. Great for sharing helpful info. No tint.
{{% /alert %}}

{{% alert warning true %}}
This is a warning alert. Use it to caution readers about potential issues.
{{% /alert %}}

{{% highlight note %}}
Highlights are great for sharing key takeaways and notes. No tint.
{{% /highlight %}}
{{< /cell >}}

{{< cell >}}
{{< md >}}
```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```
{{< /md >}}
{{< /cell >}}

{{< cell >}}
{{< img src="images/frame-5.jpg" >}}
{{< /cell >}}

{{< /layout >}}
