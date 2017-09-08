const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser =require('body-parser')
const app = express()
const indexRoutes=require('./routes/index.js')


//SETTINGS
app.set('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')
//MIDDLEWARE
app.set(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))


//ROUTES
app.use('/',indexRoutes)

app.listen(app.get('port'), () => { 
   console.log('server on port',app.get('port'))
})