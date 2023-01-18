import { defineConfig } from 'vitepress';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { author, description, license, name, repository } from '../../package.json';
import { alias } from '../../scripts/vite-common';
import { getNav, getSidebar } from './nav.js';
import { mdDemoPlugin } from './plugins';

export default defineConfig({
  vite: {
    plugins: [DefineOptions()],
    resolve: {
      alias: {
        ...alias,
      },
    },
  },
  title: name,
  description,
  base: `/${name.split('/').pop()}/`, // @ckpack/v-ui --> v-ui
  lastUpdated: true,
  markdown: {
    config: (md: any) => {
      md.use(mdDemoPlugin({
        editLink: `${repository}/edit/main`,
      }));
    },
  },
  themeConfig: {
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: repository },
    ],
  },
  locales: {
    root: {
      label: '简体中文',
      themeConfig: {
        nav: getNav(),
        sidebar: getSidebar(),
        editLink: {
          pattern: `${repository}/edit/main/docs/:path`,
          text: '在 GitHub 上编辑此页面',
        },
        footer: {
          message: `根据 ${license} 许可证发布.`,
          copyright: `Copyright © 2022-present ${author}`,
        },
      },
    },
    en: {
      label: 'English',
      link: '/en',
      themeConfig: {
        nav: getNav('en'),
        sidebar: getSidebar('en'),
        editLink: {
          pattern: `${repository}/edit/main/docs/:path`,
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: `Released under the ${license} License.`,
          copyright: `Copyright © 2022-present ${author}`,
        },
      },
    },
  },
});
