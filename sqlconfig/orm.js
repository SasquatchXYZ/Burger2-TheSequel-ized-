// Import MySQL Connection
const connection = require('./connection');

// Configure our 'Object-Relational Mapper'
const orm = {

    // Query to Retrieve all of the burgers in the database.
    selectAll: function (cb) {
        const query = 'SELECT * FROM burgers';
        connection.query(query, function (err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    // Query to Add a new burger to the database, it receives the name of the burger from the Model.
    insertOne: function (burger_name, cb) {
        const query = `INSERT INTO burgers (burger_name) VALUES (?)`;
        connection.query(query, [burger_name], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    // Query to update a burger in the database, to change it's status from 'not devoured' to 'devoured'.
    // It receives the ID of the burger to be updated from the Model.
    updateOne: function (id, cb) {
        const query = `UPDATE burgers SET devoured = 1 WHERE ${id}`;
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result)
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;