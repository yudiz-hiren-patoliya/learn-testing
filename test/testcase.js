const mongoose = require('mongoose')
const ProductModel = require('../model/product.model')

const expect = require('chai').expect;
require('chai').use(require('chai-mongo-doc'))

describe('Product Model', () => {
    before(async () => {
        // Connect to the MongoDB product database
        const conn = await mongoose.createConnection('mongodb://localhost:27017/product', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        conn.on('connected',()=> console.log(`Connect to Product database`))
        conn.on('error', (err) => console.log(`Error while connect DB : ${err}`))
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
        expect(productData?._id).to.be.objectId
    });

    it('product find by name using static method',async() => {
        const data = await ProductModel.create({ sName: 'CPU', nPrice: 10000 });
        const product = await ProductModel.findByProductName(data?.sName);
        expect(product).to.exist;
        expect(data?.sName).to.equal(getProduct?.sName)
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

