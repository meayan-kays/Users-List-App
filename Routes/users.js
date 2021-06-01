const express = require('express')
const router = express.Router()
const User = require('../Models/User')

router.get('/Welcome', (req, res) => {
    res.send('Welcome to Users List App')
})

// Manage Database with REST_API CRUD requests

// Get All Users
router.get('/getUsers', (req, res) => {
    User.find({})
    .exec((err, users) => {
        if(err){
            console.log('Error Getting All Users')
        }
        else{
            console.log(users)
            res.json(users)
        }
    })   
})

// Add One User
router.post('/addUser', (req, res) => {
    var {name, email, phone} = req.body
    var newUser = new User({
        name,
        email,
        phone
    })
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.send(err))
})

// Update One User
router.put('/updateUser/:userID', (req, res) => {
    var {name, email, phone} = req.body
    //var {_id} = req.params
    User.findOneAndUpdate({userID : req.params._id}, {name, email, phone}, (err, user) => {
        if (err) {
            return console.log(err)
        }else {
            console.log(user)
            res.json(user)
        }
    })
})

// Delete One User
router.delete('/deleteUser/:userID', (req, res) => {
    User.findOneAndRemove({userID : req.params._id}, (err, user) => {
        if (err) {
            return console.log(err)
        }else {
            console.log("Delete is complete with success") 
            res.json(user)
        }
    })
})

module.exports = router