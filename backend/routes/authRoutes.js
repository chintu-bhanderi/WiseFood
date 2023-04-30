const express = require('express');
const router = express.Router();
const {userRegistration,userLogin,getUserByUserId} = require('../controllers/authControllers');
const { userRegistrationMiddleware, userLoginMiddleware } = require('../middleware/authMiddlerware');
const { fetchUserMiddleware } = require('../middleware/fetchUserMiddleware');

router.route('/registration').post(userRegistrationMiddleware,userRegistration);
router.route('/login').post(userLoginMiddleware,userLogin);
router.route('/:userId').get(getUserByUserId);

module.exports = router