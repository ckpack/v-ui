import { version } from '../package.json';
import preset from '@/preset';
import create from '@/create';

export default preset;
export * from './components';
export * as components from './components';
export * from './defaultConfig';
export * from './themes';
export * from './hooks';
export {
  preset as install,
  create,
  version,
};
