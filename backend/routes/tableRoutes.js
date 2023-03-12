const express = require('express');
const router = express.Router();
const {getAllTables,getTableNo,setTable,upadateTable,deleteTable} = require('../controllers/tableControllers');

router.route('/').get(getAllTables).post(setTable);
router.route('/:id').get(getTableNo).put(upadateTable).delete(deleteTable);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router