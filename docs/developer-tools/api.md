---
sidebar_label: API
---

# BNS API

**Production URL**: [`api.bns.xyz`](https://api.bns.xyz)

[OpenAPI Documentation](https://api.bns.xyz/documentation)

Apps and wallets that want to integrate with BNS and BNSx can use the BNS API to easily fetch name and address information.

To make the process of integration as easy as possible, the API provides a backwards-compatible interface from the [Stacks Blockchain API](https://hirosystems.github.io/stacks-blockchain-api/#tag/Names)'s BNS endpoints.

When using the BNS API, all requests will prioritize ownership information based on BNSx ownership if the name is on BNSx. This is because names on BNSx have the BNS Core name "wrapped" in a smart contract. This will allow apps to work exactly as expected, whether a name is on BNS or BNSx.

Because migrating to BNSx involves [wrapping your BNS Core name](../bnsx/wrapping-names), using the Stacks Blockchain API endpoints won't work for users that have upgraded.
