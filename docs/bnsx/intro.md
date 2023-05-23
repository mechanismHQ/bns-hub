---
sidebar_label: BNSx Overview
---

# BNSx Protocol

BNSx is a protocol that extends and improves upon BNS, the Bitcoin Name System built on the Stacks Bitcoin layer. With BNS users can register a globally unique name with ownership hashed to the Bitcoin blockchain.

## Why BNSx?

BNSx provides solutions for specific BNS shortcomings:

- **SIP9 compatibility**: SIP9 is the Stacks blockchain's standard for NFT assets. By adopting SIP9 compatibility, BNSx names are automatically usable in any marketplace, wallet, and app that supports Stacks NFTs.
- **Multiple names per address**: by allowing a single address to own more than one name, BNSx improves the user experience, but it also opens up the possibility for smart contracts to control names in innovative ways.

Here's an overview of the differences between BNS and BNSx:

|                                         | BNS Core | BNSx |
| --------------------------------------- | -------- | ---- |
| Ability to convert between BNS and BNSx | ✅       | ✅   |
| Own more than one name per address      | ❌       | ✅   |
| SIP9 NFT Compatibility                  | ❌       | ✅   |
| Zonefile updates                        | ✅       | ❌   |

Over the long term, BNSx can act as a platform for adding features, flexibility, and composability to BNS. These different features can be explored and tested before being adopted into any future versions of BNS.

## BNSx FAQ

### Why should I migrate to BNSx today?

- Do you manage a collection of names that you actively list and trade? Migrating to BNSx could make name management less tedious.

- Do you want to list or trade names in native NFT products like Gamma auctions? BNSx will unlock this compatibility.

### Do I need to migrate? Anything bad happen if I don't?

No you can safely ignore BNSx with no downsides.

### Reasons to wait on migrating my names?

- If you have one primary name you use for social, websites, Sigle, or Nostr and have no intention of trading, maybe wait on migrating. Zonefile management is tricky on Stacks, and there is no great solution for updating zone files on BNSx. We'll solve this soon.
- Do you have hundreds of names in cold storage until 2025? No need to migrate yet.
- Do you want to avoid fees? Each name migration requires two Stacks transactions.

### How does migrating work?

The Dots app makes this really easy. You just follow the prompts and sign two Stacks transactions, but if you want to know what is happening under the hood:

- First, you create a name wrapper. This wrapper provides a guarantee that if you own a BNSx name, you also own the equivalent BNS core name. For example, if you buy the BNSx name “satoshi.btc” on Gamma (lucky you), you also own “satoshi.btc” on BNS core.
- Next, you use the [“name migrator"](./protocol-wrapping) contract with your wrapper to create the BNSx name and move your BNS core name into the wrapper. You also have the option of moving the BNSx name to a new address. This makes consolidating names faster and easier.

Want to learn more? Check out our docs for wrapping names and migrating:

- [Wrapping names](./protocol-wrapping)
- [Name migrator](./protocol-migrator)

### How do I reverse the upgrade process? Aka go from BNSx back to BNS?

To migrate back to BNS from BNSx, check out the docs for [unwrapping a name](../dots/unwrap-bnsx).
