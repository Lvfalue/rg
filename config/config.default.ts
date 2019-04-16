import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      database: 'graphql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '123456',
    },
    security: {
      csrf: {
        ignore: () => true,
      },
      domainWhiteList: [ 'http://localhost:4200' ],
    },
    // cors plugin will take effect
    cors: {
      origin: '*',
    }
  } as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554119999608_6483';

  // add your egg config in here
  config.middleware = ['graphql'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
