const express = require('express');
const router = express.Router();
const {userRegistration,userLogin,getUserByUserId} = require('../controllers/authControllers');

router.route('/registration').post(userRegistration);
router.route('/login').post(userLogin);
router.route('/:userId').get(getUserByUserId);

// router.route('/login').get(getAllSlot).post(setSlot);


module.exports = router