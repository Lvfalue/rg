// import { Application } from 'egg'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (app) {
    var _a = app.Sequelize, STRING = _a.STRING, INTEGER = _a.INTEGER;
    var Tag = app.model.define('tag', {
        item_id: INTEGER,
        content: STRING(64),
    });
    return Tag;
};
