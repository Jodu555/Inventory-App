const fs = require('fs');
const path = require('path');


const { Database } = require('@jodu555/mysqlapi');
const database = Database.createDatabase('localhost', 'root', '', 'inventory-app');
database.connect();
require('../src/utils/database')();

const items = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf-8').split('\r\n').map(line => {
    const [chest, name, amount] = line.split(';');
    const item = {
        chest,
        name,
        amount
    }
    return item;
});

console.log(items);


