const { Schema, model, mongoose } = require('mongoose');

const productSchema = new Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true}

}, {
    timestamps: true //*Added the propertie to know creation and updated */
});

module.exports = model('Product', productSchema);