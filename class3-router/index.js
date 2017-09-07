const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

/**
 * 用Promise封装异步方法读取文件
 */
render = (page) => {
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`;

        fs.readFile(viewUrl, "binary", (err, data) => {
            if (err) {
                console.log('error occurred');
                reject(err);
            } else {
                console.log('request success');
                resolve(data);
            }
        })
    })
}


/**
 * 根据url获取HTML文件
 */
async function route(url) {
    let view = '404.html';
    switch ( url ) {
        case '/':
            view = 'index.html';
            break;

        case '/index':
            view = 'index.html';
            break;

        case '/todo':
            view = 'todo.html';
            break;

        case '/404':
            view = '404.html';
        default:
            break;
    }
    console.log('页面='+view);
    let html = await render(view);
    return html;
}


app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
});

module.exports = () => {
    return app.listen(3000);
}