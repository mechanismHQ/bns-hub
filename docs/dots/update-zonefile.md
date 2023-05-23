---
sidebar_label: Update your zonefile
description: Learn how to use Dots to add information like your Bitcoin address to your name
---

# How to update your zonefile

In BNS, a "zonefile" is a way to include metadata that you want associated with a particul
ar BNS name.
With Dots, you can add records to your metadata like:

- Your Bitcoin address, so that anyone can send BTC to you simply by entering a BNS name as the "recipient". This is supported in both Hiro and Xverse wallets.
- Your Nostr npub, which allows others to find you on the Nostr decentralized social networking protocol.
- A website redirect URL, so that users can visit the web page of your choice via your BNS name
- Your LNURL, which allows users to interact with you on Lightning

:::note

Due to limitations around how zonefiles are stored on the Stacks network, only names on BNS core can be updated through Dots. BNSx names are not able to use zonefiles at this time. We are working to find solutions so that both BNS and BNSx names can use this feature.

:::

## How to update your Zonefile on Dots

First, visit [dots.so](https://www.dots.so) and login with your Stacks wallet of choice.

Once logged in, you'll see a page with all of your names. If you own a BNS Core name in the account you're logged in with, you'll see an "edit" button on the right side. Click the "edit" button to go to the "edit profile" page.

![zonefile screenshot](/img/zonefile-update.png)

On this page, you'll see information about your name, including estimated expiration and various records from your zonefile.

To edit your zonefile, click the "edit" button on the left side. Each field will become editable.

You do not need to add information to all of the fields. Once you're ready to save your changes, click the "save" button on the bottom. You'll be prompted to sign and broadcast a transaction, which is required to securely update and broadcast your zonefile across the BNS network.

Once you've broadcasted your transaction, the page will keep track of your pending update. You can leave this page at any time after you've saved your update.

When your transaction has at least one full confirmation on the Stacks network, your new profile information will be available to all BNS-integrated apps.
