const { Schema, model, mongoose } = require('mongoose');

const orderSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: Boolean }
}, {
    timestamps: true
});

module.exports = model('order', orderSchema);