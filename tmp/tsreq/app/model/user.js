// import { Application } from 'egg'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (app) {
    var STRING = app.Sequelize.STRING;
    var User = app.model.define('user', {
        name: STRING(30),
        password: STRING(32),
    });
    return User;
};
