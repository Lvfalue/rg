import { Context } from 'egg'

export class ItemConnector {
  proxy
  ctx: Context

  constructor(ctx) {
    this.ctx = ctx
    this.proxy = ctx.model.Item
  }

  // 查什么？
  public async fetchByUserId(userID) {
    const items = await this.proxy.findAll({
      where: {
        user_id: userID,
      }
    }).then(us => us.map(u => u.toJSON()))

    return items
  }

  // 增
  public async create(userID, content, expire) {
    const item = await this.proxy.create({
      user_id: userID,
      content,
      expire,
    })

    return item.toJSON()
  }

  // 改
  public async update(id, content, expire, done) {
    console.log(id, content, done);
    await this.proxy.update({
      id,
      content,
      expire,
      done,
    }, { where: { id } })

    const item = await this.proxy.findOne({
      where: { id }
    })

    return item.toJSON()
  }

  // 删
  public async delete(id) {
    const item = await this.proxy.findOne({
      where: { id }
    })

    const ret = item.toJSON()

    await item.destroy()

    return ret
  }
}