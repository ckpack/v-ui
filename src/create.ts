import type { App, Plugin } from 'vue'

function create(plugins: unknown[] | { [index: string]: unknown }) {
  return (app: App, options = {}) => {
    (Array.isArray(plugins) ? plugins : Object.values(plugins)).forEach((plugin) => {
      app.use(plugin as Plugin, options)
    })
  }
}

export default create
