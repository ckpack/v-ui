const zh = {
  'guide': '指南',
  'docs': '文档',
  'about': '关于',
  'changelog': '更新日志',
  'base': '基础',
  'config': '配置',
  'getting-started': '快速开始',
  'conflict': '冲突',
  'themes': '主题',
  'token': 'token',
  'custom-develop': '定制开发',
  'compoents': '组件',
  'base-compoents': '基础组件',
  'config-compoents': '配置组件',
  'develop': '开发',
};

const en: typeof zh = {
  'guide': 'Guide',
  'docs': 'Docs',
  'about': 'About',
  'changelog': 'Changelog',
  'base': 'Base',
  'config': 'Config',
  'getting-started': 'Getting started',
  'conflict': 'conflict',
  'themes': 'themes',
  'token': 'token',
  'custom-develop': 'Custom develop',
  'compoents': 'Compoents',
  'base-compoents': 'Base compoents',
  'config-compoents': 'Config compoents',
  'develop': 'Develop',
};

const locale = {
  zh,
  en,
};

export const t = (lang: string, key: keyof typeof zh) => locale[lang][key];
export const $t = (lang: string) => (key: keyof typeof zh) => locale[lang][key];
