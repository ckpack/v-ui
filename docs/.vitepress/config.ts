import { defineConfig } from 'vitepress';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { author, description, license, name, repository } from '../../package.json';
import { alias, rootPath } from '../../scripts/vite-common';
import { getNav, getSidebarCompoents, getSidebarGuide } from './nav.js';
import { mdPlugin } from './mdPlugin.js';

export default defineConfig({
  vite: {
    plugins: [DefineOptions()],
    resolve: {
      alias: {
        ...alias,
        '@ckpack/v-ui': `${rootPath}`,
      },
    },
  },
  title: name,
  description,
  base: `/${name.split('/').pop()}/`, // @ckpack/v-ui --> v-ui
  lastUpdated: true,
  markdown: {
    config: (md: any) => {
      md.use(mdPlugin);
    },
  },
  themeConfig: {
    editLink: {
      pattern: `${repository}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: repository },
    ],
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © 2022-present ${author}`,
    },
    nav: getNav(),
    sidebar: {
      '/guide/': getSidebarGuide(),
      '/compoents': getSidebarCompoents(),
      'en/guide/': getSidebarGuide('en'),
      'en/compoents': getSidebarCompoents('en'),
    },
  },
});
