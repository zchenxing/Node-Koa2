/**
 * koa2中间件
 */

log = (ctx) => {
    console.log(`method = ${ctx.method}\nheader host = ${ctx.header.host}\nurl = ${ctx.url}`);
}

module.exports = () => {
    return async (ctx, next) => {
        log(ctx);
        await next();
    }
}
