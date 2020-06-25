const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
    buildingID: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    contact: {
        type: Object,
        required: true
    },
    direction: {
        type: String,
        required: false
    },
    landSize: {
        type: String,
        required: false
    },
    size: {
        type: Object,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    description: {
        type: Object,
        required: false
    }
});

const userDb = mongoose.connection.useDb('renthub-db')

module.exports = userDb.model('Buildings', BuildingSchema);