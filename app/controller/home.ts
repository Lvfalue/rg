import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async graphql() {
    const { ctx } = this;
    ctx.logger.info('[Home:graphql]');
    ctx.body = 'graphql!!!';
  }
}
