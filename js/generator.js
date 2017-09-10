const promise = (item) => {
    return new Promise((resolve, reject) => {
        if (resolve) {
            setTimeout(() => {
                console.log(item);
                resolve();
            }, 1000);
        } else {
            reject(new Error());
        }
    })
}


var func = function* (){
    var fn1 = yield promise('fn1');
    var fn2 = yield promise('fn2');
    var fn3 = yield promise('fn3');    
}


var fn = func();

var s1 = fn.next().value.then(() => {
    return fn.next().value;
})

var s2 = s1.then(() => {
    return fn.next().value;
})

var s3 = s2.then(() => {
    console.log('finished');
})

