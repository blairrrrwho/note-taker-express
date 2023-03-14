// sets up two HTML routes using the express router
// set up html routes

// imports the express router library and the path library -- both provide utilities for working iwth file and directory paths
const router = require('express').Router();
const path = require('path');

// defines a route for handling GET requests to the /notes URL path
// when a user navigates to this URL, the server will resopn by sending the notes.html file located in the public folder using the 
    // res.sendFile() method, which sends a file in the response 
//  GET /notes returns the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// defines a route for handling GET requests to any URL path
// this route uses a wildcard * to match any URL path that doesn't match the /notes path
// when a user navigates to any other URL path, the server will respond by sending the index.html file located in the public folder 
    // using the res.sendFile()method 
// GET * returns the index.html file 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// exports the router module for use in the main server file
module.exports = router;

// summary:
// sets up two routes for handling HTML requests in an express server: 
    // one for serving the notes.html file
    // one for serving the index.html file for all other routes