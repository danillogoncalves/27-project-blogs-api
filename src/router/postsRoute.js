const { Router } = require('express');
const postsController = require('../controllers/postsController');

const route = Router();

route.get('/search', postsController.findAllSeach);
route.get('/:id', postsController.findByPk);
route.get('/', postsController.findAll);
route.post('/', postsController.create);
route.put('/:id', postsController.update);
route.delete('/:id', postsController.delete);

module.exports = route;