const express = require('express')
const userRouter = require('./Router/user')

const app = express()

app.use('/api', userRouter)

app.listen('8000', () => {
    console.log("服务已开启");
})