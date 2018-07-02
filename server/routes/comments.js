/**
 * Created by IlyaLitvinov on 01.12.15.
 */
/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var express = require('express'),
    commentsModel = require('../models/comments.js'),
    router = express.Router();



router.get('/', function (req, res) {
    setTimeout(function () {
        res.status(200).send(commentsModel.getItems());
    }, 0);
});

router.post('/', function (req, res) {
    var response;

    if (req.body) {
        response = commentsModel.setItem(req.body);
        setTimeout(()=> {
            res.status(200).send(response);
        }, 0);

    } else {
        res.status(500).send('Bad request, please specify comment field').end();
    }
});

router.put('/:id', function (req, res) {
    if (req.params.id && req.body) {
        var data = commentsModel.updateItem(req.body, req.params.id);

        res.status(200).send(data);
    } else if (!req.params.id) {
        res.status(404).send('Not found').end()
    }
    else {
        res.status(500).send('Bad request').end()
    }
});

router.delete('/:id', function (req, res) {
    if (req.params.id) {
        var responseData = commentsModel.deleteItem(req.params.id);
        if(responseData) {
            res.status(200).send(responseData);
        } else {
            res.status(404).send('Not found');
        }
    }
});

module.exports = router;
