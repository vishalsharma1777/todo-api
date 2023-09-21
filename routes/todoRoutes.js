const toDoController = require('../controllers/todoController.js');
const validate = require('../middlewares/validate.js');

const router = require('express').Router();

router.post('/', validate, toDoController.createToDo);
router.get('/', toDoController.allToDos);
router.get('/:id', toDoController.getToDoById);
router.put('/:id', validate, toDoController.updateToDo);
router.delete('/:id', toDoController.deleteToDo);

module.exports = router;
