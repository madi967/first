const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'https://pma-31.camoo.hosting',
  user     : 'uzenze638_admin',
  password : 'uzenze@bloodshare',
  database : 'uzenze638_bloodshare_',
});

const app = express();

// Creating a GET route that returns data from the 'donneur' table.
app.get('/donneur', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM donneur', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) {
        throw error;
        console.log("error");
      }

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
      console.log("5555555555555555555");
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to https://pma-31.camoo.hosting/uzenze638_admin so you can see the data.');
});