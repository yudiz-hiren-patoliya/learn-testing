module.exports = (app) => {
    app.use('/api/v1/product', require('../product/routes'))
   
    app.all('*', (req,res) => {
        return res.status(404).send({ message:'Page Not Found!' });
    });
}
