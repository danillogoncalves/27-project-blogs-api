const { Router } = require('express');
const loginController = require('../controllers/loginController');

const route = Router();

route.post('/', loginController.login);

module.exports = route;