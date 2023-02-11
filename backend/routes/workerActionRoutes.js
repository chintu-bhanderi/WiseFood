const express = require('express');
const router = express.Router();
const {getAllChefs,getAllWaiter} = require('../controllers/workerActionControllers');

router.route('/chef').get(getAllChefs);
router.route('/waiter').get(getAllWaiter);

module.exports = router