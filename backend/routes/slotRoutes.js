const express = require('express');
const router = express.Router();
const {getAllSlot,setSlot,getSlotNo} = require('../controllers/slotControllers');

router.route('/').get(getAllSlot).post(setSlot);
router.route('/:slotId').get(getSlotNo);

module.exports = router