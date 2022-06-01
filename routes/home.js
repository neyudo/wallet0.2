const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    const urls = [
        {origin: 'www.google.co', shortURL: 'safdsasg'},
        {origin: 'www.google.es', shortURL: 'safdsasg'},
        {origin: 'www.google.de', shortURL: 'safdsasg'},
        {origin: 'www.google.com.ec', shortURL: 'safdsasg'},
    ]
    res.render('home', {urls})
})

module.exports = router