var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        'status': 'success'
    });
});

module.exports = router;