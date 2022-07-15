const { Router } = require('express');
const usersController = require('../controllers/usersController');

const route = Router();

route.get('/:id', usersController.findByPk);
route.get('/', usersController.findAll);
route.post('/', usersController.create);
route.delete('/me', usersController.destroy);

module.exports = route;