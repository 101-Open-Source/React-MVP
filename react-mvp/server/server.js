const express = require('express')
const app = express()
const port = 3305
const { User } = require('../DataBase/modle.js')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.post('/sending-username-to-server', (req, res) => {
  console.log('here')
  console.log(req.body);
  res.send('heee')
})
app.get('/', (req, res,  next) =>{
  res.send('Hello World!')
 next()
 }) 

app.listen(port, () => console.log(`App listening on port ${port}!`))