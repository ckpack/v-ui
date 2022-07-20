import fs from 'node:fs'
import path from 'node:path'

function getCompoents(lang: string) {
  return fs.readdirSync(`${path.resolve()}/docs/guide/compoents`).filter(compoent => /^[a-zA-Z].+\.md$/.test(compoent)).map((compoent) => {
    const name = compoent.split('.').shift()
    return {
      text: name,
      link: `${lang}/guide/compoents/${name}`,
    }
  })
}

function getGuideSidebar(lang: string) {
  return [{
    text: 'Base',
    items: [{
      text: 'Install',
      link: `${lang}/guide/base/install`,
    }, {
      text: 'Customize',
      link: `${lang}/guide/base/customize`,
    }],
  },
  {
    text: 'Compoents',
    items: getCompoents(lang),
  },
  ]
}

function getSidebar(lang = '') {
  return {
    [`${lang}/guide/`]: getGuideSidebar(lang),
    [`${lang}/`]: getGuideSidebar(lang),
  }
}

function getNav(lang = '') {
  return [{
    text: 'Guide',
    link: `${lang}/`,
    activeMatch: `^${lang}/guide`,
  }, {
    text: 'About',
    link: `${lang}/about`,
    activeMatch: `^${lang}/about`,
  }]
}

export {
  getSidebar,
  getNav,
}
