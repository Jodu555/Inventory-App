const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.list); //List Packages

router.post('/', controller.create); //Create Package



module.exports = {
    router,
};