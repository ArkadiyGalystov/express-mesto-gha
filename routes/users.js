const router = require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

const {
  createUser, getUsers, getUserById, updateUser, updateUserAvatar,
} = require('../controllers/users');


module.exports = router;
