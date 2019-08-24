var express = require('express');
var router = express.Router();

const indexController = require('../controller/index.controller');
const registerController = require('../controller/register.controller');

router.get('/', indexController.getLogin);
router.get('/register', registerController.getRegister);

router.post('/', indexController.postLogin);
router.post('/register', registerController.postRegister);

module.exports = router;
