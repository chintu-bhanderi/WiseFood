const express = require('express');
const router = express.Router();
const {workerRegistration,workerLogin,workerLogout,getAllWorker} = require('../controllers/workerControllers');
const { userLogoutMiddleware } = require('../middleware/authMiddlerware');

router.route('/registration').post(workerRegistration);
router.route('/login').post(workerLogin); 
router.route('/logout').post(userLogoutMiddleware,workerLogout); 
router.route('/').get(getAllWorker);

module.exports = router