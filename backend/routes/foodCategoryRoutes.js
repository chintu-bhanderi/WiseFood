const express = require('express');
const router = express.Router();
const {setCategory,getAllCategory,deleteCategory} = require('../controllers/foodCategoryControllers');

router.route('/').get(getAllCategory).post(setCategory)
router.route('/:name').delete(deleteCategory)

// router.route('/:id').put(updateGoals).delete(deleteGoals)

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router