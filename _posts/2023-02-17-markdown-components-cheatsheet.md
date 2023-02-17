---
title: Markdown Components Cheatsheet
description: A cheatsheet for all the Markdown components available in this template.
date: 2023-02-15 14:37:00 +0100
categories:
  - cheatsheets
tags:
  - markdown
  - cheatsheet
---

In this post, you will find a cheatsheet for all the Markdown components available in this template. 

## Text

Text can be **bold**

Text can be _italic_

Text can be ~~strikethrough~~

Text can be <mark>highlighted</mark>

Text can be <ins>underlined</ins>

Text can be [linked](#)

There should be whitespace between paragraphs.

## Header 2 (with custom id) {#custom-header-id}

### Header 3

#### Header 4

##### Header 5

###### Header 6

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Blockquotes

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

## Code Blocks

Single `monospaced` words

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```txt
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```txt
The final element.
```

## Lists

### Bullet lists

* is an unordered list following a header.
* This is an unordered list following a header.
  * 2nd Level
    * 3rd Level
* This is an unordered list following a header.

### Numbered lists

1. This is an ordered list following a header.
2. This is an ordered list following a header.
    1. 2nd Level
        1. 3rd Level
3. This is an ordered list following a header.

### Checklists

* [ ] Item 1
* [X] Item 2
* [ ] Item 3

## Tables

| head one     |     head two      | head three |
| :----------- | :---------------: | ---------: |
| ok           | good swedish fish |       nice |
| out of stock |  good and plenty  |       nice |
| ok           |   good `oreos`    |        hmm |
| ok           | good `zoute` drop |       yumm |

## Dividers

---

## Images

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://docs.github.com/assets/cb-23923/images/help/repository/branching.png)

### Captioned Image

![Branching](https://docs.github.com/assets/cb-23923/images/help/repository/branching.png)
This is an image caption
Image Source: [docs.github.com](https://docs.github.com)

## Definition lists

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

## Footnotes

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Alerts

### Default

**Changes in Service:** We just updated our [privacy policy](#) here to better service our customers. We recommend reviewing the changes.
{: .notice}

### Primary

**Primary Alert:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. [Praesent libero](#). Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--primary}

### Info

**Info Alert:** Lorem ipsum dolor sit amet, [consectetur adipiscing elit](#). Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--info}

### Warning

**Warning Alert:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Integer nec odio](#). Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--warning}

### Danger

**Danger Alert:** Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--danger}

### Success

**Success Alert:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at [nibh elementum](#) imperdiet.
{: .notice--success}

### Extended

{% capture extended-notice %}
#### New Site Features

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}

<div class="notice--info">{{ extended-notice | markdownify }}</div>

## Abbreviation

This is an <abbr title="abbreviation">abbr</abbr> for abbreviation.

## Subscript

Getting our science styling on with H<sub>2</sub>O, which should push the “2” down.

## Superscript

Still sticking with science and Albert Einstein’s E = MC<sup>2</sup>, which should lift the 2 up.
