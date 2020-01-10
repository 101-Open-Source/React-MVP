const express = require('express')
const app = express()
const port = 3306
const { User } = require('../DataBase/modle.js')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))