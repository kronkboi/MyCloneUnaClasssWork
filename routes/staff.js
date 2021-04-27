const express = require('express');
const router = express.Router();

// import the data we need

const testData = require('../lib/db.js');

router.get('/', async (req, res) => {
    const data = await testData.readStaff();

    res.render('personlist', { personlist: data })
});




router.get('/addnew', (req, res) => {

    res.render('personform')
}
)

router.get('/personadded', (req, res) => {

    if (req.session.staffdata) {
        var newName = req.session.staffdata.name;
    }
    else {
        var newName = "";
    }
    res.render('personadded', { name: newName })
})

// router.post('/addnew', (req, res) => {
//      let fname = req.body.firstname;
//      let sname = req.body.surname;
//      console.log('Data entered ' + fname + ' ' + sname);   
//      res.render('personform', {name1 : fname, name2: sname})

// })

// This implments POST/REDIRECT/GET it uses
// a session to take data from this page to the personadded page.

// router.post('/addnew', (req, res) => {
//     console.log("Data received froma  post");
//     console.table(req.body);
//     req.session.staffdata = { name: req.body.firstname + " " + req.body.surname }
//     res.redirect(303, '/staff/personadded',)
// })

// This implements POST/REDIRECT/GET
//this time is uses a flash message

router.post('/addnew', (req, res) => {
    console.log("Data received from a  post");
    console.table(req.body);

    // note: this is not safe code. Any inputs from a user should be validated and sanitised before
    // being saved to the database.


    testData.createStaff(req.body)
        .then(() => {
            req.session.flash =
                { type: 'success', intro: 'Data Saved:', message: "Data for <strong>" + req.body.name + "</strong> has been added" }
            res.redirect(303, '/staff')
        }
        )
        .catch(() => {
            req.session.flash =
                { type: 'danger', intro: 'Data not saved:', message: "Data for <strong>" + req.body.name + "</strong> has not been added" }
            res.redirect(303, '/staff')
        }
        )
    })
       





router.get('/:name', async (req, res) => {

    var name = req.params.name;
    var data = await testData.readStaff({ name: name });

    // data is an array which contains all the staff whose name matches.
    // there should only be one and we will take the

    if (!data[0]) {
        res.render('404'); // could also have a special page for person not found
    }
    else {
        res.render('person', { person: data[0] })
    }
})

router.get('/:name/edit', async (req, res) => {
    var name = req.params.name;
    var data = await testData.readStaff({ name: name });

    res.render('personeditform', { person: data[0] })
})

router.get('/:name/delete', async (req, res) => {
    var name = req.params.name;

    await testData.deleteStaff(name)
        .then(() => {
            req.session.flash =
                { type: 'success', intro: 'Data Removed:', message: "<strong>" + name + "</strong> has been removed" }
            res.redirect('/staff')
        })
        .catch(() => {
            req.session.flash =
                { type: 'danger', intro: 'Data not Removed:', message: "<strong>" + name + "</strong> has not been removed" }
            res.redirect('/staff')
        });
});



router.post('/:name/edit', async (req, res) => {
    console.log("Data received from a Edit post");
    console.table(req.body);
    testData.updateStaff(req.body)
        .then(() => {
            req.session.flash =
                { type: 'success', intro: 'Data Edited:', message: "Data for <strong>" + req.body.name + "</strong> has been edited" }
            res.redirect(303, '/staff')
        })
        .catch(() => {
            req.session.flash =
                { type: 'danger', intro: 'Data not Edited:', message: "Editing failed" }
            res.redirect('/staff')
        });
})

module.exports = router;