const express = require('express');
const router = express.Router();
const { getAllTableBooks,getTableBookByBookId,getTableBooksByUserId,getTableBookById,getAvailableTableByUserId,getTableBookByTableSlotDate,getTablesBySlotAndDate, OrderPayment,verifyPayment,setTableBooks,updateAvailable,deleteTableBook } = require('../controllers/tableBookController');

router.route('/slot').post(getTablesBySlotAndDate);
router.route('/details').post(getTableBookByTableSlotDate);
router.route('/user/available/:userId').get(getAvailableTableByUserId);
router.route('/user/:userId').get(getTableBooksByUserId);
router.route('/id/:id').get(getTableBookById)
router.route('/payment').post(OrderPayment)
router.route('/verify').post(verifyPayment)
router.route('/:bookId').get(getTableBookByBookId).put(updateAvailable).delete(deleteTableBook);
router.route('/').get(getAllTableBooks).post(setTableBooks);

module.exports = router