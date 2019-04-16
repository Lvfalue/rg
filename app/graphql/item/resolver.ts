// export const a = {
//   User: {
//     items(root, _, ctx) {
//       return ctx.connector.item.fetchByUserId(root.id)
//     }
//   },
//   Mutation: {
//     createItem(_root, {
//       userId,
//       content,
//       expire,
//     }, ctx) {
//       return ctx.connector.item.create(userId, content, expire)
//     },

//     updateItem(_root, {
//       id,
//       content,
//       expire,
//       done,
//     }, ctx) {
//       return ctx.connector.item.update(id, content, expire, done)
//     },

//     deleteItem(_root, {
//       id,
//     }, ctx) {
//       return ctx.connector.item.delete(id)
//     },
//   },
// }

export const User = {
  items(root, _, ctx) {
    return ctx.connector.item.fetchByUserId(root.id)
  }
}

export const Mutation = {
  createItem(_root, {
    userID,
    content,
    expire,
  }, ctx) {
    return ctx.connector.item.create(userID, content, expire)
  },

  updateItem(_root, {
    id,
    content,
    expire,
    done,
  }, ctx) {
    return ctx.connector.item.update(id, content, expire, done)
  },

  deleteItem(_root, {
    id,
  }, ctx) {
    return ctx.connector.item.delete(id)
  },
}

