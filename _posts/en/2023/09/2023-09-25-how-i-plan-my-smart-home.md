---
lang: en
lang-ref: how-i-plan-my-smart-home
title: How I plan my smart home
description: How I plan my smart home
date: 2023-09-25 10:43 +0100
published: true
categories:
  - smart-home
tags:
  - smart home
  - self-hosting
  - foss
---

## How I plan my smart home

### Introduction

It begins with a simple question: *“What do I want to do?”.*

Currently, we have some Shelly bulbs, a Google Nest Mini, and two Google Nest Hubs at home, all connected to the Google Home app. But to automate some things, this is not enough, and you need some better tools. Since I'm a huge fan of FOSS and self-hosting, I did some research.

### Why self-hosting?

Currently, all your data is everywhere in the world. You have no control over it, and you don't know what happens to it. Let me give you a few examples: Google, Facebook, Amazon, Apple, Microsoft, etc. all have your data, and you don't know what they do with it. They can sell it to other companies, use it for their purposes, or even give it to the government. Besides that, all other 'free' services you use. Free mostly means that you are the product. They use your data to make money.

Self-hosting means that you have full control over your data. You can decide what happens to it, and you can even encrypt it. With self-hosting, you will probably come across  FOSS, which stands for Free and Open Source Software. [In the next section](#what-is-foss), I will explain what FOSS is and why it's free, but you're not the product.

But self-hosting is not for everyone. You need to have some knowledge about computers and networking. You need to know how to set up a server, how to secure it, and how to maintain it. But if you are willing to learn, you can do it.

### What is FOSS?

FOSS, or Free and Open Source Software, stands for software that is free, and you can look at the code. Free means that you have the freedom to use it, study it, change it, and share it. You can use it for any purpose; you can study how it works, you can change it to make it do what you want, and you can share it with others. This is the reason FOSS is so great. You can do whatever you want with it.

If you use FOSS software, you can be almost certain, that it won't track you and collect your data since there are many people who understand the code and can see what it does. And if you don't like something, you can change it.

### Cloud or self-hosted?

The first question was whether I should self-host everything and have some servers at home, or if I should use a cloud service like a VPS. Here is a comparison I made:

| Category    | Cloud | Virtual | Bare |
| ----------- |:-----:|:-------:|:----:|
| Cost        |  ++   |    +    |  -   |
| Security    |  ++   |    +    |  +   |
| Privacy     |   -   |    +    |  +   |
| Reliability |  ++   |    +    |  -   |
| Backups     |  ++   |    +    |  -   |
| Control     |   -   |    +    |  ++  |
| Complexity  |   -   |   ++    |  +   |

*Conclusion:* Cloud is more secure, reliable, and easier to use, but you have to pay for it and don't have full control over your data. With virtual servers at home, you have to do everything yourself, but you have full control over your data, which is more complex. Bare-metal servers are the other self-hosting option, but they are not the best option if something goes wrong.

### What can be self-hosted?

There are plenty of options for self-hosting, but I will only list the ones I use or plan to use in the future.

- Password manager: [Bitwarden](https://bitwarden.com/) or [Vaultwarden](https://github.com/dani-garcia/vaultwarden)
- Home automation: [Home Assistant](https://www.home-assistant.io/)
- File Sharing: [Nextcloud](https://nextcloud.com/)
- Media Server: [Jellyfin](https://jellyfin.org/)
- Mastodon: [Mastodon](https://joinmastodon.org/)
- Pixelfed: [Pixelfed](https://pixelfed.org/)

Here are some more I would like to use:

- VPN: ???
- Backup Server: ???
- Blogging Platform: ???
- Email: ???
- Calendar: ???
- Communication: ???
- Web Server: ???
- Recipe Manager: ???

### How I will continue

The first thing I will do is decide if I want to have some servers at home or use a VPS. But no matter what I choose, I'll have to set up Home Assistant at home since if something happens or the internet goes down, I still want to be able to control my smart home (or just prevent a disaster). All other services can be set up on a VPS, since it wouldn't be too bad if I couldn't access them for a moment.

The next thing after setting up Home Assistant will be Bitwarden, followed by Nextcloud and Jellyfin. After that, I will set up Mastodon and Pixelfed.
