const mongoose = require ('mongoose');
const express = require ('express');
const router = express.Router();

let club = require('../models/club-schema');

router.route('/create').post((req, res, next) => {
    club.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

router.route('/').get((req, res, next) => {
    club.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = router;