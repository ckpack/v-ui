const zh = {
  'docs': '文档',
  'about': '关于',
  'changelog': '更新日志',
  'base': '基础',
  'getting-started': '快速开始',
  'customize': '自定义',
  'themes': '主题',
  'create-your-own': '创建组件库',
  'compoents': '组件',
};

const en: typeof zh = {
  'docs': 'Docs',
  'about': 'About',
  'changelog': 'Changelog',
  'base': 'Base',
  'getting-started': 'Getting started',
  'customize': 'customize',
  'themes': 'themes',
  'create-your-own': 'Create your own',
  'compoents': 'Compoents',
};

const locale = {
  zh,
  en,
};

export const t = (lang: string, key: keyof typeof zh) => locale[lang][key];
export const $t = (lang: string) => (key: keyof typeof zh) => locale[lang][key];
