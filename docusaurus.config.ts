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

  // Set the production url of your site here
  url: 'https://help.fiskl.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fiskl', // Usually your GitHub org/user name.
  projectName: 'fiskl-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          path: './blog', // Directory where blog markdown files are stored
          routeBasePath: '/blog', // URL path for the blog section
          postsPerPage: 10,
          blogTitle: 'Blog',
          blogDescription: 'A blog powered by Docusaurus',
        },
        theme: {
          customCss: 'src/css/custom.css',
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/introduction', 
            from: '/',
          },
        ],
      },
    ],
  ],

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
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
          to: '/docs/introduction'
        },
        {to: '/guides', label: 'Tutorials', position: 'left'},
        {to: '/blog', label: 'Product updates', position: 'left'}, // Ensure the Blog link is here
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
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/Getting-Started/overview',
            },
            {
              label: 'Core features',
              to: '/docs/category/core-features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/fiskl-limited/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/FisklApp/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCL1LEvSYp2uIo5sAg68ZKRw',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@fiskl_accounting',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Accounting',
              href: 'https://github.com/fiskl-accounting/help-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fiskl Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
