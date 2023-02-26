---
sidebar_label: Zonefiles
---

# Zonefiles

A zonefile lets a name owner associate information about a specific name. The word "zonefile" comes from the DNS system, and it's how domains direct requests on the internet to specific servers. In BNS, names use the same zonefile standard to specify information like their crypto addresses.

**Resource Records**

In a zonefile, each line represents an individual "resource record". A resource record includes three parts:

- "Name" - used to specify what this record will describe. You can also think of it as a "label"
- "Type" - for BNS zonefiles, this is usually "TXT"
- "Value" - the data to be associated with with this resource record

As an example, here's a line from a zonefile that specifies a name's Bitcoin address, as described in the [standard for address mapping](https://github.com/bnswg/standards/blob/main/address-mapping.md):

```
_btc._addr.muneeb.btc.   IN   TXT "1BAHK1Esvn6L1icZREB8SFqTy7bBSRDwaS"
```

In this record, the "name" is specifying "here is the Bitcoin address for the name muneeb.btc". The "type" is TXT. And the value is the actual Bitcoin address.

**`$ORIGIN` directive**

In a zonefile, the `$ORIGIN` directive specifies "all records under this directive are associated with this name". This removes the need to specify the same name for multiple resource records.

Following the above example, the zonefile could include `$ORIGIN` to become:

```
$ORIGIN muneeb.btc.
_btc._addr   IN   TXT "1BAHK1Esvn6L1icZREB8SFqTy7bBSRDwaS"
_stx._addr   IN   TXT   "SP000000000000000000002Q6VF78"
```

### TXT Records used in BNS zonefiles

Name owners can store arbitrary key/value pairs as TXT records in their zonefile. However, we are providing a standard for common types of text records, to improve compatibility across the BNS ecosystem.

**Crypto Addresses**

Following [the standard for address mapping](https://github.com/bnswg/standards/blob/main/address-mapping.md), a blockchain address must be specified as `_$chain._addr` as the name, TXT as the type, with a value that is a comma-delimited list of addresses.

**Profile data**

Name owners can specify arbitrary profile-specific information by storing `_$field._profile` text records.

Recognized fields are:

- `description`
- `avatar` - a valid URI pointing to an image
- `email`
- `url` - a URL pointing to a website associated with the name. Note that this is _not_ used to serve HTTP requests

**Service data**

Name owners can indicate their usernames or profiles on external services by using `$service._service` text records. The "service key" should be the reversed canonical url for the service. Examples are:

- `com.github`
- `com.twitter`
- `org.telegram`

**Example: TXT Records for name information**

```
$ORIGIN example.btc.
_btc._addr   IN   TXT "1BAHK1Esvn6L1icZREB8SFqTy7bBSRDwaS"
_stx._addr   IN   TXT   "SP000000000000000000002Q6VF78"
_avatar._profile IN TX "https://example.com/img.jpg"
com.github._service IN TXT "stacks-network"
com.twitter._service IN TXT "stacks"
```

### DNS-in-BNS

Name owners can specify DNS information within their zonefile. Name servers and proxy applications can use this information to serve internet traffic based on a BNS name. For more information, refer to the [btc.us web bridge](https://btc.us/web-bridge).

For example, here is the zonefile for `stacks.btc`:

```
$ORIGIN stacks.btc.
$TTL 3600
_redirect       IN      URI     10      1       "https://twitter.com/Stacks"

@       IN      A       161.35.228.61
```

When you use the btc.us web bridge to view the website for `stacks.btc`, it will redirect to `https://twitter.com/Stacks`. You can try this out by visiting https://stacks.btc.us.
