// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modern Warfare Cubed Documentation',
  tagline: 'Lasagna & spaghetti taste good, however documented lasagna & spaghetti tastes even better!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cubed-development.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'Modern-Warfare-Cubed-Documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cubed-Development', // Usually your GitHub org/user name.
  projectName: 'Modern-Warfare-Cubed-Documentation', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Modern Warfare Cubed Documentation',
        hideOnScroll: true,
        logo: {
          alt: 'Modern Warfare Cubed Logo',
          src: 'img/logo.png',
        },
        items: [

          {
            href: 'https://github.com/Cubed-Development',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Modern Warfare Cubed Logo',
          src: 'img/logo.png',
          width: 64,
          height: 64,
        },
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/k5WPk93K7b',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Cubed-Development',
              },
              {
                label: 'Main Mod GitHub',
                href: 'https://github.com/Cubed-Development/Modern-Warfare-Cubed',
              },
              {
                label: 'Documentation GitHub',
                href: 'https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cubed Development, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'javastacktrace', 'javadoclike', 'javadoc', 'groovy'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'earlyAccessPreview',
        content:
            'This is a early access preview of the Modern Warfare Cubed documentation. Information may not be correct or complete. Some docs may be empty',
        backgroundColor: '#fba403',
        textColor: '#ffffff',
        isCloseable: false,
      },
    }),
};

export default config;
