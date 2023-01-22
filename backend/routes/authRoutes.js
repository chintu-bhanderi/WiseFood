const express = require('express');
const router = express.Router();
const {userRegistration} = require('../controllers/authControllers');

router.route('/registration').post(userRegistration);
// router.route('/login').get(getAllSlot).post(setSlot);


module.exports = router