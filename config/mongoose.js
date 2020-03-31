const mongoose = require('mongoose');

//connecting to the mongodb database
mongoose.connect('mongodb://localhost/product-api');


//checking the connection 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: MongoDB'));
db.once('open', function() {
  console.log("Successfully connected to mongoDB databse");
});

module.exports = db;