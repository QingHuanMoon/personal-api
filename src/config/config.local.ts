import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';

/**
 * 本地开发 npm run dev 读取的配置文件
 */
export default {
  orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'blog',
    // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
    synchronize: true,
    // 打印日志
    logging: true,
    // 字符集
    charset: 'utf8mb4',
  },
  cool: {
    file: {
      qiniu: {
        accessKeyId: 'KyXfpUIb9hjvshiP5sUdOXayiboC2wKIdrwujtrO',
        accessKeySecret: 'Uw3uRvEC3s0f_Z4HNgkBPSC0MGdZAq02tbhwTWsp',
        bucket: 'myqqh-home-dev',
        region: 'z2',
        publicDomain: 'http://rccb23qnn.hn-bkt.clouddn.com',
      },
    },
    // 是否自动导入数据库
    initDB: true,
  } as CoolConfig,
} as MidwayConfig;
