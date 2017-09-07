const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const Router = require('koa-router');

let home = new Router();

// 子路由1
home.get('/', async (ctx) => {
    let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
    `
    ctx.body = html;
});


let page = new Router();

// 子路由2
page.get('/404', async (ctx) => {
    ctx.body = '<h3>404 page</h3>';
}).get('/helloworld', async (ctx) => {
    ctx.body = '<h2>hello world page</h2>'
});

// 装在所有子路由
let router = new Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), home.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

module.exports = () => {
    return app.listen(3000, () => {
        console.log('[demo] route-use-middleware is starting at port 3000');        
    });
}

