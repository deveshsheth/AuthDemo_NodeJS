const express = require('express')
const routes = express.Router()

const authController = require('../controller/auth.controller')

const { check } = require('express-validator/check')

// routes.post('/authLogin',authController.authLogin);
routes.post('/registerUser',
check("name").not().isEmpty().trim().escape().withMessage("Invalid Name !!"),
check("email").isEmail().normalizeEmail().not().isEmpty().trim().withMessage("Invalid Email !!"),
check("phoneno").isLength({ min: 10 }).withMessage('Contact number must be 10 digit').matches(/^[6-9]{1}[0-9]{9}$/).withMessage('Contact Number start from 6 to 9.').not().isEmpty().trim().escape().withMessage("Invalid Contact Number !!"),
check('password').not().isIn(['123456', 'password', 'qwerty','asdfgh']).withMessage('Do not use a common word as the password').matches(/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/).withMessage("Password must contain special character").not().isAlphanumeric().withMessage('password must contain a number, alphabet & one capital letter'),
check('gender').not().isEmpty().withMessage("Select Gender !!"),
check('dob').exists().not().isEmpty().withMessage('start must be in correct format dd:mm:yyyy')
,authController.registerUser);

// routes.post('/authForgot', authController.authForgot);
// routes.post('/authOtp', authController.authOtp);
// routes.post('/authchangePassword', authController.authChangePassword);
// routes.get('/logout', authController.logout);

module.exports = routes;