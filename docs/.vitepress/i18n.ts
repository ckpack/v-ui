const zh = {
  guide: '指南',
  about: '关于',
  changelog: '更新日志',
};
const en: typeof zh = {
  guide: 'guide',
  about: 'about',
  changelog: 'changelog',
};

const locale = {
  zh,
  en,
};

export const t = (lang: 'zh' | 'en', key: string) => locale[lang][key];
