//100 % working cdoe

/*const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);

module.exports = router;*/













const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;