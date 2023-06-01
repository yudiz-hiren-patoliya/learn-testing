const request = require('supertest')
const expect = require('chai').expect
const server = require('../index')
const ProductModel = require('../product/model')

const store = {}

describe('Product routes', () => {
    before(async ()=> {
        const id = await ProductModel.find({}).lean()
        store.id = id[0]?._id || '647880bbfa9437000b168cf1'
        store.diffid = '63c63716599757cdbf8fabe6'
    })

    describe('/POST add Product',()=> {
        it('should add product',(done)=> {
            const data = { sName:'Laptop',nPrice:50000 }
            request(server)
            .post('/api/v1/product/add')
            .send(data)
            .expect(201)
            .end(function(err,res){
                if(err) done(err)
                expect(res.body).to.be.a('object')
                expect(res.body.message).to.equal('Product Added Successfully')
                done()
            })
        })
    })

    describe('/GET get one product',()=> {
        it('should get product',(done)=> {
            request(server)
            .get(`/api/v1/product/view/${store.id}`)
            .expect(200)
            .end(function(err,res){
                if(err) done(err)
                expect(res.body).to.be.a('object')
                expect(res.body.message).to.equal('Product Fetch Successfully')
                done()
            })
        })

        it('should not found product',(done)=> {
            request(server)
            .get(`/api/v1/product/view/${store.diffid}`)
            .expect(404)
            .end(function(err,res){
                if(err) done(err)
                expect(res.body).to.be.a('object')
                expect(res.body.message).to.equal('Product Not Found')
                done()
            })
        })

        it.only('should not found product while id not provide',(done)=> {
           
            request(server)
            .get(`/api/v2/product/view/id`)
            .expect(404)
            .end(function(err,res){
                if(err) done(err)
                expect(res.body).to.be.a('object')
                expect(res.body.message).to.equal('Page Not Found!')
                done()
            })
        })
    })

   
})