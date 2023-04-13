const express = require('express');
const router = express.Router();
const {actionSomething,getData, updateData} = require('../controllers/testControllers');

router.route('/data').get(getData);
router.route('/').get(actionSomething).put(updateData);

module.exports = router