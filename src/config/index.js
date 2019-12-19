import devConfig from './development';
import productionConfig from './production';
import defaultConfig from './default';
import urlMapping from './urlMapping';

const config = {
  development: {
    ...devConfig
  },
  production: {
    ...productionConfig
  }
};

const env = process.env.NODE_ENV || 'development';
const importedConfig = config[env];
const configs = { ...importedConfig, ...defaultConfig, ...urlMapping };

export default configs;
