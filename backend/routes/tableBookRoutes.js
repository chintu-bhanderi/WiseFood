const express = require('express');
const router = express.Router();
const { getAllTableBooks,getTableBookById,getTableBooksByUserId,getAvailableTableByUserId,getTableBookByTableSlotDate,getTablesBySlotAndDate, setTableBooks,updateAvailable,deleteTableBook } = require('../controllers/tableBookController');

router.route('/slot').post(getTablesBySlotAndDate);
router.route('/details').post(getTableBookByTableSlotDate);
router.route('/user/available/:userId').get(getAvailableTableByUserId);
router.route('/user/:userId').get(getTableBooksByUserId);
router.route('/:bookId').get(getTableBookById).put(updateAvailable).delete(deleteTableBook);
router.route('/').get(getAllTableBooks).post(setTableBooks);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router