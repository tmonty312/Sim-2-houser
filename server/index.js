const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING} = process.env


const app = express()

app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

app.get('api/house', controller.getHouse)
app.post('/api/house', contoller.addHouse)
app.delete('/api/house/:id', controller.deleteHouse)



app.listen(SERVER_PORT, () => console.log('Listening on port:', SERVER_PORT))