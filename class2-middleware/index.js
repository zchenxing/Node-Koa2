const Koa = require('koa');
const logger = require('./class2-middleware');

const app = new Koa();

app.use(logger());

app.use((ctx) => {
    ctx.body = "koa middleware"
});

module.exports = () => {
    return app.listen(3000);
}