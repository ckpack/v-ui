import { version } from '../package.json'
import preset from './preset'
import create from './create'

export default preset
export * from './components'
export {
  preset as install,
  create,
  version,
}
