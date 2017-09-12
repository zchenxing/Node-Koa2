const Koa = require('koa')
const jsonp = require('koa-jsonp')
const app = new Koa()

app.use(jsonp());

app.use(async(ctx) => {

    let returnData = {
        success: true,
        data: {
            text: 'this is a jsonp api',
            time: new Date().getTime(),
        }
    }

    // 直接输出JSON
    ctx.body = returnData
})

module.exports = () => {
    return app.listen(3000, () => {
        console.log('[demo] jsonp is starting at port 3000')
    })
}