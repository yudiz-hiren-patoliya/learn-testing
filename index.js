const express = require('express')
const port = 8000;
const app = express()

require('./db/mongodb')

app.use(express.json())

require('./middleware/index')(app)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})

module.exports = app;