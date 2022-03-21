const { Database } = require('@jodu555/mysqlapi');
const database = Database.getDatabase();

const list = async (req, res, next) => {
    try {
        const response = await database.get('items').get();
        res.json(response);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const validation = database.getSchema('itemCreationSchema').validate(req.body, true);
        const item = validation.object;
        const response = database.get('items').create(item);
        res.json(response);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    list,
    create,
}