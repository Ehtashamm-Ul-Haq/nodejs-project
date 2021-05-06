const express = require('express');
const router = express.Router();
const { user } = require('../controller')

router.get('/', user.getRequest);

module.exports = router;