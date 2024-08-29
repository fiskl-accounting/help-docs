import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'How can we',
  tagline: 'help you',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  favicon: 'img/favicon/favicon-32x32.png',
  url: 'https://help.fiskl.com',
  baseUrl: '/',
  organizationName: 'fiskl', // Usually your GitHub org/user name.
  projectName: 'fiskl-docs', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/fiskl-accounting/help-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          path: './product-updates', // Directory where blog markdown files are stored
          routeBasePath: '/product-updates', // URL path for the blog section
          postsPerPage: 10,
          blogTitle: 'What\'s New',
          blogDescription: 'What\'s new and noteworthy update news',
        },
        theme: {
          customCss: 'src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-1M7RZGZYSS',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],

  trailingSlash: false,  // Set this globally for your site


  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 4,
      maxHeadingLevel: 5,
    },
    image: 'img/fiskl-official-logo.png',
    navbar: {
      style: 'dark',
      logo: {
        alt: 'Fiskl',
        src: 'img/fiskl-main-logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
          to: '/docs/introduction'
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar', // Changed to match tutorialSidebar.ts
          position: 'left',
          label: 'Tutorials',
          to: '/docs/tutorials/introduction' // Changed to match the correct path
        },
        {to: '/product-updates', label: 'What\'s New', position: 'left'}, // Ensure the Blog link is here
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Fiskl',
          items: [
            {
              label: 'Fiskl website',
              to: 'https://fiskl.com/',
            },
          ],
        },
        {
          title: 'Fiskl Dashboard',
          items: [
            {
              label: 'Register',
              href: 'https://my.fiskl.com/registration',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fiskl Limited. Fiskl Limited is registered in England and Wales (No. 09330290). All rights reserved.`,
    },
    metadata: [
      { name: 'description', content: 'Explore our Fiskl Help Center for expert support on managing your business finances, accounting, and more' },
      { name: 'keywords', content: 'Multi currency accounting, Double entry accounting, Invoicing' },
      { property: 'og:title', content: 'Fiskl Help Center - Fiskl Support - KB - Tutorials - Getting Started' },
      { property: 'og:description', content: 'Fiskl help documentation' },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: 'https://help.fiskl.com/img/fiskl_help_center_img.png' },  // Full URL recommended
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Fiskl — Intelligent Finance & Accounting Manager for Small Businesses' },
      { property: 'og:url', content: 'https://help.fiskl.com/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@FisklApp' },
      { name: 'twitter:creator', content: '@FisklApp' },
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;