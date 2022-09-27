import merge from 'deepmerge';
import baseConfig from './base';

const config = {
  LOG_LEVEL: 'info',
};

export default merge(baseConfig, config);
