const express = require('express');
const router = express.Router();
const {actionSomething,getData, updateData, postData} = require('../controllers/testControllers');

router.route('/data').get(getData).post(postData);
router.route('/').get(actionSomething).put(updateData);

module.exports = router