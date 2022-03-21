const { Database } = require('@jodu555/mysqlapi');
const { create_UUID } = require('./utils');
const database = Database.getDatabase();

const initialize = () => {
    createTables();
    createSchemas();
}

const createTables = () => {
    database.createTable('items', {
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
    database.registerSchema('itemCreationSchema', {
        UUID: {
            value: create_UUID,
        },
        name: {
            anum: true,
        },
        chest: {
            min: 0,
            max: 999,
        },
        amount: {
            min: 0,
            max: 999,
        },
    }, 'items');
    database.registerSchema('itemUpdationSchema', {
        name: {
            type: 'TEXT',
            anum: true,
            required: false,
        },
        chest: {
            type: 'INT',
            min: 0,
            max: 999,
            required: false,
        },
        amount: {
            required: false,
            type: 'IBIGINT',
            min: 0,
            max: 999,
        },
    }, 'items');
}

module.exports = initialize;