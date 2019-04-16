import { app, assert } from 'egg-mock/bootstrap'

describe('test/app/graphql/item.test.ts', () => {
  let user
  let ctx
  before(async () => {
    const u = await app.model.User.create({
      name: 'test-user',
      password: 'test-password',
    })

    user = u.toJSON()
  })

  beforeEach(() => {
    ctx = app.mockContext()
  })

  it('createItem', async () => {
    const content = 'createItem test'
    const query = JSON.stringify({
      query: `mutation {
        createItem(
          userID: ${user.id},
          content: "${content}",
        ) {
          content
          id
        }
      }`
    })

    const item = await ctx.service.graphql.query(query)
    assert.equal(item.data.createItem.content, content)

    await ctx.connector.item.delete(item.data.createItem.id)
  })

  it('updateItem', async () => {
    const createdItem = await ctx.connector.item.create(user.id, 'test');

    const content = 'updateItem test'
    const query = JSON.stringify({
      query: `mutation {
        updateItem(
          id: ${createdItem.id},
          content: "${content}",
          done: true
        ) {
          content
          done
        }
      }`
    })

    const item = await ctx.service.graphql.query(query)

    assert.equal(item.data.updateItem.content, content)
    assert.equal(item.data.updateItem.done, true)

    await ctx.connector.item.delete(createdItem.id)
  })

  it('deleteItem', async () => {
    const createdItem = await ctx.connector.item.create(user.id, 'test');

    const query = JSON.stringify({
      query: `mutation {
        deleteItem(id: ${createdItem.id}) {
          content
        }
      }`
    })

    const item = await ctx.service.graphql.query(query)

    assert.equal(item.data.deleteItem.content, createdItem.content);
  })

  after(async () => {
    await app.model.User.destroy({
      where: { id: user.id },
    })
  })
})