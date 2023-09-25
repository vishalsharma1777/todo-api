const toDoController = require('../controllers/todoController.js');
const validateBody = require('../middlewares/validate.js');
const validateParams = require('../middlewares/validate.js');

const router = require('express').Router();

router.post('/', validateBody, toDoController.createToDo);
router.get('/', toDoController.allToDos);
router.get('/:id', validateParams, toDoController.getToDoById);
router.put('/:id', validateBody, validateParams, toDoController.updateToDo);
router.delete('/:id', validateParams, toDoController.deleteToDo);

module.exports = router;
