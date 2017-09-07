/**
 * 第一个koa2项目
 */
let Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
    ctx.body = "<h1>Hello Koa2</h1>"
});

module.exports = () => {
    return app.listen(3000);
};