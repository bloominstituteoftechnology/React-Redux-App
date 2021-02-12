const dotenv = require("dotenv").config()
const express = require("express")
const cors = require ("cors")

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/*", (_.res)=> {
  res.json({data: "The API LIVES!"})
})

app.listen(port, () => {
  console.log(`Server is Workong on port ${port}`)
})




// console.log("It's Working!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)