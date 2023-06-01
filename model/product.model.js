const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    sName: {
        type: String,
        required: true
    },

    nPrice: {
        type: Number,
        required: true
    },

    sPhoto: {
        type: String,
        default: ''
    }
})

productSchema.statics.findByProductName = function(sName) {
    return this.findOne({ sName });
};

productSchema.statics.getProductById = function (id) {
    return this.findById(id);
}

module.exports = mongoose.model('Product', productSchema)

