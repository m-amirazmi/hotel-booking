const { verifyLogin } = require('../middlewares/auth.middleware');
const { updateAddress, getAddresses } = require('../controllers/address.controller');

const router = require('express').Router();

router.post('/', verifyLogin, updateAddress);
router.get('/', getAddresses);

module.exports = router;
