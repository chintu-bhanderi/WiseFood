const express = require('express');
const router = express.Router();
const {getAllChefs,getChefMadeOrdersById,getWaiterServedOrdersById,getAllWaiter} = require('../controllers/workerActionControllers');

router.route('/chef/order/:chefId').get(getChefMadeOrdersById);
router.route('/waiter/order/:waiterId').get(getWaiterServedOrdersById);
router.route('/chef').get(getAllChefs);
router.route('/waiter').get(getAllWaiter);

module.exports = router