---
sidebar_label: Migrate multiple accounts
description: Learn how to use Dots to easily migrate multiple accounts to BNSx
---

# Migrate multiple accounts

In order to own multiple BNS names, you need to have an individual wallet for each name you own. This is due to the BNS restriction of "1-name-per-wallet".

One of the big benefits of BNSx is that it allows users to consolidate all of their names in one wallet. To help users make the most of this feature, we've designed Dots to support managing multiple accounts at once.

## How to migrate multiple accounts

### Step 1: View the "accounts" page on Dots

Head over to [dots.so](https://www.dots.so) and login with your Stacks wallet. Once logged in, visit [the accounts page](https://www.dots.so/accounts). You can find this page by clicking "accounts" in the dropdown at the top of the page.

### Step 2: Connect and specify your "primary" account

The Dots app uses the concept of a primary account to make migrating multiple names into one wallet easier.

For example, imagine you have three wallets holding three names. You want to move all of those names into my wallet holding "example.btc". You would specify the wallet holding "example.btc" as your primary name.

The first account you log into is the default primary account.

If you want to change your primary account, follow these steps:

1. On the accounts page, click "add account"
2. Sign in with your intended primary account
3. Once connected, you'll see your account in the "secondary accounts" list.
4. Next to the account you want to set as primary, click the "actions" dropdown on the right.
5. Select "set as primary"

![Set primary](/img/set-primary-dropdown.png)

### Step 3: Add and migrate other accounts

Once your primary account is setup, migrating multiple accounts simultaneously only requires a few clicks. The migration process still takes time due to the time it takes for transactions to confirm, but you can continue the process with different accounts while waiting for others to finish.

The accounts page gives you a real-time view of the status of all of your migrations. When transactions are pending, the account will show a "pending" state. Once a transaction is confirmed, that account will transition to "ready" in real-time - no need to refresh the page.

When you go through the migration process for each account, the finalization step will allow you to transfer the BNSx name to a different wallet. If you're migrating a secondary account, this will default to your "primary" account.

## Account management FAQs

### Can I disconnect an account after the migration is finished?

Yes, you can disconnect an account after finishing a migration. On the actions available next to each account, you can select "remove account".
While you can remove an account that has a migration in progress, it's not recommended.

### Can I continue an account's migration on a different device?

No, at this time all migration progress is saved locally and privately on the device you're using. You can always connect the account on a different device, but any state related to a pending migration will not be pulled over to the new device.

### Can I remove all accounts at once?

To remove all of your connected accounts, you can sign out of the app using the menu at the top of the page. By signing out, you're also disconnecting your primary account.
