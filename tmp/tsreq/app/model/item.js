"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (app) {
    var _a = app.Sequelize, STRING = _a.STRING, DATE = _a.DATE, INTEGER = _a.INTEGER, BOOLEAN = _a.BOOLEAN;
    var Item = app.model.define('item', {
        user_id: INTEGER,
        content: STRING(64),
        expire: DATE,
        priority: { type: INTEGER, defaultValue: 0 },
        done: { type: BOOLEAN, defaultValue: false },
    });
    return Item;
};
