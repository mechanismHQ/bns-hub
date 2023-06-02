---
sidebar_label: Hiro-provided Tools
---

# Hiro-provided BNS Tools

[Hiro](https://hiro.so) provides a full suite of tools and platforms for apps that want to build on Bitcoin and Stacks. For BNS, the two best Hiro tools are the Stacks API and the `@stacks/bns` NPM package.

## Stacks API

The [Stacks API](https://hirosystems.github.io/stacks-blockchain-api/) is an extensive API for fetching information relating to the Bitcoin and Stacks blockchains.

:::caution
The Stacks API endpoints will not work accurately for names that are using BNSx. If you're building an app that wants to support users on both BNS and BNSx, we recommend using the [BNS API](./api.md).
:::

Among their APIs are a number of [BNS-related endpoints](https://hirosystems.github.io/stacks-blockchain-api/#tag/Names), which allow apps to:

- Fetch prices for registering names and namespaces
- Fetch all namespaces
- Fetch names for a particular namespace
- Get all names
- Get name details
- Get subdomains for a name
- Get a name's zonefile and historical zonefiles
- Get names owned by an address

## `@stacks/bns`

[View documentation on Github](https://github.com/hirosystems/stacks.js/tree/master/packages/bns)

`@stacks/bns` is a part of the Stacks.js suite of developer tools that make it easier to build apps on top of BNS Core. The `@stacks/bns` package exposes functions that allow you to:

- Check name availability
- Fetch the price for registering a name
- Register a name
- Transfer a name
- Update a name
- Renew a name
- Revoke a name
