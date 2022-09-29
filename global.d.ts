import '@vue/runtime-core'

export {}

// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export type GlobalComponents = typeof import('./src/components')
}
