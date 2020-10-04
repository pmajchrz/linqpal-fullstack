const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
const fieldEncryption = require('mongoose-field-encryption');

const Schema = mongoose.Schema;

const subscription = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNo: {
        type: String
    },
    address: {
        type: String
    },
    ssn: {
        type: String
    },
});

subscription.plugin(mongooseFieldEncryption, {fields: ["ssn"], secret: process.env.ENCRYPTION_KEY});

module.exports = mongoose.model('Subscription', subscription);