const express = require('express')

const app = express();


app.listen(3000, () => {
  console.log('I lauched the server!')
})

app.get("/", (req, res) => {
  res.send("I love Bunnies!")
})