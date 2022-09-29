import fs from 'node:fs';
import path from 'node:path';
import { $t } from './i18n';

function getCompoents(lang: string) {
  return fs.readdirSync(`${path.resolve()}/docs/docs/compoents`).filter(compoent => /^[a-zA-Z].+\.md$/.test(compoent)).map((compoent) => {
    const name = compoent.split('.').shift();
    return {
      text: name,
      link: `${lang}/docs/compoents/${name}`,
    };
  });
}

export function getSidebar(lang = '') {
  const t = $t(lang || 'zh');
  return [
    {
      text: t('base'),
      collapsible: true,
      items: [{
        text: t('getting-started'),
        link: `${lang}/docs/base/getting-started`,
      }, {
        text: t('customize'),
        link: `${lang}/docs/base/customize`,
      }, {
        text: t('themes'),
        link: `${lang}/docs/base/themes`,
      }, {
        text: t('create-your-own'),
        link: `${lang}/docs/base/create-your-own`,
      }],
    },
    {
      text: t('compoents'),
      collapsible: true,
      items: getCompoents(lang),
    },
  ];
}

export function getNav(lang = '') {
  const t = $t(lang || 'zh');
  return [
    {
      text: t('docs'),
      link: `${lang}/docs/base/getting-started`,
      activeMatch: `^${lang}/docs/`,
    }, {
      text: t('about'),
      link: `${lang}/about`,
      activeMatch: `^${lang}/about`,
    }, {
      text: t('changelog'),
      link: `${path.resolve()}/CHANGELOG`,
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
