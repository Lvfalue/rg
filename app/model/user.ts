// import { Application } from 'egg'

export default (app) => {
  const { STRING } = app.Sequelize

  const User = app.model.define('user', {
    name: STRING(30),
    password: STRING(32),
  })

  return User
}