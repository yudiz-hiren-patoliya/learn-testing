const services = {}
const ProductModel = require('./model')

services.addProduct = async (req, res) => {
    try {
        const { sName, nPrice } = req.body
        if (!sName && !nPrice) return res.status(400).send({ message: 'All Field are required' })

        await ProductModel.create({ sName, nPrice })
        return res.status(201).send({ message: 'Product Added Successfully' })
    } catch (error) {
        console.log(error);
    }
}


services.getProduct = async (req, res) => {
    try {
        if(!req.params.id) return res.status(400).send({message: 'Please provide valid id'})

        const product = await ProductModel.findOne({_id:req.params.id}).lean()
        if(!product) return res.status(404).send({ message:'Product Not Found' })
        return res.status(200).send({ message: 'Product Fetch Successfully', product })
    } catch (error) {
        console.log(error);
    }
}

services.listProduct = async (req, res) => {
    try {
        const product = await ProductModel.find({}).lean()
        return res.status(200).send({ message: 'Product Fetch Successfully', product })
    } catch (error) {
        console.log(error);
    }
}

services.updateProduct = async (req, res) => {
    try {
        if(!req.params.id) return res.status(400).send({message: 'Please provide valid id'})
        
        const {sName,nPrice,sPhoto} = req.body

        const product = await ProductModel.updateOne({_id:req.params.id},{sName,nPrice,sPhoto})
        if(product.modifiedCount) return res.status(404).send({ message:'Product Updated Successfully' })
        else return res.status(404).send({ message:'Product Not Found' })
    } catch (error) {
        console.log(error);
    }
}

services.deleteProduct = async (req, res) => {
    try {
        if(!req.params.id) return res.status(400).send({message: 'Please provide valid id'})
        
        const product = await ProductModel.deleteOne({ _id:req.params.id })

        if(product.deletedCount) return res.status(404).send({ message:'Product Deleted Successfully' })
        else return res.status(404).send({ message:'Product Not Found' })
    } catch (error) {
        console.log(error);
    }
}


module.exports = services
