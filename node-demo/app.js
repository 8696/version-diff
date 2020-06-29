const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const vDiff = require('../src/index');

app.use(async (ctx, next) => {
  // 接收前端携带的版本信息
  ctx.__v = ctx.request.headers.v || '1.0.0';
  await next();
});

router.get('/', async ctx => {
  await [
    {
      // 匹配 `1.0.0` 至 `1.1.0`，但不包括`1.1.0`
      v: ['1.0.0', '1.1.0'],
      h: async () => {
        ctx.body = {
          v: ctx.__v,
          msg: '1.0.0 > 1.1.0'
        };
      }
    },
    {
      // 匹配到 1.1.0 以上版本逻辑
      v: ['1.1.0', '*'],
      h: async () => {
        ctx.body = {
          v: ctx.__v,
          msg: '1.1.0 > *'
        };
      }
    }
  ].find(item => {
    return vDiff(item.v, ctx.__v);
  }).h();
});

app.use(router.routes());

app.listen(3000);
