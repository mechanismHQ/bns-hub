---
sidebar_label: Overview
---

# BNS L1 Bridge

The BNS L1 Bridge is an extension of the core BNS protocol that allows name owners to bridge their names between Stacks (a Bitcoin L2) and the Bitcoin chain. Names can be bridged back and forth between L2 and L1.

BNS names on L1 are inscribed as [ordinals](https://ordinals.com).

## How it works

### Bridging from L2 ➡️ L1

BNS names originate on Stacks. Names can only be registered via the BNS contract on Stacks.

First, the BNS name owner creates a new inscription. To prevent malicious inscriptions (like changing the displayed name), the inscription must follow a [strict format](#inscription-format).

Next, the user calls the BNS L1 bridge contract to lock their BNS name on L2. The user provides an `inscription-id`, which is stored in the bridge contract. The name on Stacks is now owned by the bridge contract.

At this point, the relationship between the name and the inscription ID is "official".

### Bridging from L1 ➡️ L2

To bridge a BNS inscription back to L2, the inscription owner must transfer it to a specific burn address. This burn address is formatted to include the user's Stacks address. This way, every Stacks address has a 1-to-1 mapping of a unique burn address.

Once the inscription is transferred to a burn address, the user can call the L1 bridge contract on Stacks to receive the name on L2. The contract verifies that the inscription was transferred to the correct burn address, and then transfers the BNS name to the user's Stacks address.

## Inscription format

```html
<style>
  body,
  html {
    margin: 0;
  }
</style>
<script
  src="/content/1c0e770e0b28207a4e1b7f577b68940b36837f9046b95eef2694ab671a1dfdeei0"
  type="module"
></script>
<bns-card n="{{BNS_NAME}}" />
```
