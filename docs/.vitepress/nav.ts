import { $t } from './i18n';

export function getNav(lang = '') {
  const t = $t(lang || 'zh');
  return [
    {
      text: t('guide'),
      link: `${lang}/guide/base/getting-started`,
      activeMatch: `^${lang}/guide`,
    }, {
      text: t('compoents'),
      link: `${lang}/compoents/button`,
      activeMatch: `^${lang}/compoents`,
    }, {
      text: t('changelog'),
      link: `${lang}/CHANGELOG`,
      activeMatch: `^${lang}/CHANGELOG`,
    },
    {
      text: '中/En',
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

export function getSidebarCompoents(lang = '') {
  const t = $t(lang || 'zh');
  const compoents = {
    base: ['button', 'space'],
    config: ['config-provider', 'theme-provider'],
  } as const;

  return Object.keys(compoents).map((key) => {
    return {
      text: t(`${key}-compoents` as any),
      collapsible: true,
      items: compoents[key].map((name: string) => ({
        text: name,
        link: `${lang}/compoents/${name}`,
      })),
    };
  });
}

export function getSidebarGuide(lang = '') {
  const t = $t(lang || 'zh');
  return [
    {
      text: t('base'),
      collapsible: true,
      items: [{
        text: t('getting-started'),
        link: `${lang}/guide/base/getting-started`,
      }, {
        text: t('themes'),
        link: `${lang}/guide/base/themes`,
      }, {
        text: t('token'),
        link: `${lang}/guide/base/token`,
      }, {
        text: t('conflict'),
        link: `${lang}/guide/base/conflict`,
      }],
    },
    {
      items: [{
        text: t('custom-develop'),
        link: `${lang}/guide/custom-develop`,
      }, {
        text: t('about'),
        link: `${lang}/guide/about`,
      }],
    },
  ];
}
