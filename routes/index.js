const router = require('express').Router();

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

const usersRouter = require('./users');
const cardsRouter = require('./cards');

module.exports = router;
