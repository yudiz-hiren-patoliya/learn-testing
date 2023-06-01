const mongoose = require('mongoose')
const ProductModel = require('../model/product.model')

const expect = require('chai').expect;

describe('Product Model', () => {
    before(async () => {
        // Connect to the MongoDB product database
        mongoose.connect('mongodb://localhost:27017/product', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }).then(()=> {
            console.log('Connected to database')
        }).catch((error)=> {
            console.log('Error Occure while Database connection :',error)
        })
    });

    after(async () => {
        await mongoose.connection.close()
    })

    beforeEach(async () => {
        await ProductModel.deleteMany()
    })

    it('should add product', async () => {
        const productObj = { sName: 'CPU', nPrice: 10000 }
        const productData = await ProductModel.create(productObj);
        expect(productData).to.be.an('object')
    });

    it('product find by name using static method',async() => {
        const data = await ProductModel.create({ sName: 'CPU', nPrice: 10000 });
        const product = await ProductModel.findByProductName(data?.sName);
        expect(product).to.exist;
        expect(data?.sName).to.equal(product?.sName)
    })


    it('product find by id using static method',async() => {
        const data = await ProductModel.create({ sName: 'CPU', nPrice: 20000 });
        const getProduct = await ProductModel.getProductById(data?._id)
        expect(getProduct).to.exist;
        expect(data?.sName).to.equal(getProduct?.sName)
    })

    it('should get list of models', () => {
        const models = mongoose.modelNames(); 
        expect(models).to.include('Product'); 
    })
})

