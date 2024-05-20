const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'jade')
app.set('views', './views')

const Verification = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hourOfDay = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next();
    } else {
        res.send("<h1 style='display:flex; height:100vh; width:100%; justify-content:center; align-items:center;'>La plateforme est fermée</h1>");
    }
};

app.use('/', Verification, routes)
app.use('/services', Verification, routes)
app.use('/contact', Verification, routes)


app.listen(8080, _=>{
    console.log('http://localhost:8080')
})