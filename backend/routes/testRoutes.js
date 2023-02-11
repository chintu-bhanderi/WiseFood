const express = require('express');
const router = express.Router();
const {actionSomething} = require('../controllers/testControllers');

router.route('/').get(actionSomething);

module.exports = router