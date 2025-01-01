const express = require('express')
const app = express()
const db = require("./db")

const bodyparser = require("body-parser")

app.use(express.json())

app.get('/', (req, res) => res.send("welcome to the home page"))


  //import routes file
  const personroutes = require("./routes/personroutes")
  const menuitemroutes = require("./routes/menuitemroutes")
  //use export file
  app.use("/person",personroutes)
  app.use("/menu",menuitemroutes)


app.listen(3000, () => console.log(`Example app listening on port 3000`))