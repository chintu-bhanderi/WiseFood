const express = require('express');
const router = express.Router();
const {actionSomething,getData} = require('../controllers/testControllers');

router.route('/data').get(getData);
router.route('/').get(actionSomething);

module.exports = router