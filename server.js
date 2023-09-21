const express = require('express');
const cors = require('cors');

const app = express();
var corOptions = {
  origin: 'https://localhost:8080'
};

//middlewares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers

const router = require('./routes/todoRoutes.js');
app.use('/todos', router);

//testing api

app.get('/', (req, res) => {
  res.json({ message: 'This is a ToDo Project' });
});

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
