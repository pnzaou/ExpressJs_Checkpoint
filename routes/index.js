var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('Home')
})

router.get('/services', (req, res)=>{
    res.render('services')
})

router.get('/contact', (req, res)=>{
    res.render('contact')
})

module.exports = router;
