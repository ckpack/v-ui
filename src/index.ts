import create from '@/create';
import preset from '@/preset';
import { version } from '../package.json';

export default preset;
export * from './defaultConfig';
export * from './hooks';
export * from './themes';
export * as components from '@/components';
export * from '@/components/';
export {
  create,
  preset as install,
  version,
};
