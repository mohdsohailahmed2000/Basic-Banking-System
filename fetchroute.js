var express = require('express');
var router = express.Router();
var userController= require('./fetch');

router.post('/fetch-data',fetchController.fetchData);

module.exports = router;