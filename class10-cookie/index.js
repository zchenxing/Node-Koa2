const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {

    if (ctx.url === '/index') {
        ctx.cookies.set(
            'cid',
            'hello world', 
            {
                domain: 'localhost', // 写cookie所在的域名
                path: '/index', // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2017-12-15'), // cookie失效时间
                httpOnly: false, // 是否只用于http请求中获取
                overwrite: false // 是否允许重写
            }
        )
        console.log(ctx.cookies.get('cid'));        
        ctx.body = 'cookie is ok'
    } else {
        console.log(ctx.cookies.get('cid'));                
        ctx.body = ctx;
    }

})

module.exports = () => {
    return app.listen(3000, () => {
        console.log('[demo] static-use-middleware is starting at port 3000')
    })
}