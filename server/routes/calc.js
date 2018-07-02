/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var express = require('express'),
    router = express.Router();

router.post('/sum', function (req, res) {
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) + parseFloat(req.body.b);
        console.log(result);

        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

router.post('/mul', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) * parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

router.post('/dif', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) - parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

router.post('/div', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) / parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

module.exports = router;