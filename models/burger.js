// Import the ORM in order to be able to create functions that will then, in turn interact with the database.
const orm = require('../config/orm');

const burger = {

    // Function to Select All the burgers in the database; it simply invokes the SelectAll ORM Query.
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    // Function to Add a burger to the database, it passes the name of the burger to the ORM Insert One Query.
    insertOne: function (burger_name, cb) {
        console.log(burger_name);
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },

    // Function to Update a burger in the database, it passes the ID of the burger to be updated to the ORM Query.
    updateOne: function (id, cb) {
        console.log(id);
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;