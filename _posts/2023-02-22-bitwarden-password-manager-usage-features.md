---
title: Bitwarden Password Manager - Usage & Features
description: How to use the Bitwarden password manager and what can you do with it
date: 2023-02-20 10:57:00 +0100
categories:
  - security
tags:
  - password-manager
  - bitwarden
  - tools & software
---

In this post, you will learn how to use the Bitwarden password manager in your daily life and what can you do with it.

## Save an item

1. To save an item, you need to click on the `+` or the `New Item` button in the top right corner of the screen. This depends on the device you are using.
2. Select the type of item you want to save. (Visit [this section](#types-of-items) for more information about the different types of items)
3. Fill in the information of the item you want to save.
4. Click on the `Save` button.

## Types of items

Bitwarden supports different types of items you can store. These are passwords, credit card and bank account numbers, identities, notes, and files.

### Passwords

Passwords are the most common type of item you will save in Bitwarden. You can save a password for a website, an application, or a service. You can store the following information:

- **Name**: The name of the item you will see in the list of items
- **Folder**: The folder you want to save the item in (Visit [this section](#folders) for more information about folders)
- **Username**: The username you use to log in
- **Password**: The password you use to log in
- **URI**: The URL of the website, application, or service
- **Notes**: Any additional information
- **Attachment**: Any type of file (for example, a PDF file with a license key)  
- **TOTP**: The TOTP code for MFA (Visit [this section](#totp) for more information about TOTP codes)
- **Custom Fields**: Any custom fields you want to save with the item

If you save critical passwords, like for your bank account, I recommend you to enable the `require master password to view` option. This way, you will need to enter your master password to view the password. This gets you a little more security.

### Credit card and bank account numbers

You can save credit card and bank account numbers in Bitwarden that you use for online shopping. This is useful if you don't have your physical credit card with you. You can fill in the following information:

- **Name**: The name of the item you will see in the list of items.
- **Folder**: The folder you want to save the item in (Visit [this section](#folders) for more information about folders)
- **Cardholder Name**: The name of the cardholder
- **Brand**: The brand of the credit card
- **Exp. Date**: The expiration date of the credit card
- **CVV**: The CVV code of the credit card
- **Notes**: Any additional information
- **Custom Fields**: Any custom fields you want to save with the item

I highly recommend you enable the `require master password to view` option. This way, you will need to enter your master password to view the credit card or bank account number. This gets you a bit more security.

### Identities

You can also save identities in Bitwarden with your personal information. This is useful if you want to save your personal information and let it autofill in forms.

### Notes

You can save notes or other information in Bitwarden. I use it to store license keys, serial numbers, API keys, SSH keys, etc.

## Features

Bitwarden has a lot of features which makes it the best password manager for me. In this section, I will explain some great features.

### Folders

You can save items in folders. This is useful if you have a lot of items and want to organize them. You can create a folder by clicking on the `+` button in the navigation bar on the left side of the screen (desktop) or in the settings (mobile).

When you create or edit an item, you can select the folder you want to save the item in. If you don't select a folder, the item will be saved in `No Folder`.

### TOTP

TOTP is an MFA[^1] method to give an extra layer of security when login to a service. This works by generating a code based on a secret and the actual time. You can use it to generate a one-time password that you can use to log in to a website, application, or service. While autofilling the password on a website, it copies the TOTP code to your clipboard. You can then paste the TOTP code in the TOTP field in the authentication form.

**Note:** This feature is only available with the premium version of Bitwarden.
{: .notice--info}

[^1]: MFA = Multi-Factor Authentication

### Autofill

Bitwarden can autofill your passwords, credit card and bank account numbers and identities. This is useful if you don't want to copy and paste the data in forms. This only works on mobile and web browsers. You can enable the autofill feature in the settings.

### Password generator

Bitwarden has a password generator that you can use to generate a strong password. You can manually change the strength of the password and apply some rules for generating it. Bitwarden can generate passwords with numbers, symbols, uppercase and lowercase letters and also mix them.
