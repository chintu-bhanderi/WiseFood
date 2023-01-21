const express = require('express');
const router = express.Router();
const { getAllTableBooks,getTableBookById,getTableBooksByUserId, setTableBooks,updateAvailable,deleteTableBook } = require('../controllers/tableBookController');

router.route('/').get(getAllTableBooks).post(setTableBooks);
router.route('/:bookId').get(getTableBookById).put(updateAvailable).delete(deleteTableBook);
router.route('/user/:userId').get(getTableBooksByUserId);
// router.route('/:name').put(updateFoodItem).delete(deleteFoodItem);

// otherwise we can write :- router.put('/:id,updateGoals)


module.exports = router