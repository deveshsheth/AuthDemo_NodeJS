const express = require('express')
const route = express.Router()

var date = new Date().toISOString().split("T")[0];



route.get('/', (req, res) => {
    res.render('Welcome')
})

route.get('/dashboard', (req, res) => {
    res.render('Dashboard')
})

route.get('/forgotPassword', (req, res) => {
    res.render('ForgotPassword')
})


route.get('/newPassword', (req, res) => {
    res.render('NewPassword')
})


route.get('/otp', (req, res) => {
    res.render('OTP')
})


route.get('/register', (req, res) => {
    res.render('Register', { date: date })
})


module.exports = route