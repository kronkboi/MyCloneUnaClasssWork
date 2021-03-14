const express = require('express');
const router = express.Router();

// import the data we need

const testData = require('../lib/data.js');

console.table(testData.getPeopleData());



router.get('/', (req, res) =>
    res.render('personlist', { personlist: testData.getPeopleData() }));

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

    module.exports = router;