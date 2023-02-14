const express = require('express');
const router = express.Router();
const {getAllFoodOrders,getFoodOrderByTable,getFoodOrderByChef,getFoodOrderByUser,getFoodOrderByWaiter,setFoodOrder,updateOrderDone,updateOrderServe,deleteOrderByTable,deleteAllOrders} = require('../controllers/foodOrderControllers');

        
             // id : tablebookIs is there
router.route('/deleteAll').delete(deleteAllOrders)
router.route('/:id').get(getFoodOrderByTable).post(setFoodOrder).delete(deleteOrderByTable);
router.route('/chef/:chefId').get(getFoodOrderByChef);
router.route('/user/:userId').get(getFoodOrderByUser);
router.route('/waiter/:waiterId').get(getFoodOrderByWaiter);
router.route('/').get(getAllFoodOrders)
router.route('/done/:orderId').put(updateOrderDone)
router.route('/serve/:orderId').put(updateOrderServe)


// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router