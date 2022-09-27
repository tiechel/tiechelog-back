import merge from 'deepmerge';
import baseConfig from './base';

const config = {
  LOG_LEVEL: 'debug',
};

export default merge(baseConfig, config);
