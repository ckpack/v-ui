import preset from './preset';
import create from './create';
import { version } from '../package.json';

export default preset;
export * from './components';
export {
  preset as install,
  create,
  version,
};
