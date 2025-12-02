const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    name: {type : String, required: true},
    sku: {type : String, required: true, unique: true},
    quantity: {type: Number, required: true, default: 0},
    price: {type: Number,required: true, default: 0},
    lastUpdatedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    lastUpdatedAt: {type: Date, default: Date.now}

})

module.exports = mongoose.model('Item', itemSchema);