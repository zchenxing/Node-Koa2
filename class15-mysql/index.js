const { query } = require('./async-db');

async function selectAllData() {
    
    let sql = 'select * from user';
    let dataList = await query( sql );
    return dataList;
}

async function getList() {
    let dataList = await selectAllData();
    console.log(dataList);
}

module.exports = getList;