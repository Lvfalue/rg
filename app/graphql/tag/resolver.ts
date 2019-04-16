export const Mutation = {
  attachTag(_root, { itemID, tag }, ctx) {
    return ctx.connector.tag.attach(itemID, tag);
  },
  removeTag(_root, { id }, ctx) {
    return ctx.connector.tag.remove(id);
  },
}

export const Item = {
  tags(root, _, ctx) {
    return ctx.connector.tag.fetchByItemId(root.id);
  },
}