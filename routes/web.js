const express = require('express');
const pageController = require('../controllers/pageController')
const router = express.Router();

router.get('/', pageController.pageIndex);
router.get('/streamer', pageController.streamer);
router.get('/client', pageController.client);

module.exports = router;