// Import Express & Router
const express = require('express');
const router = express.Router();

// Import the Model (burger.js) to use it's database functions.
const db = require('../models/');

// ---------------------------------------------------------------------------------------------------------------------
// Create all the routes and the logic for those routes.

// GET Route to render all of the burgers from the database into the index.handlebars (homepage) on load.
router.get('/', function (req, res) {
    db.Burgers.findAll({}).then(function(data) {
        console.log(data);
    });

    /*burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });*/
});

// POST Route to add a new burger to the database and page.
router.post('/api/burgers', function (req, res) {
    console.log(req.body);
    burger.insertOne([req.body.burger_name], function (result) {
        res.status(200)
            .json({id: result.insertId});
    });
});

// PUT Route to 'EAT' the burger, it changes the burgers status in the database and moves it on the page.
router.put('/api/burgers/:id', function (req, res) {
    const name = `id = ${req.params.id}`;
    console.log('name', name);

    burger.updateOne(name, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;