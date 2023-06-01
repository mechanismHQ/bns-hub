# BNS Hub

A hub for documentation and resources for the Bitcoin Name System (BNS).

## Editing pages

The easiest way to make a change is to click the "edit this page" button at the bottom of any documentation page. This will open up Github with a markdown editor.

All pages are written in Markdown.

## Adding a new documentation page

To add a new docs page:

1. Create a new file under `/docs`
2. Edit `./sidebars.js` to include your new page

## Local development

### Installation

```
$ pnpm
```

### Running the app

```
$ pnpm start
```

Then, visit [localhost:3000](https://localhost:3000).

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build for production

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
