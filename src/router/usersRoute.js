const { Router } = require('express');
const usersController = require('../controllers/usersController');

const route = Router();

route.post('/', usersController.create);

module.exports = route;