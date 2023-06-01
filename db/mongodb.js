const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/product', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=> {
  console.log('Connected to database')
}).catch((error)=> {
  console.log('Error Occure while Database connection :',error)
})
