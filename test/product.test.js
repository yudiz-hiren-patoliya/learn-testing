const mongoose = require('mongoose')
const request = require('supertest')
const expect = require('chai').expect
const server = require('../index')
const ProductModel = require('../product/model')

const store = {}

describe('Product routes', () => {
    before(async ()=> {
        const id = await ProductModel.findOne({}).lean()
        store.id = id?._id ?? '648021d7ed0969797cf75c5e'
        store.diffid = '63c63716599757cdbf8fabe6'
    })

    after(async ()=> {
        await mongoose.disconnect().then(()=> console.log('Database Disconnected successfully')).catch((error)=> console.log('Error while Database disconnect :'+error))
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
        it.only('should get product',(done)=> {
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

        it('should not found product while id not provide',(done)=> {
            request(server)
            .get('/api/v2/product/view/id')
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