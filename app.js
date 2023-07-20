const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;
const app = express();
const router = require('./routes/index');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '64b7df40e8932539ef78d352',
  };
  next();
});

app.use(express.json());
app.use(helmet());
app.use('/', router);
app.use('/', (req, res) => {
  res.status(404).send({ message: 'Страница не найдена' });
});

app.listen(PORT, () => {
  console.log('Сервер запущен!');
});
