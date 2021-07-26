const express = require('express')
const userHandler = require('../Router_handler/user_handler')
const userRouter = express.Router()

userRouter.post('/reguser', userHandler.regUser)

userRouter.post('/login', userHandler.login)

module.exports = userRouter