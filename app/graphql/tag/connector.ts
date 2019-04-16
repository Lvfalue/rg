import { Context } from 'egg';

export class TagConnector {
  ctx: Context
  proxy: any
  constructor(ctx) {
    this.ctx = ctx
    this.proxy = this.ctx.model.Tag
  }

  public async fetchByItemId(itemID) {
    const tags = await this.proxy.findAll({
      where: { item_id: itemID }
    })

    return tags.map(tag => tag.content)
  }

  // 新增 tag
  public async attach(itemID, content) {
    const tag = await this.proxy.create({
      item_id: itemID,
      content,
    })

    return tag.toJSON()
  }

  public async remove(id) {
    const tag = await this.proxy.findOne({
      where: { id }
    })
    const ret = tag.toJSON()
    tag.destroy()
    return ret
  }

  public async fetchRecommandation() {
    const tags = await this.proxy.findAll({
      attributes: ['content'],
      group: ['content'],
      limit: 10,
    });

    return tags.map(t => t.content);
  }
}