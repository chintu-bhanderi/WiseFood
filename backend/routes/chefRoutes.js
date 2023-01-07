const express = require('express');
const router = express.Router();
const {getAllChefs,insertChef,} = require('../controllers/chefControllers');

router.route('/').get(getAllChefs).post(insertChef);
// router.route('/:id').put(upadateTable).delete(deleteTable);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router