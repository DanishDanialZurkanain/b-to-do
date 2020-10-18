var todoController = require('../controller/todo')
var express = require('express');
var router = express.Router();

router.get('/', todoController.getTodo);
router.get('/:id', todoController.findTodo);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;