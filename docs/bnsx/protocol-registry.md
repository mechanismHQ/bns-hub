---
sidebar_label: Name Registry
---

# BNSx Name Registry

The name registry contract acts as the central hub for storing BNS X name information. More specifically, it stores the relationship between:

- name (like hank.btc)
- name IDs - unique numbers
- name owner
- an account's primary name and other names
- namespace owners

All core name actions (like registering and transferring) must go through the name registry.

The core data in the registry is a "name record", which has similar properties to domain names on the web. A name record has two parts - a "name" and a "namespace". For example, the record "alice.btc" has "alice" as the name and "btc" as the namespace.

## Name NFTs

Each name record has an associated NFT, which is exposed through the name registry contract. This NFT is [SIP9-compliant](https://github.com/stacksgov/sips/blob/main/sips/sip-009/sip-009-nft-standard.md), which means it can be used in any app, wallet, or marketplace that supports Stacks NFTs.

## Primary names

The name registry keeps track of an account's "primary name". This way, if an account owns more than one name, apps have an easy way of displaying a single BNS X name in association with a Stacks address. This is similar to the "reverse record" concept in other naming systems like ENS.

If an account owns any BNS X name, they'll always have a "primary name" set. If an account transfers their primary name, then the name registry will automatically set their "next" name as their new primary.

Users can manually switch their primary name by calling the set-primary-name method.

For an example of primary name updating automatically:

- Alice registers "alice.btc", her first name
  - Because this is her first name, it's set as her primary
- Alice registers "alicesmith.btc"
- Alice transfers "alice.btc"
  - Because this is her primary name, the name registry automatically sets "alicesmith.btc" as her new primary

## Authorization

Most functions defined in the name registry are not callable by external users and contracts. Instead, these functions are only callable by authorized contracts. Specifically, only contracts with the "registry" role are allowed to call these functions.

This authorization structure allows for greater flexibility in how names and namespaces are managed.
