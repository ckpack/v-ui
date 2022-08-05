import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import sass from 'sass'
import type { PluginOption } from 'vite'

function buildScss(params: any) {
  const { globSync, sassOptions, handlerOutDir, emptyOutDir = false, outdir, isCpScss = false, isLog = false } = params

  if (!outdir)
    throw new Error('Need outdir')
  if (emptyOutDir) {
    fs.rmSync(outdir, {
      force: true,
      recursive: true,
    })
  }
  fg.sync(globSync).forEach((input: string) => {
    const { dir, name } = path.parse(input)
    const handledOutDir = !handlerOutDir ? path.join(outdir, dir) : handlerOutDir(path.join(outdir, dir))
    fs.mkdirSync(handledOutDir, {
      recursive: true,
    })
    fs.writeFileSync(`${handledOutDir}/${name}.css`, sass.compile(input, sassOptions).css, {
      flag: 'a+',
    })
    if (isLog)
      console.log(`${input} ->> ${handledOutDir}/${name}.css`)

    if (isCpScss)
      fs.cpSync(input, `${handledOutDir}/${name}.scss`)
  })
}

const vitePluginSass = (params: any): PluginOption => {
  return {
    name: 'vite-plugin-sass',
    enforce: 'post',
    apply: 'build',
    closeBundle() {
      console.log('vite-plugin-sass')
      buildScss(params)
    },
  }
}

export default vitePluginSass
