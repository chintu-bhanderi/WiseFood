const express = require('express');
const router = express.Router();
const {getAllChefs} = require('../controllers/workerActionControllers');

router.route('/chef').get(getAllChefs);

module.exports = router