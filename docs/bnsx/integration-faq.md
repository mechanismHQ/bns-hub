---
sidebar_label: Integration FAQs
---

# BNSx Integration FAQs

## Why are BNSx names wrapped?

There are more straightforward solutions to migrating names but wrapping has some unique advantages:

- Opt in for each user. No consensus change or hard fork needed
- Names can be migrated back to BNS anytime
- No forked state between BNS and BNSx
- Individual users maintain control over their names

When a BNS name is wrapped, it is transferred to a unique Stacks smart contract to ensure ownership of the legacy name is tied to the equivalent BNSx name. This way, users who trade or transfer names on BNSx can have the assurance that they can always take control of the legacy BNS name if they want to.

Each name must have a distinct wrapper contract because of the BNS Core rule "one name per address".

## How is working with names different with BNSx vs BNS?

If your app involves transferring names, you should follow the SIP9 standard for transferring and querying names. In BNSx, each name has a distinct integer ID. You can query the BNSx name registry or use the BNSx API to get details like the ID of a name.

## How can I transfer a name out of a wrapper contract?

"Unwrapping" a name can be initiated through the wrapper contract's unwrap method. In doing so, the wrapper contract:

- Verifies that the function caller owns the equivalent name on BNSx
- Burns the BNSx name
- Transfers the BNS name to the function caller

## Can BNSx names be minted without a wrapped BNS name?

No. This state should not be possible.

## Why should we use the bns.xyz API?

If a name is minted on BNSx and your app queries BNS Core state to resolve the owner, it will resolve to a wrapper contract which is usually not desired. Most apps want to resolve the "true" owner of the BNS name and at the moment no other Stacks APIs support querying BNSx name information this way.

The solution is to use a backwards compatible API, like the [BNS API](../developer-tools/api) that will resolve the name to the owner of the wrapper. If you're using the API like this your app should resolve correctly.

### Our app uses owner address of a BNS name as a recipient. Will this still work?

If a name is minted on BNSx and your app queries BNS Core state to resolve the owner, it will resolve to a wrapper contract which is usually not desired. The solution is to use a backwards compatible API, like the [BNS API](../developer-tools/api), and your app should resolve correctly.
