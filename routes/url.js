const express = require('express');
const { handelGenerateNewShortURL, handelAnalytics } = require('../controllers/url');


const router = express.Router();

router.post('/', handelGenerateNewShortURL);
router.get('/analytics/:shortId', handelAnalytics)
module.exports = router;