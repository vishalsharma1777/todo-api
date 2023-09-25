const yup = require('yup');

const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean().required()
});

const validateBody = async (req, res, next) => {
  try {
    await todoSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const validateParams = async (req, res, next) => {
  try {
    await yup.number().required().validate(req.params.id);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

(module.exports = validateBody), validateParams;
