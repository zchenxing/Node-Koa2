const Koa = require('koa');
const app = new Koa();

app.use( async (ctx) => {
    let url = ctx.url
    
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query   // 对象类型
    let req_querystring = request.querystring   // 字符串类型
  
    // 从上下文中直接获取
    let ctx_query = ctx.query 
    let ctx_querystring = ctx.querystring
  
    console.log(JSON.stringify(req_query));
    console.log(JSON.stringify(ctx_query));

    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring
    }
});

module.exports = () => {
    return app.listen(3000, () => {
        console.log('app start at port 3000');
    });
}