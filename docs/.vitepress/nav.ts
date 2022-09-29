import { rootPath } from '../../scripts/vite-common';

// export function getSidebar(lang = '') {

// }

export function getNav(lang = '') {
  return [
    {
      text: '指南',
      link: `${lang}/guide/base/getting-started`,
      activeMatch: `^${lang}/guide/`,
    }, {
      text: '关于',
      link: `${lang}/about`,
      activeMatch: `^${lang}/about`,
    }, {
      text: '更新日志',
      link: `${rootPath}/CHANGELOG`,
      activeMatch: `^${lang}/CHANGELOG`,
    },
    {
      text: 'Language',
      items: [
        {
          text: '中文',
          link: '/',
        },
        {
          text: 'English',
          link: '/en/',
        },
      ],
    },
  ];
}
