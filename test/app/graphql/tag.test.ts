import { app, assert } from 'egg-mock/bootstrap'

describe('test/app/graphql/tag.test.ts', () => {
  let user
  let ctx
  let item
  before(async () => {
    user = await app.model.User.create({
      name: 'test-user',
      password: 'test-password',
    })
    item = await app.model.Item.create({
      user_id: 1,
      content: 'test',
    })
  })

  beforeEach(() => {
    ctx = app.mockContext()
  })

  it('query tags', async () => {
    console.log(user.id, item.id, item.user_id)

  })

  it('attach tag', async () => {
    const content = 'tag test'
    const query = JSON.stringify({
      query: `mutation {
        attachTag(
          itemID: ${item.id},
          tag: "${content}"
        ) {
          id
          content
        }
      }`
    })

    const tag = await ctx.service.graphql.query(query)

    assert.equal(tag.data.attachTag.content, content)
  })

  it('remove tag', async () => {
    const content = 'test'
    const attachTag = await ctx.app.model.Tag.create({
      item_id: item.id,
      content,
    })

    const query = JSON.stringify({
      query: `mutation {
        removeTag(id: ${attachTag.id}) {
          content
        }
      }`
    })

    const tag = await ctx.service.graphql.query(query)

    assert.equal(tag.data.removeTag.content, content)
  })

  after(async () => {
    await app.model.User.destroy({
      where: { id: user.id },
    })

    await app.model.Item.destroy({
      where: { id: item.id },
    })
  })
})