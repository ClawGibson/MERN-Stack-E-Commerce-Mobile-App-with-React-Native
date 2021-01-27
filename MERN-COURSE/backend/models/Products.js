const { Schema, model, mongoose } = require('mongoose');

const productSchema = new Schema ({
    name: { type: String, required: true },
    description: { type: String, required: true },
    richDescription: { type: String, default: '' },
    image: { type: String, default: '' },
    images: [{ type: String, default: ' '}],
    brand: { type: String, default: ''},
    price: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId , ref: 'Category', required: true },
    countInStock: { type: Number, required: true, min: 0, max: 255 },
    isFeatured: { type: Boolean, default: false }

}, {
    timestamps: true //*Added the propertie to know creation and updated */
});

module.exports = model('product', productSchema);
