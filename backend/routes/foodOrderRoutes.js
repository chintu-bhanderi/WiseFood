const express = require('express');
const router = express.Router();
const {getAllFoodOrders,getFoodOrderByTable,setFoodOrder,updateOrderDone,deleteOrderByTable} = require('../controllers/foodOrderControllers');

        
             // id : tablebookIs is there
router.route('/:id').get(getFoodOrderByTable).post(setFoodOrder).delete(deleteOrderByTable);
router.route('/').get(getAllFoodOrders)
router.route('/done/:orderId').put(updateOrderDone)

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router