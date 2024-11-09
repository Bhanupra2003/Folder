const express = require('express')
const router = express.Router()
const Usercontroller = require('../controller/userController')

router.get('/user',Usercontroller.getAllUsers)
router.post('/users',Usercontroller.createUser)

module.exports = router;