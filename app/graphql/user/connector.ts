import * as Dataloader from 'dataloader'
import { Context } from 'egg'

export default class UserConnector {
  ctx: Context
  loader: any
  constructor(ctx) {
    this.ctx = ctx
    this.loader = new Dataloader(this.fetch.bind(this))
  }

  fetch(ids) {
    const users = this.ctx.model.User.findAll({
      where: {
        id: {
          $in: ids,
        }
      }
    }).then(us => {
      if (us.length === 0) {
        return [null]
      }
      return us.map(u => u.toJSON())
    })
    return users
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids)
  }

  fetchById(id) {
    return this.loader.load(id)
  }
}