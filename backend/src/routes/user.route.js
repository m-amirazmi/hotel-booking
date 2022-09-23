const { createUser, updateUser, getUsers, getUser, deleteUser } = require('../controllers/user.controller');
const { verifyLogin } = require('../middlewares/auth.middleware');

const router = require('express').Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/', verifyLogin, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
