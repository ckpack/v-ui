import { getNav, getSidebar } from "./bar.js";
import { name, description, repository } from "../../package.json";
import { mdPlugin } from "./mdPlugin.js";

export default {
  title: name,
  description: description,
  base: `/${name}/`,
  locales: {
    '/': { lang: 'zh-CN' },
    '/en/': { lang: 'en-US' },
  },
  markdown: {
    config: (md) => {
      md.use(mdPlugin);
    }
  },
  themeConfig: {
    repo: repository,
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        label: '中文',
        nav: getNav(),
        sidebar: getSidebar(),
      },
      '/en/': {
        label: 'English',
        nav: getNav('/en'),
        sidebar: getSidebar('/en'),
      },
    },
  }
};