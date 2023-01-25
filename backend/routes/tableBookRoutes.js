const express = require('express');
const router = express.Router();
const { getAllTableBooks,getTableBookById,getTableBooksByUserId,getTableBooksBySlotAndDate, setTableBooks,updateAvailable,deleteTableBook } = require('../controllers/tableBookController');

router.route('/slot').get(getTableBooksBySlotAndDate);
router.route('/user/:userId').get(getTableBooksByUserId);
router.route('/:bookId').get(getTableBookById).put(updateAvailable).delete(deleteTableBook);
router.route('/').get(getAllTableBooks).post(setTableBooks);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router