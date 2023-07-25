const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jiel');

const DataSchemaElias = mongoose.Schema({
    type: String,
    value: Number,
    time: String
}, {collection: 'data_elias'});

const DataSchemaJack = mongoose.Schema({
    type: String,
    value: Number,
    time: String
}, {collection: 'data_jack'});

const DataModelElias = mongoose.model('data_elias', DataSchemaElias);
const DataModelJack = mongoose.model('data_jack', DataSchemaJack);


module.exports = {
    DataModelElias,
    DataModelJack
};