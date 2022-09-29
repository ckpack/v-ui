import fs from 'node:fs';
import path from 'node:path';
import { rootPath } from '../../scripts/vite-common';

function getCompoents(lang: string) {
  return fs.readdirSync(`${path.resolve()}/docs/guide/compoents`).filter(compoent => /^[a-zA-Z].+\.md$/.test(compoent)).map((compoent) => {
    const name = compoent.split('.').shift();
    return {
      text: name,
      link: `${lang}/guide/compoents/${name}`,
    };
  });
}

function getGuideSidebar(lang: string) {
  return [
    {
      text: '基础',
      collapsible: true,
      items: [{
        text: '快速开始',
        link: `${lang}/guide/base/getting-started`,
      }, {
        text: '自定义',
        link: `${lang}/guide/base/customize`,
      }, {
        text: '更改主题',
        link: `${lang}/guide/base/themes`,
      }, {
        text: '创建组件库',
        link: `${lang}/guide/base/create-your-own`,
      }],
    },
    {
      text: '组件',
      collapsible: true,
      items: getCompoents(lang),
    },
  ];
}

function getSidebar(lang = '') {
  return {
    [`${lang}/guide/`]: getGuideSidebar(lang),
    [`${lang}/`]: getGuideSidebar(lang),
  };
}

function getNav(lang = '') {
  return [{
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
  }];
}

export {
  getSidebar,
  getNav,
};
