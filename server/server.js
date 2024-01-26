var express = require ('express')
var app = express()


require('./src/utils/mongo_db')

const test = require('./src/routes/test')



app.use('/test',test)

app.listen(3000, () => {
    console.log("server running")
})