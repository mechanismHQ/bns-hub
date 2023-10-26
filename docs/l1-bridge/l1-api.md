---
sidebar_label: Bridge API Endpoints
---

# BNS Bridge API

[View OpenAPI documentation](https://api.bns.xyz/documentation/static/index.html#/L1)

## Fetch all inscribed names

[`https://api.bns.xyz/l1/inscribed-names`](https://api.bns.xyz/l1/inscribed-names)

Fetch a list of all inscribed names. You can paginate these results by providing a `cursor` parameter, which is the `id` field returned in results. Note that `id` is not the same as `inscriptionId`.

## Fetch inscription details for a name

`https://api.bns.xyz/l1/inscription-by-name/{name}`

[View an example](https://api.bns.xyz/l1/inscription-by-name/heynky.btc)

Returns:

- `inscriptionId`
- `owner`

## Fetch name details for an inscription ID

`https://api.bns.xyz/l1/name-by-inscription/{inscriptionId}`.

[View an example](https://api.bns.xyz/l1/name-by-inscription/ee59b719792fd2181a1a88d015c649c68647f6c39226ad0075884b56568695c6i0)

## Fetch total number of L1 names

[`https://api.bns.xyz/l1/total-l1-names`](https://api.bns.xyz/l1/total-l1-names)
