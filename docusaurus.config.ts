import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fiskl',
  tagline: 'Help guide for Fiskl, the AI-powered multi-currency accounting plus invoicing, payments, automated sync with 21k banks worldwide, tax tracking and more.',
  markdown: {
    mermaid: true,
  },
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
  ],
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
          // editUrl: 'https://github.com/fiskl-accounting/help-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          path: './product-updates', // Directory where blog markdown files are stored
          routeBasePath: '/product-updates', // URL path for the blog section
          postsPerPage: 10,
          blogTitle: 'What\'s New',
          blogDescription: 'What\'s new and noteworthy update news',
          blogSidebarCount: 15
        },
        theme: {
          customCss: 'src/css/custom.css',
        },
        gtag: {
          trackingID: 'GTM-K984Q44',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-hotjar',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],

  trailingSlash: false,  // Set this globally for your site


  themeConfig: {
    hotjar: {
      applicationId: 5130878,
    },
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
        href: 'https://fiskl.com', // External link to your website
        target: '_blank',
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
          sidebarId: 'tutorialsSidebar', 
          position: 'left',
          label: 'Tutorials',
          to: '/docs/tutorials/introduction'
        },
        {to: '/product-updates', label: 'What\'s New', position: 'left'}, 
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Sign in',
          position: 'right',
          href: 'https://my.fiskl.com/login',
          target: '_blank', 
          rel: 'noopener noreferrer',
        },
        {
          label: 'Start for free',
          position: 'right',
          href: 'https://my.fiskl.com/registration',
          target: '_blank', // Open in new tab
          rel: 'noopener noreferrer', 
        },
        {
          label: 'Website',
          position: 'right',
          href: 'https://fiskl.com',
          target: '_blank', // Open in new tab
          rel: 'noopener noreferrer',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Fiskl Limited. Fiskl Limited is registered in England and Wales (No. 09330290). All rights reserved.`,
    },
    metadata: [
      { name: 'description', content: 'Master multi-currency accounting and invoicing with Fiskl\'s Help Center. Get expert support for streamlined business finances and double-entry bookkeeping. Start optimizing your financial management today!' },
      { name: 'keywords', content: 'Fiskl accounting software, Multi-currency bookkeeping, Double-entry accounting system, Small business invoicing, Financial management tools, Online help center, Business finance support, Accounting tutorials, Invoicing best practices, International business accounting' },
      { property: 'og:title', content: 'Fiskl Help Center: Expert Accounting & Invoicing Support' },
      { property: 'og:description', content: 'Master your business finances with Fiskl\'s in-depth tutorials, FAQs, and step-by-step guides. Get expert support for accounting and invoicing today!' },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: 'https://help.fiskl.com/img/fiskl_help_center_img.png' },  // Full URL recommended
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Fiskl: Smart Finance for Small Business' },
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
