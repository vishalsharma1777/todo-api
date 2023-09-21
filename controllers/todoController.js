const db = require('../models');

const ToDos = db.todos;

const createToDo = async (request, response) => {
  try {
    let todo = {
      text: request.body.text,
      isCompleted: request.body.isCompleted
    };
    const todoCreated = await ToDos.create(todo);
    response.status(200).json({ 'The ToDo Created is': todoCreated });
  } catch (error) {
    response.status(400).json({ Error: error.message });
  }
};

const allToDos = async (request, response) => {
  let todos = await ToDos.findAll({});
  const allToDos = { todos: todos };
  response.status(200).json(allToDos);
};

const getToDoById = async (request, response) => {
  try {
    let todo = await ToDos.findOne({ where: { id: request.params.id } });
    response.status(200).json(todo);
  } catch (error) {
    response.status(400).json({ message: 'not found' });
  }
};

const updateToDo = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    if (isNaN(id)) {
      response.status(400).json({ error: 'Id is not a number' });
    }
    const todoToBeUpdated = request.body;
    if (todoToBeUpdated.id != id) {
      response.status(400).json({
        error: 'ID CANNOT BE UPDATED. Id in body and path are not the same'
      });
    }
    const isUpdated = await ToDos.update(todoToBeUpdated, {
      where: {
        id: id
      }
    });
    if (isUpdated[0] === 0) {
      throw new Error('Id not found');
    }
    const updatedTodo = await ToDos.findByPk(id);
    response.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

const deleteToDo = async (request, response) => {
  if (isNaN(request.params.id)) {
    response.status(400).json({ error: 'Id is not a number' });
  }
  const isDeleted = await ToDos.destroy({ where: { id: request.params.id } });
  if (isDeleted === 0) {
    response.status(400).json({ error: 'Id not found' });
  }
  response.status(200).json({
    message: `Todo with id ${request.params.id} deleted successfully`
  });
};

module.exports = { createToDo, allToDos, getToDoById, deleteToDo, updateToDo };
