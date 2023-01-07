const express = require('express');
const router = express.Router();
const {getAllSlot,setSlot,} = require('../controllers/slotControllers');

router.route('/').get(getAllSlot).post(setSlot);
// router.route('/:id').put(upadateTable).delete(deleteTable);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router