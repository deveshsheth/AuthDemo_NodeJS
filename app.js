const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const nodemailer = require("nodemailer");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
const path = require('path')

app.locals.moment = require('moment');

const sequelize = require('./util/pgdb');
const otherRoutes = require('./routes/others.routes')
const authRoutes = require('./routes/auth.routes')

app.use(otherRoutes)
app.use('/auth', authRoutes);

app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync()
    .then(res => {
        app.listen(port, () => {
            console.log(`App running on port http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.log(err);
    })

    app.get('/card',(req,res) => {
        res.render('card')
    })


