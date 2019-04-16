export const Query = {
  user(_root, { id }, ctx) {
    return ctx.connector.user.fetchById(id)
  },

  tags(_root, _params, ctx) {
    return ctx.connector.tag.fetchRecommandation()
  },
}