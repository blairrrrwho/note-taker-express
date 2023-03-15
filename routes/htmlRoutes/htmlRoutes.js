// do you need to require express and app every .js file? 

// sets up two routes for handling HTML requests in an express server: 
    // one for serving the notes.html file
    // one for serving the index.html file for all other routes
    
// sets up two HTML routes using the express router
const router = require('express').Router();
const path = require('path');

// defines a route for handling GET requests to the /notes URL path
// when a user navigates to this URL, the server will resopnd by sending the notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// defines a route for handling GET requests to any URL path
// this route uses a wildcard * to match any URL path that doesn't match the /notes path
// when a user navigates to any other URL path, the server responds by sending the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// exports the router module for use in the main server file
module.exports = router;

