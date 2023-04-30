const express = require('express');
const router = express.Router();
const {getFoodItemByCategory,setFooditem,updateFoodItem,deleteFoodItem} = require('../controllers/foodItemsControllers');

router.route('/').post(setFooditem) 
router.route('/:id').get(getFoodItemByCategory)
router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

module.exports = router