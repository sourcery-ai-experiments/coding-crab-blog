---
lang: en
page_id: semantic-versioning-explained
title: Semantic Versioning Explained
description: Semantic Versioning explained in a simple way
date: 2023-02-28 16:40 +0100
categories:
  - Version Control
tags:
  - Version Control
  - Github
---

In this post, you will learn about Semantic Versioning in a simple way and how to use it in your projects.

## What is Semantic Versioning?

Semantic Versioning is a **set of rules and requirements** that dictate how **version numbers** are assigned and incremented. These rules are based on but not necessarily limited to pre-existing widespread **common practices** in use in both closed and open-source software.

## Format

Sematic Versioning is represented by a string of the format `MAJOR.MINOR.PATCH`, where:

`MAJOR` is incremented when **incompatible API changes** are made. That means that it is **not backwards-compatible** and will break existing code that uses the old API.

`MINOR` is incremented when **functionality** in a backwards-compatible manner **is added**. That means that **it is backwards-compatible** and will not break existing code that uses the old API.

`PATCH` is incremented when backwards-compatible **bug fixes** are made. That means that it is backwards-compatible and will not break existing code that uses the old API. Other than in the `MINOR` case, **no changes to the API** and **no new functionality** is added.

## Example

`1.0.0` -> optimization -> `1.0.1` -> bugfix -> `1.0.2` -> non-breaking feature -> `1.1.0` -> breaking feature -> `2.0.0`

Here we start with version `1.0.0`. We optimize the code, which is a non-breaking change and adds no functionality, so we increment the `PATCH` version (`1.0.1`).  Then we fix a bug, which is a non-breaking change, so we increment the `PATCH` version again (`1.0.2`). Then we add a non-breaking feature, which adds functionality, so we increment the `MINOR` version (`1.1.0`). Finally, we add a breaking feature, which is a breaking change, so we increment the `MAJOR` version (`2.0.0`).

## Initial Development

Before version `1.0.0` is released, anything may change at any time. The public API should not be considered stable. In other words, the `MAJOR` version is `0`. After version `1.0.0` is released, the public API should be considered stable.

## Backwards Compatibility

Backwards compatibility is defined as follows: if a user of the library is using a version of the library that is older than the current version, and the user upgrades to the current version, the user's code should still work. If the user's code does not work, then the user has to upgrade their code to work with the current version.

## Reference

- [https://semver.org/](https://semver.org/)
