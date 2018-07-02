/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'WebApp' });
});

module.exports = router;
