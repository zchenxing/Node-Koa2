var sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();     
        }, time);
    });
}

// 使用await相当于同步调用sleep，当sleep执行完后，才能执行下面的事件
var start = async function() {
    console.log('start 1');
    await sleep(2000);
    console.log('start 2');
    await sleep(3000);
    console.log('end');
}

start();