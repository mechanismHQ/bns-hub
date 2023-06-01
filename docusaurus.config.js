// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BNS",
  tagline: "The Bitcoin Name System",
  favicon: "img/favicon-dark.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "https://api.bns.xyz/documentation/json",
            route: "/openapi",
          },
        ],
        // theme: {
        //   // Change with your site colors
        //   primaryColor: "#1890ff",
        // },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        sidebarPath: require.resolve("./src/sidebarsAbout.ts"),
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      /** @type {import('@docusaurus/plugin-client-redirects').PluginOptions} */
      ({
        redirects: [
          {
            from: "/dots/dots-faqs",
            to: "/docs/dots",
          },
          {
            from: "/dots/how-to-update-your-zonefile",
            to: "/docs/dots/update-zonefile",
          },
          {
            from: "/dots/how-to-unwrap-a-bnsx-name",
            to: "/docs/dots/unwrap-bnsx",
          },
          {
            from: "/dots/migrating-multiple-accounts",
            to: "/docs/dots/migrate-multiple-accounts",
          },
          {
            from: "/dots/renew-your-name",
            to: "/docs/dots/renew",
          },
          {
            from: "/bnsx-protocol/name-registry",
            to: "/docs/bnsx/protocol-registry",
          },
          {
            from: "/bnsx-protocol/wrapping-names",
            to: "/docs/bnsx/protocol-wrapping",
          },
          {
            from: "/bnsx-protocol/name-upgrader",
            to: "/docs/bnsx/protocol-migrator",
          },
          {
            from: "/integrate-bnsx/bns-api",
            to: "/docs/developer-tools/api",
          },
          {
            from: "/integrate-bnsx/integration-faqs",
            to: "/docs/developer-tools/api",
          },
          {
            from: "/integrate-bnsx/bns-client",
            to: "/docs/developer-tools/bns-client",
          },
          {
            from: "/links/mainnet-contracts",
            to: "/docs/bnsx/contracts",
          },
        ],
      }),
    ],
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    // ["docusaurus-theme-openapi-docs", {}],
    // [
    //   "docusaurus-plugin-openapi",
    //   {
    //     id: "cos",
    //     path: "external/openapi.yaml",
    //     routeBasePath: "cos",
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Bitcoin Name System",
        logo: {
          alt: "BNS Logo",
          src: "/img/stacks_with_interior_white_exterior_transparent.png",
          // href: "/docs/intro",
          href: "/",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          // {
          //   to: "/about/about-bns",
          //   docId: "about",
          //   position: "left",
          //   label: "About",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            // title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "stacks.co",
                to: "https://www.stacks.co",
              },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/facebook/docusaurus",
              // },
            ],
          },
        ],
        copyright: `From BNS with ♥️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
