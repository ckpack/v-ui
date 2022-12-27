import { $t } from './i18n';

const playgroundLink = 'https://sfc.vuejs.org/#eNp9kMtugzAQRX/F8iYbwHvkVn38QBdVVt5QmCRO4ofGA1WF+PcOmFYJlbqbx9W5M3eUzzFWQw+yljq1aCOJBNTHR+OtiwFJjGL/0hMFX4j9a/AHe3zDMNgOsBB0AgdJTOKAwYndU3uJTXtRQ9nbnfFaZSKzuCFw8doQcCeE3qBEnVEPRubCyEVnSK/u2Yv3Ea1r8IsF75BIq3WfsWrD5alWv86ykPmp0jWxOqfg+e1x8VkX7FuLZTLPOJe5N/JEFFOtVDq0c1jnVAU8Kq4q7D1ZBxUkV35g+EyADDay+GHcZnIPazvP0g6udsDKAykfnbqVq84mWqp7JPsq9hkASwTPXwL+d+ZG+ufUGTsZP8npGx3Vt+c=';

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
      text: t('playground'),
      link: playgroundLink,
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
