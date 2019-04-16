import { Controller } from 'egg'

export const UserRules = {
  name: 'string',
  password: 'string',
}

export default class UserController extends Controller {
  public async create() {
    const { ctx } = this
    
    ctx.validate(UserRules, ctx.request.body)

    const user = await ctx.model.User.create(ctx.request.body)

    ctx.body = {
      code: 0,
      message: 'success',
      data: user.toJSON()
    }
  }
}