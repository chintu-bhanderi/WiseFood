const express = require('express');
const router = express.Router();
const {workerRegistration,workerLogin,workerLogout,getAllWorker} = require('../controllers/workerControllers');
const { authMiddleware } = require('../middleware/authMiddlerware');

router.route('/registration').post(workerRegistration);
router.route('/login').post(workerLogin); 
router.route('/logout').post(authMiddleware,workerLogout); 
router.route('/').get(getAllWorker);

// router.route('/login').get(getAllSlot).post(setSlot);


module.exports = router