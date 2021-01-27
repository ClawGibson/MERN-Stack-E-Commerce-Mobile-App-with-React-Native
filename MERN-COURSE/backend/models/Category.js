const { Schema, model, mongoose } = require('mongoose');

const categorySchema = new Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String },
    status: { type: Boolean }
}, {
    timestamps: true
});

module.exports = model('category', categorySchema);
