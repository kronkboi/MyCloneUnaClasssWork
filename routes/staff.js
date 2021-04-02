const express = require('express');
const router = express.Router();

// import the data we need

const testData = require('../lib/data.js');

console.table(testData.getPeopleData());



router.get('/addnew', (req, res) => {
    let fname = req.query.firstname;
    let sname = req.query.surname;
    console.log('Date entered ' + fname + ' ' + sname);
    let data = {}

    res.render('personform', {firstname: fname, surname: sname})
}
)
router.get('/addnew', (req, res) =>
res.render('personform')
)
router.get('/personadded', (req, res) =>
res.render('personadded'))

router.post('/addnew', (req, res) => {
console.log("Data send via post");
console.table(req.body);
res.redirect(303, 'personadded',)
})

router.get('/:name',  (req, res) => {

    var name = req.params.name;
    var data = testData.getPeopleData();

    if (data[name] == null) {
        res.render('404'); // could also have a special page for person not found
    }
    else {
        res.render('person', { person: data[name] })
    }


})

router.get('/personadded', (req, res) => {

    if (req.session.staffdata) {
        var newName = req.session.staffdata.name;
    }
    else {
        var newName = "";
    }
    res.render('personadded', { name: newName })
})
router.post('/addnew', (req, res) => {
    console.log("Data received from a  post");
    console.table(req.body);
    req.session.flash = 
    { type: 'success', intro: 'Data Saved:', message:  "Data for <strong>" + req.body.firstname + " " + req.body.surname + "</strong> has been added"}
    res.redirect(303, '/staff')
})
router.post('/addnew', (req, res) => {
    console.log("Data received from a  post");
    console.table(req.body);
    req.session.staffdata = { name: req.body.firstname + " " + req.body.surname };
    res.redirect(303, '/staff/personadded')
})

module.exports = router;