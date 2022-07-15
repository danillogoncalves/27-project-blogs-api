const { Router } = require('express');
const postsController = require('../controllers/postsController');

const route = Router();

route.get('/:id', postsController.findByPk);
route.get('/', postsController.findAll);
route.post('/', postsController.create);

module.exports = route;