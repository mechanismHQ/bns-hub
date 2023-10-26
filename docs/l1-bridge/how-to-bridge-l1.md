---
sidebar_label: "How to: Bridge to L1"
---

# How to bridge a BNS name to L1

To bridge a BNS name to L1, start by logging in to [Dots](https://www.dots.so). You'll see a list of your names. Next to the name you want to bridge, click the "actions" dropdown on the right-hand side, and then click "Bridge to L1". You can also start this process by visiting `dots.so/bridge/{bns-name-here}`.

## Step 1: Inscribe the name

You'll be provided the exact inscription content that you need to use to inscribe this name. To prevent abuse, the bridge contract mandates that the inscription follows an exact formatting.

The inscription must also use the content type `text-html;charset=utf-8`. This ensures that the inscription is displayed properly in Ordinals explorers.

## Step 2: Bridge to L1

Once the inscription is confirmed, enter your inscription ID and click "submit". This will trigger a Stacks transaction that does a few things:

- Transfers the BNS name to the bridge contract
- Registers the official inscription ID for this name

## Finishing up

Once your Stacks transaction is confirmed, it is now an "official" BNS inscription.

You can validate that any inscription is "official" by viewing the name on [Dots](https://www.dots.so). You can search for the name or simply visit `dots.so/names/{name}`.

If the name details includes an Inscription ID field, that means that the name has been bridged to L1.

![bns-on-l1-details](/img/bns-l1-details.png)
