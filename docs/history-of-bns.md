---
sidebar_position: 2
sidebar_label: History of BNS
---

# A history of Bitcoin names

<!--
## What this post is about

- Provide facts and irrefutable history that BNS names were the first name system on Bitcoin
- Create an information artifact that others can point to when debating this point
- Avoid editorializing or picking fights with ordinals or any other name system
- Maybe this should be posted and initially shared by a non stacks entity?

--- -->

The Bitcoin Name System (BNS) is the first name system to write names to Bitcoin. As of Feb 2023 there have been 223,000 BNS names registered with about 19,000 new registrations each week. BNS is not only the longest running blockchain name project but also the largest non-financial use of Bitcoin in the blockchain’s history.

**Why names should be on Bitcoin**

We rely on name systems in our everyday lives, as they play a critical role in various applications. For instance, when you look up a friend on social media, you are using the platform's name system to resolve their name to their profile. Similarly, when you look up a website, you are using the Domain Name Service to resolve the hostname to its host's IP address.

Unfortunately, these systems are vulnerable to centralized control, which sparked the interest in the potential of a decentralized, tamper-proof, name system since the early days of Bitcoin.

|                  | Name data saved to Bitcoin L1? | Launch date                   |     |
| ---------------- | ------------------------------ | ----------------------------- | --- |
| Blockstore       | Yes in OP_RETURN               | Block 373601 – September 2015 |     |
| BNS (Blockstack) | Yes in OP_RETURN               | Block 373601 –                |     |
| BNS (Stacks 1)   | Merkle proof on Bitcoin        | Block 547921 –                |     |
| BNS (Stacks 2)   | Merkle proof on Bitcoin        | Block 666050 – Jan 2021       |     |

**Blockstore**

The first name ever recorded on Bitcoin was [judecn.id](http://judecn.id) in Sept 2015 as part of the Blockstore project. Blockstore was an early proof of concept proving that name data could be embedded directly on Bitcoin via OP_RETURN. Blockstore quickly adopted the new brand “Onename” and showed it was possible to migrate names from the defunct Namecoin project onto Bitcoin.

<!-- <graphic for judecn.id>  -->

[https://www.blockchain.com/explorer/transactions/btc/5f00b8e609821edd6f3369ee4ee86e03ea34b890e242236cdb66ef6c9c6a1b28](https://www.blockchain.com/explorer/transactions/btc/5f00b8e609821edd6f3369ee4ee86e03ea34b890e242236cdb66ef6c9c6a1b28)

<!-- <graphic for explorer and resolving Jude’s name today> -->

[https://cointelegraph.com/news/onename-drops-namecoin-switches-to-bitcoin](https://cointelegraph.com/news/onename-drops-namecoin-switches-to-bitcoin)

<!-- <graphic for migrating all the Namecoin names> -->

[https://www.blockchain.com/explorer/addresses/btc/16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V](https://www.blockchain.com/explorer/addresses/btc/16firc3qZU97D1pWkyL6ZYwPX5UVnWc82V)

**Blockstack**

Onename was once again renamed “Blockstack”. Blockstack set out take previous name work from proof of concept to a scalable, global name system. The main challenges with implementing any name system on Bitcoin are capacity and lack of support for name specific logic. The solution to both was the development of a p2p network on top of Bitcoin for propagating metadata related to names, what is known today as zonefile data.

These solutions were featured in the USENIX ATC 2016 paper on Blockstack and the PHD thesis for Stacks founder Muneeb Ali.

[https://www.usenix.org/system/files/conference/atc16/atc16_paper-ali.pdf](https://www.usenix.org/system/files/conference/atc16/atc16_paper-ali.pdf)

[https://www.cs.princeton.edu/techreports/2017/003.pdf](https://www.cs.princeton.edu/techreports/2017/003.pdf)

[https://www.zurich.ibm.com/dccl/papers/nelson_dccl.pdf](https://www.zurich.ibm.com/dccl/papers/nelson_dccl.pdf)

[https://medium.com/@judecnelson/blockstack-core-v0-14-0-release-aad748f46d](https://medium.com/@judecnelson/blockstack-core-v0-14-0-release-aad748f46d>

Blockstack names had some early traction but registering names directly on Bitcoin came with with downsides—in 2017 Bitcoin fees spiked causing the and cost to mint a single name rose to over $40 USD.

<!-- <would be nice to have a live example this> -->

**Bitcoin Naming System (Stacks 1)**

The next iteration was dubbed “BNS” and was launched on _date_. BNS introduced major scaling improvements: In BNS 100s of names could be registered on the Stacks layer quickly and cheaply—then a merkle proof of the names would recorded to Bitcoin.

<!-- <would be nice to have a live example> -->

<!-- <nice to know how many names were recorded in this time somehow> -->

**Bitcoin naming system (Stacks 2)**

Stacks 2 was launched in January 2021. All the name logic and state for 27,000 names was ported to Clarity smart contracts. In June of 2021, the .btc namespace was born leading a massive surge in name registrations.

<[https://twitter.com/muneeb/status/1400100021614284805](https://twitter.com/muneeb/status/1400100021614284805)>

**The numbers as of Feb 2023**

Total names registered: 223,494

Total BTC spent on registrations: 425.45 BTC

Total secondary trading on Gamma.io: 14.8 BTC

**The Future**

BNS is an evolving open source project. There are several exciting BNS projects currently in development: BNSx is protocol on top BNS that adds new features and flexibility to names. There are also teams exploring Ordinal specific namespaces and deeper integrations with Nostr, Lightning, and Bitcoin wallets.

[https://docs.bns.xyz/](https://docs.bns.xyz/)

[https://www.newinternetlabs.com/blog/nostr-names/](https://www.newinternetlabs.com/blog/nostr-names/)

**Further reading**

[https://btc.us/](https://btc.us/)

[https://www.xverse.app/blog/what-are-bitcoin-usernames](https://www.xverse.app/blog/what-are-bitcoin-usernames?ref=stacksblog)

[https://forum.stacks.org/t/btc-domains-are-live/12065](https://forum.stacks.org/t/btc-domains-are-live/12065)

[https://docs.stacks.co/docs/stacks-academy/bns](https://docs.stacks.co/docs/stacks-academy/bns)

[https://stacks.org/btc-us](https://stacks.org/btc-us)
