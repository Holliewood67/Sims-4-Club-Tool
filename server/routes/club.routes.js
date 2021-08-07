const mongoose = require ('mongoose');
const mongodb = require('mongodb');

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

//Remove Club Router
router.get('/removeClub/:id', (req, res, next) => {
    club.deleteOne({_id: mongodb.ObjectID(req.params.id)}, (err, result) => {
        if (err) return console.log(err)
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