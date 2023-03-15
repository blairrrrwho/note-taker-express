// sets up two routes for handling HTML requests in the express server: 
    // one for serving the notes.html file
    // one for serving the index.html file for all other routes

// sets up two HTML routes using the express router
const router = require('express').Router();
const path = require('path');

// defines a route for handling GET requests to the /notes url path
// when a user navigates to this url, the server will respond by sending the notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this route uses a wildcard * to match any url path that doesn't match the /notes path
// defines a route for handling GET requests to any url path
// when the user navigates to any url path, the server responds by sending the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// exports the router module for use in the main server file
module.exports = router;