const { register, login, logout } = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
