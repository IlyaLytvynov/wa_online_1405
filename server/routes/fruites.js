/**
 * Created by IlyaLitvinov on 01.12.15.
 */
const express = require('express');
const fruitesModel = require('../models/fruites.js');
const router = express.Router();

router.get('/', function (req, res) {
    if(!fruitesModel.getItem()) {
        res.status(500).send('Internal server error');
    }

    res.status(200).send(fruitesModel.getItem());
});

router.post('/', function (req, res) {
    if (req.body.fruite) {
        fruitesModel.setItem(req.body.fruite);
        res.status(200).send(fruitesModel.getItem());
    } else if(req.body && !req.body.fruite){
        res.status(400).send('req.body.fruite is requred');
    } else {
        res.status(500).send('Internal server error');
    }
});

router.put('/:index', function (req, res) {
    if(!req.params.index) {
        res.status(400).send('Index is required');
    }

    if(!req.body.fruite) {
        res.status(400).send('Fruite is required');
    }

    if (req.params.index && Number(req.params.index) < fruitesModel.getItem().length && req.body.fruite) {
        fruitesModel.updateItem(req.params.index, req.body.fruite);
        res.status(200).send(fruitesModel.getItem());
    } else {
        res.status(404).send('fruite not found');
    }

});

router.delete('/:index', function (req, res) {
    if(!req.params.index) {
        res.status(400).send('Index is required');
    }

    if (req.params.index && Number(req.params.index) < fruitesModel.getItem().length) {
        setTimeout(function () {

            fruitesModel.deleteItem(req.params.index, 1);
            res.status(200).send(fruitesModel.getItem());
        }, 500);

    } else {
        res.status(404).send('fruite not found');
    }
});

module.exports = router;
