---
sidebar_position: 1
title: The Bitcoin Name System
---

![](/img/satoshi-btc.png)

Bitcoin Name System (BNS) is a network system that binds Stacks usernames
to off-chain state without relying on any central points of control.

The Stacks V1 blockchain implemented BNS through first-order name operations.
In Stacks V2, BNS is instead implemented through a smart-contract loaded
during the genesis block.

Names in BNS have three properties:

- **Names are globally unique.** The protocol does not allow name collisions, and all
  well-behaved nodes resolve a given name to the same state.
- **Names are human-meaningful.** Each name is chosen by its creator.
- **Names are strongly owned.** Only the name's owner can change the state it
  resolves to. Specifically, a name is owned by one or more ECDSA private keys.

The Stacks blockchain insures that each node's BNS view is
synchronized to all of the other nodes in the world, so queries on one
node will be the same on other nodes. Stacks blockchain nodes allow a
name's owner to bind up to 40Kb of off-chain state to their name,
which will be replicated to all other Stacks blockchain nodes via a P2P network.

The biggest consequence for developers is that in BNS, reading name state is
fast and cheap but writing name state is slow and expensive. This is because
registering and modifying names requires one or more transactions to be sent to
the underlying blockchain, and BNS nodes will not process them until they are
sufficiently confirmed. Users and developers need to acquire and spend
the requisite cryptocurrency (STX) to send BNS transactions.

## Motivation behind name systems

We rely on name systems in everyday life, and they play a critical
role in many different applications. For example, when you look up a
friend on social media, you are using the platform's name system to resolve
their name to their profile. When you look up a website, you are using the
Domain Name Service to
resolve the hostname to its host's IP address. When you check out a Git branch, you
are using your Git client to resolve the branch name to a commit hash.
When you look up someone's PGP key on a keyserver, you are resolving
their key ID to their public key.

What kinds of things do we want to be true about names? In BNS, names are
globally unique, names are human-meaningful, and names are strongly owned.
However, if you look at these examples, you'll see that each of them only
guarantees _two_ of these properties. This limits how useful they can be.

- In DNS and social media, names are globally unique and human-readable, but not
  strongly owned. The system operator has the
  final say as to what each names resolves to.

  - **Problem**: Clients must trust the system to make the right
    choice in what a given name resolves to. This includes trusting that
    no one but the system administrators can make these changes.

- In Git, branch names are human-meaningful
  and strongly owned, but not globally unique. Two different Git nodes may resolve the same
  branch name to different unrelated repository states.

  - **Problem**: Since names can refer to conflicting state, developers
    have to figure out some other mechanism to resolve ambiguities. In Git's
    case, the user has to manually intervene.

- In PGP, names are key IDs. They are
  are globally unique and cryptographically owned, but not human-readable. PGP
  key IDs are derived from the keys they reference.
  - **Problem**: These names are difficult for most users to
    remember since they do not carry semantic information relating to their use in the system.

BNS names have all three properties, and none of these problems. This makes it a
powerful tool for building all kinds of network applications. With BNS, we
can do the following and more:

- Build domain name services where hostnames can't be hijacked.
- Build social media platforms where user names can't be stolen by phishers.
- Build version control systems where repository branches do not conflict.
- Build public-key infrastructure where it's easy for users to discover and
  remember each other's keys.
