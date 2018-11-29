// Import Express & Router
const express = require('express');
const router = express.Router();

// Import the Model (burger.js) to use it's database functions.
const db = require('../models/');

// ---------------------------------------------------------------------------------------------------------------------
// Create all the routes and the logic for those routes.

// GET Route to render all of the burgers from the database into the index.handlebars (homepage) on load.
router.get('/', function (req, res) {

    db.Burger.findAll({
        include: [db.Customer],
        order: [['burger_name', 'ASC']]
    }).then(function (data) {
        const hbsObject = {Burger: data};
        res.render('index', hbsObject)
    });

});

// POST Route to add a new burger to the database and page.
router.post('/api/burgers', function (req, res) {

    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (dbBurgers) {
        res.json(dbBurgers)
    });

});

// PUT Route to 'EAT' the burger, it changes the burgers status in the database and moves it on the page.
router.put('/api/burgers/:id', function (req, res) {

    db.Burger.update({
        devoured: true,
        CustomerId: req.body.CustomerId
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbBC) {
        console.log(dbBC);
        res.json(dbBC)
    })

});

// ---------------------------------------------------------------------------------------------------------------------
// Associations Coding Below

router.get('/api/burgers', function (req, res) {
    db.Burger.findAll({include: [db.Customer]})
        .then(function (show) {
            res.json(show)
        })
});

router.get('/api/customers', function (req, res) {
    db.Customer.findAll()
        .then(function (show) {
            res.json(show)
        })
});

router.post('/api/customers', function (req, res) {

    //console.log(req.body);
    db.Customer.create(req.body)
        .then(function (dbCustomers) {
            res.json(dbCustomers)
        });

});


/*router.get('/api/customers', function (req, res) {
    db.Customer.findAll().then(function (show) {
        hbsCust = {Customer: show};
        console.log(hbsCust);
        res.json(hbsCust)
    })
});*/

// Export routes for server.js to use.
module.exports = router;