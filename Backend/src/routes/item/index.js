const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.list); //List items
router.post('/', controller.create); //Create Item
router.patch('/:uuid', controller.update); //Update Item



module.exports = {
    router,
};