---
lang: en
page_id: conventional-commits-explained
title: Conventional Commits Explained
description: Conventional Commits explained in a simple way
date: 2023-02-28 17:51 +0100
categories:
  - Handbooks
tags:
  - Version Control
---

In this post, you will learn about Conventional Commits in a simple way and how to use it in your projects.

## What are Conventional Commits?

The Conventional Commits specification is a lightweight convention that is used to replace **commit messages**. It provides some rules for creating a commit history. This makes it easier to write automated tools on top of, like **automated change logs**. This convention **dovetails with SemVer**, by describing the features, fixes, and breaking changes made in commit messages.

Format of the commit message:

```text
<type>[scope][!]: <description>

[body]

[footer]
```

## Elements

### Type

`type` is required and describes the type of change that this commit is providing. Allowed values are:

- `fix`: A bug fix
- `feat`: A new feature
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature. Like a rename of a variable.
- `test`: Adding missing tests or correcting existing tests
- `ci`: Changes to our CI configuration files and scripts
- `perf`: A code change that improves performance
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `revert`: Reverts a previous commit

### Scope

`scope` is optional and describes the affected code. For example, `(api)`, `(cli)`, etc. If there is no scope, the commit impacts the whole project and the parentheses are omitted. If there's no scope, it means that the commit impacts the entire project.

### Breaking Changes

`!` is optional and is used to indicate a breaking change. This is placed after the `scope` and before the `description`. If there is no `scope`, the `!` is placed after the `type`.

### Description

`description` is required and is a short description of the change. The description is a single line and must be no longer than 100 characters. The description must start with a capital letter and end with a period. The description should be written in the imperative, present tense: "change" not "changed" nor "changes".

### Body

`body` is optional and can include a longer description of the change. The body should include the motivation for the change and contrast this with previous behavior. This is to ensure that the git log remains readable and useful.

### Footer

`footer` is optional and can include information about breaking changes and is also the place to reference GitHub issues that this commit Closes.

## Examples

You can find examples of Conventional Commits here:

- [https://www.conventionalcommits.org/en/v1.0.0/#examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

## Reference

- [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)
