const yup = require('yup');

const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean().required()
});

const validate = async (req, res, next) => {
  try {
    await todoSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = validate;
