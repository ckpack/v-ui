import { defineConfig } from 'vitepress';
import { author, description, license, name, repository } from '../../package.json';
import { getNav, getSidebar } from './bar.js';
import { mdPlugin } from './mdPlugin.js';

export default defineConfig({
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
    sidebar: getSidebar() as any,
  },
});
