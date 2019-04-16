import { app, assert } from 'egg-mock/bootstrap'

describe('test/app/graphql/user.test.ts', () => {
  let user
  before(async () => {
    user = await app.model.User.create({
      name: 'test-user',
      password: 'test-password',
    })
  })

  it('query user', async () => {
    const ctx = app.mockContext()
    const query = JSON.stringify({
      query: `{ user(id: ${user.id}) { id name }}`
    })

    const data = await ctx.service.graphql.query(query)
    assert.equal(data.data.user.id, user.id)
    assert.equal(data.data.user.name, user.name)
  })

  after(async () => {
    await app.model.User.destroy({
      where: { id: user.id },
    })
  })
})