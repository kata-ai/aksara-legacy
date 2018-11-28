---
id: foundation-typography
title: Typography
prev: foundation-spacing
next: components-avatar
---

<text-primary>

Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.

</text-primary>

## Typeface

### Font Stacks

We use Museo Sans Rounded fonts as our primary font type, the exception being when you want to display code then you should defer to monospace fonts.

```css
html {
  font-family: 'Museo Sans Rounded', 'Helvetica Neue', Arial, sans-serif;
}
```

**Museo Sans Rounded**

### Font Weight

Font weight is an essential typographic style that can add emphasis and is used to differentiate content hierarchy. Font weight and size pairings must be delicately balanced.

A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold.

<foundation-font-stack weight="700">Museo Sans Rounded - 700</foundation-font-stack>
<foundation-font-stack weight="500">Museo Sans Rounded - 500</foundation-font-stack>
<foundation-font-stack weight="300">Museo Sans Rounded - 300</foundation-font-stack>
<foundation-font-stack weight="100">Museo Sans Rounded - 100</foundation-font-stack>

## Type Scale

With elastic layout, line-height along with font-size is better calculated with em. Because em is a relative measurement unit, it is based on the value of the parent element. 1.25em and 1.5em is the most common line-height; it states that this paragraph has a line-height of 125% of the current font-size. Note that variant line-height has different purpose.

if the font-size for paragraph is 14px, then the line-height is 1.5em x 14px = 20px, instead if the same font-size for such label or text for highlighting important pieces of information, then the line-height is 1.25em x 14px = 17.5px (18px).

| Name  | rem          | px   | line-height        |
| ----- | ------------ | ---- | ------------------ |
| deka  | **0.75rem**  | 12px | **16px / 1.325em** |
| hecto | **0.875rem** | 14px | **20px / 1.425em** |
| kilo  | **1rem**     | 16px | **24px / 1.7em**   |
| mega  | **1.125rem** | 18px | **22px / 1.2em**   |
| giga  | **1.25rem**  | 20px | **24px / 1.2em**   |
| tera  | **1.5rem**   | 24px | **30px / 1.25em**  |
| peta  | **1.75rem**  | 28px | **32px / 1.125em** |

## Type Style

<foundation-typography-table></foundation-typography-table>

### Formatting

| Style                | Size | Content                                        |
| -------------------- | ---- | ---------------------------------------------- |
| Paragraph            | 14px | Hello World - use tag `<p>`                    |
| **Paragraph**        | 14px | **Hello World** - use tag `<strong>`           |
| <small>Small</small> | 12px | <small>Hello World</small> - use tag `<small>` |
| <a>Link</a>          | 14px | <a>Hello World</a> - use tag `<a>`             |
