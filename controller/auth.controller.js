const User = require('../model/user.model');
const { validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            // console.log(validationErrors);
            res.render('Register',{ validationError: validationErrors.array()[0].msg });
        } else {
            const user = await User.findOne({ where: { email: req.body.email } })
            if (user) {
                res.render('Register', { warning: "Warning - Oops! Email Already Registered!!" })
                // res.json({ msg: "Warning - Oops! Email Already Registered!!" })
            } else {
                await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: await bcrypt.hash(req.body.password, 10),
                    phoneno: req.body.phoneno,
                    gender: req.body.gender,
                    dob: req.body.dob

                }).then(Users => {

                    if (Users) {

                        res.render('Welcome', { success: "Success - User register successfully !!" })
                        // res.json({ success: "Success - User register successfully !!" })
                    }

                }).catch(err => {
                    throw err;
                    // throw new Error('Something is missing while creating user!!');
                })
            }
        }
    } catch (err) {
        throw err;
        // throw new Error('Something went wrong we will check & get back to you !!');
    }
}

module.exports = {
    registerUser
}