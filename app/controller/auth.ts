import { Controller } from 'egg'
import { UserRules } from './user'

export default class AuthController extends Controller {
  public async login() {
    const { ctx } = this

    ctx.validate(UserRules, ctx.request.body)

    const user = await ctx.model.User.findOne({
      where: ctx.request.body,
    })

    if (!user) {
      ctx.body = {
        code: 10000,
        message: 'user not exsit'
      }
    }

    ctx.session.user = user
    ctx.body = {
      code: 0,
      message: 'success',
      data: { user },
    }
  }

  public async register() {
    const { ctx } = this

    ctx.validate(UserRules, ctx.request.body)

    const user = await ctx.model.User.create(ctx.request.body)

    ctx.body = {
      code: 0,
      message: 'success',
      data: { user },
    }
  }
}