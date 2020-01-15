const express = require("express");
const app = express();
const port = 3305;
const { User } = require("../DataBase/modle.js");
// var bodyParser = require('body-parser')
const cors = require("cors");
app.use(cors());

//no need for Body Parser, changed to use middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sending-username-to-server", express.json(), (req, res) => {
  var username = req.body.username

  User.create({
    username: username
  })
    .then(() => {
      console.log("new record are created")
      return;
    })
    .catch((err) => {
      if (err.name === "SequelizeUniqueConstraintError") {
        console.log("user is already exists ") 
        return;
      }
      return res.status(500).send(err)
    })

});
app.get("/", (req, res, next) => {
  res.send("Hello World!");
  next();
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
