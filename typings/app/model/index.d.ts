// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportItem from '../../../app/model/item';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Item: ReturnType<typeof ExportItem>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
