const express = require('express');
const router = express.Router();
const testData = require('../lib/data.js');

router.get('/', (req, res) => {

    var message = "";

    if (req.signedCookies.tracking) {
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking', currentDate.toDateString(), { signed: true });

    res.render('home', { 'message': message });
});


router.get('/about', (req, res) => {
    res.render('about', {
        tags: "about, background", linkData:
            [
                { url: "http:itsligo.ie", text: '<strong> IT Sligo Web</strong>' },
                { url: "http://www.irishtimes.ie", text: 'The Irish Times' }
            ]
    })
});

router.get('/contact', (req, res) => {
    res.render('contact', {  data: testData.getSampleData() });
});

module.exports = router;