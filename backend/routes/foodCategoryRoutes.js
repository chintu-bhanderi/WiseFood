const express = require('express');
const router = express.Router();
const {setCategory,getAllCategory,deleteCategory} = require('../controllers/foodCategoryControllers');

router.route('/').get(getAllCategory).post(setCategory)
router.route('/:name').delete(deleteCategory)

module.exports = router