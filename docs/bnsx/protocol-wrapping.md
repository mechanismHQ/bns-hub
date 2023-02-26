---
sidebar_label: Wrapping Names
description: On BNSx, each name upgraded from BNS Core must be wrapped. Learn more about why wrapping is required and how it works.
---

# Wrapping names on BNSx

In order to mint a BNSx name, you have to first wrap an existing BNS name. What does that mean?

### What does "wrapping" mean?

When we say that a BNS name is "wrapped", we mean that each name is controlled by a smart contract on the Stacks blockchain.

The smart contract controlling the BNS name has one specific rule: an account can only interact with the wrapped name if they own the equivalent name on BNSx.

To understand this authorization logic, consider this example:

- Alice owns alice.btc on BNSx
- Bob owns bob.btc on BNSx
- A deployed name wrapper contract owns alice.btc on BNS Core.

In this example, only Alice is allowed to interact with the name wrapper contract, because Alice owns `alice.btc` on BNSx. If Alice transfers her BNSx name to someone else, that new owner is the only address that can interact with the wrapper contract.

### Why require wrapping names?

By requiring that each upgraded BNS name is wrapped, more ownership is provided to owners of BNSx names. This way, we can guarantee that if you own a BNSx name, you always have the ability to take ownership of the BNS Core name. For example, if you buy a BNSx name on an NFT marketplace, you are also buying the BNS Core name.

### Why does each BNSx name require a unique wrapper contract?

The smart contract rules of BNS Core state that a single address can only own one name. Smart contracts are treated the same as any other address, so this rule also applies to smart contracts. Because each contract can only own one name, a new name wrapper contract must be deployed for each name that is upgraded to BNSx.
