---
sidebar_label: Name Migrator
description: The BNSx protocol includes a "name migrator" extension, which users must go through in order to mint a BNSx name. Learn how it works.
---

# BNSx Name Migrator

At launch, the BNSx protocol's "name migrator" contract provides a way for users to mint BNSx names. At a high level, this contract enforces that all names must be wrapped during the migration process.

The process for minting a name through this contract involves:

- Deploying a new name wrapper contract
- Verifying the name wrapper contract
- Finalizing the upgrade

### 1. Deploy a new name wrapper contract

Because BNS Core enforces that each address can only own one name, it is required that each upgraded BNSx name uses a unique name wrapper contract. To learn more about how this works and why it's required, refer to the docs about [wrapping names](./protocol-wrapping).

Each user must deploy an exact copy of the name wrapper contract. An example can be found on the [Stacks explorer here](https://explorer.stacks.co/txid/0x9e44b5867688aeeb0478b654eab6bce1a6b49af1ca21009ffcdd72097300a5ff?chain=mainnet).

### 2. Verify the name wrapper contract

On Stacks, smart contracts are not able to verify the exact source code of a separate smart contract. For example, contract "A" cannot know the exact source code of contract "B".

In the context of the name migrator contract, it's very important each name wrapper's source code is determined to be valid. Otherwise, a malicious user could deploy a "fake" name wrapper contract. This fake contract wouldn't follow the rules of the name wrapper contract, which would break the guarantee that every BNSx name implies control over the same name on BNS Core.

To ensure that each name wrapper contract is legitimate, the name migrator contract relies on external validation of each name wrapper contract. This means there are trusted authorities that must provide a signature attesting to the validity of each deployed contract.

After deploying a name wrapper contract, you can request a signature from an off-chain server that verifies the source code of that contract. The server will fetch the contract you deployed, verify the code, and return a signature. Once you have that signature, you can proceed to the next step.

### 3. Finalize the name upgrade

To finalize upgrading to BNSx, call the name migrator contract's `migrate` method with three arguments:

- The name wrapper contract's address
- The signature you received in the previous step
- The `recipient` you want to receive the BNSx name

The name migrator contract provides a way for you to specify a different `recipient` to support users who are consolidating multiple names into one address. Because BNS Core requires that each address only can own one name, this mechanism allows you to initiate upgrading from each of your accounts without needing to transfer your name in an additional step.

After you've finalized your upgrade, you'll have a BNSx name in your account!
