const express = require('express');
const router = express.Router();
const {getAllFoodOrders,getFoodOrderByTable,getFoodOrderByChef,setFoodOrder,updateOrderDone,deleteOrderByTable,deleteAllOrders} = require('../controllers/foodOrderControllers');

        
             // id : tablebookIs is there
router.route('/deleteAll').delete(deleteAllOrders)
router.route('/:id').get(getFoodOrderByTable).post(setFoodOrder).delete(deleteOrderByTable);
router.route('/chef/:chefId').get(getFoodOrderByChef);
router.route('/').get(getAllFoodOrders)
router.route('/done/:orderId').put(updateOrderDone)


// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router