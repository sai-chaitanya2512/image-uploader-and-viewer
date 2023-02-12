const express = require("express")

const cors = require('cors')

const {json } = require('express')

const app = express()

const userRouter = require("./routes/user")
const imageRouter = require("./routes/image")

app.use(json(),cors())


app.use("/user", userRouter)
app.use("/image", imageRouter)


app.listen(1000,()=>console.log("server running on port 1000"))