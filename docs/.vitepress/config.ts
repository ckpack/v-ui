import { description, name, repository } from '../../package.json'
import { getNav, getSidebar } from './bar.js'
import { mdPlugin } from './mdPlugin.js'

export default {
  title: name,
  description,
  base: `/${name}/`,
  locales: {
    '/': { lang: 'zh-CN' },
    '/en/': { lang: 'en-US' },
  },
  markdown: {
    config: (md: any) => {
      md.use(mdPlugin)
    },
  },
  themeConfig: {
    repo: repository,
    editLink: {
      pattern: 'https://github.com/ckpack/v-ui/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    // docsDir: 'docs',
    // docsBranch: 'main',
    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
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
  },
}
