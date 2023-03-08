---
lang: en
lang-ref: markdown-components-cheatsheet
title: Markdown Components Cheatsheet
description: A cheatsheet for all the Markdown components available in this template.
date: 2023-02-20 18:13:00 +0100
published: true
categories:
  - cheatsheets
tags:
  - markdown
  - cheatsheet
---

In this post, you will find a cheatsheet for all the Markdown components available in this template.

## Text

Text can be **bold**, _italic_, [linked](#), ~~strikethrough~~, <mark>highlighted</mark>, <ins>underlined</ins>, `monospaced`, <sup>superscripted</sup>, <sub>subscripted</sub> and <small>small</small>.

Text can have <abbr title="abbreviations">abbrs</abbr> and footnotes[^1].

There should be a whitespace between paragraphs.

[^1]: This is the footnote.

## Header 2 (with custom id) {#custom-header-id}

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Blockquotes

> This is a blockquote
>
> It can have multiple paragraphs

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

## Lists

### Bullet lists

- This is a list item
- This is another list item
  - This is a nested list item on the 2nd level
    - This is a nested List item on the 3rd level
  - This is another nested list item on the 2nd level
- This is also another list item

### Numbered lists

1. This is a numbered list item
2. This is another numbered list item
  1. This is a nested numbered list item on the 2nd level
    1. This is a nested List item on the 3rd level
  2. This is another nested, numbered list item on the 2nd level
3. This is also another numbered list item

### Mix

1. This is a numbered list item
  - This is a nested list item on the 2nd level
  - this is another nested list item on the 2nd level
2. This is another numbered list item

### Checklists

- [ ] This is an unchecked list item
- [X] This is a checked list item
- [ ] This is an unchecked list item
  - [ ] This is a nested unchecked list item on the 2nd level
  - [X] This is a nested checked list item on the 2nd level

## Tables

| left aligned | centered | right aligned |
| :----------- | :------: | ------------: |
| col 3 is     | some word| $1600         |
| col 2 is     | centered | $12           |
| zebra stripes| are neat | $1            |

## Images

![Branching](https://docs.github.com/assets/cb-23923/images/help/repository/branching.png)
Image Source: [docs.github.com](https://docs.github.com)  
This is an image caption

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

## Alerts

**Default Alert:** This is a default alert. It can be used to highlight important information. It can be styled with the `notice` class and with **text utilities** from _Markdown_
{: .notice}

{% capture extended-notice %}
**Extended Alert:**

This is an extended info alert. Other than the default alert, it can be styled with all Markdown components.

- List Item 1
- List Item 2

> Blockquotes
> can be used

```js
// Code blocks
const foo = 'bar';
```

{% endcapture %}

<div class="notice--info">{{ extended-notice | markdownify }}</div>

**Primary Alert:** This is a primary alert. It can be created with the `notice--primary` class.
{: .notice--primary}

**Info Alert:** This is an info alert. It can be created with the `notice--info` class.
{: .notice--info}

**Warning Alert:** This is a warning alert. It can be created with the `notice--warning` class.
{: .notice--warning}

**Error Alert:** This is an error alert. It can be created with the `notice--danger` class.
{: .notice--danger}

**Success Alert:** This is a success alert. It can be created with the `notice--success` class.
{: .notice--success}

## Details

<details>
<summary>Click to expand</summary>
This is a details block. It can be used to hide content that is not essential for the user at first sight.
</details>

## Divider

This is some content

---

This is some other content, that is separated by a horizontal rule
