const { Database } = require('@jodu555/mysqlapi');
const database = Database.getDatabase();

const initialize = () => {
    createTables();
    createSchemas();
}

const createTables = () => {
    database.createTable('item', {
        options: {
            softdelete: false,
            timestamps: true,
            PK: 'UUID',
        },
        UUID: { type: 'varchar(64)', null: false },
        name: { type: 'TEXT', null: false },
        chest: { type: 'INT', null: false },
        amount: { type: 'BIGINT', null: false }
    });
}

const createSchemas = () => {

}

module.exports = initialize;