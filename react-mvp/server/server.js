const express = require('express')
const app = express()
const port = 3305
const { User } = require('../DataBase/modle.js')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => res.send('Hello World!')
.catch((err)=> {
    console.log(err)
    throw err;
}))

app.post('http://localhost:3000/sending-username-to-server', (data) => {
console.log(data)
})
app.get('http://localhost:3000/sending-username-to-server', (data) => {
console.log(data)
})
app.listen(port, () => console.log(`App listening on port ${port}!`))