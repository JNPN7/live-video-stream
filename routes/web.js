const express = require('express');
const pageController = require('../controllers/pageController')
const router = express.Router();

router.get('/', pageController.pageIndex);
router.get('/takeAttendance', pageController.takeAttendance);
router.get('/client', pageController.client);
router.get('/viewAttendance', pageController.viewAttendance);
router.get('/train', pageController.train);

module.exports = router;