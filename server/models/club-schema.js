const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clubSchema = new Schema({
    clubName: {
        type: String
    },
    clubDescription: {
        type: String
    },
    clubRequirementOne: {
        type: String,
        default: 'None'
    },
    clubRequirementTwo: {
        type: String,
        default: 'None'
    },
    clubRequirementThree: {
        type: String,
        default: 'None'
    },
    clubRequirementFour: {
        type: String,
        default: 'None'
    },
    clubRequirementFive: {
        type: String,
        default: 'None'
    },
    clubEncouragedActivityOne: {
        type: String,
        default: 'None'
    },
    clubEncouragedActivityTwo: {
        type: String,
        default: 'None'
    },
    clubEncouragedActivityThree: {
        type: String,
        default: 'None'
    },
    clubEncouragedActivityFour: {
        type: String,
        default: 'None'
    },
    clubEncouragedActivityFive: {
        type: String,
        default: 'None'
    },
    clubDiscouragedActivityOne: {
        type: String,
        default: 'None'
    },
    clubDiscouragedActivityTwo: {
        type: String,
        default: 'None'
    },
    clubDiscouragedActivityThree: {
        type: String,
        default: 'None'
    },
    clubDiscouragedActivityFour: {
        type: String,
        default: 'None'
    },
    clubDiscouragedActivityFive: {
        type: String,
        default: 'None'
    },
},{
        collection: 'clubs'
    } )

    module.exports = mongoose.model('Club', clubSchema);    