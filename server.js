// import the express library and require it
const express = require('express');
// set up the actual server -- initialize app as an express application
const app = express();

// set up the port
const PORT = process.env.PORT || 3001;

// importing routes from their respective files
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// sets up middleware to parse incoming requests / sets up data parsing
app.use(express.json()); // middleware for parsing incoming JSON data
app.use(express.urlencoded({extended: true})); // middleware used for parsing incoming string/array data
app.use(express.static('public')); // middleware used to serve static files in the 'public' folder


// sets up the middleware to use apiRoutes for any URL starting with /api
app.use('/api', apiRoutes);
// sets up the middleware to use htmlRoutes for any URL starting with /
app.use('/', htmlRoutes);


// starts the server and tells it to listen on the specified port number
app.listen(PORT, () => {
    console.log(`Server is now listening on Port ${PORT}. We're here to serve you :o)`);
});