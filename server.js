// basic setup for an express server in node.js
// create express server
// 1. import the express library and require it
const express = require('express');
// 2. set up the actual server -- initializes the app as an express application
const app = express();

// 3. set the port number to the environmental variable (port) || 3001 by default
const PORT = process.env.PORT || 3001;

// set up routes; request, response -- use routes folder
// 4. imports the api routes from the apiRoutes.js file and the HTML routes from the htmlRoutes.js file
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// 5. sets up middleware to parse incoming requests; set up data parsing
app.use(express.json()); // middleware for parsing incoming JSON data
app.use(express.urlencoded({extended: true})); // middleware used for parsing incoming string/array data
app.use(express.static('public')); // middleware used to serve static files in the public folder


// use apiRoutes
// 6. use the imported API routes by setting up the middleware to use the apiRoutes for any URL starting with /api
app.use('/api', apiRoutes);
// use htmlRoutes
// 7. use the imported HTML routes by setting up the middleware to use the htmlRoutes for any URL starting with /
app.use('/', htmlRoutes);



// to make the server run
// 8. starts the server and tells it to listen on the specified port number
app.listen(PORT, () => {
    console.log(`Server is now listening on Port ${PORT}. How are you?!`);
});