// sets up several API routes using the express router
// set up api routes

// imports the express router library, the path library, the fs (file system) library, and the uuid library,
    // which provides utilities for generating unique IDs
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// imports the db.json file, which stores the notes data
const note = require('../../db/db.json');

// GET /api/notes read the db.json file and returns all saved notes as json

// show all notes in JSON data
// defines a route for handling GET requests to the /api/notes URL path
// when a user navigates to this URL, the server will respond by sending the JSON data stored in the note array using the res.json() method
    // with that id using the res.json() method
router.get('/notes', (req, res) => {
    res.json(note);
});

// defines another route for handling GET requests to the /api/notes:id URL path
// this route uses a URL parameter :id to match the id of the note the user wants to view
// when a user navigates to this URL with a specific id, the server will respond by sending the JSON data for the note with that id using the res.json() method
router.get('/notes', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            res.json(note[i]);
        }
    }
});

// defines a route for handling POST requests to the /api/notes URL path
// when a user submits a new note via a POST request to this URL, the server will respond by createing a new note object with a unique id   
    // using the uuidv4() method, adding it to the note array, and then writing the updated note array to the db.json file
    // using the fs.writeFileSync() method
// finally, the server will respond by sending the updated note array as JSON using the res.json() method
// POST /api/notes receives a new note to save on the request body, add it to the db.json file, then returns
    // the new note to the client
// give each note a unique id when it's saved -- npm i uuid package 
router.post('/notes', (req, res) => {
    const newNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuidv4()
    }
    note.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note, null, 2)
    )
    res.json(note);
});

// defines a route for handling DELETE requests to the /api/notes:id URL path
// this route urses a URL parameter :id to match the id of the note the user wants to delete
// when a user submits a DELETE request to this URL with a specific id, the server will respond by finding and removing
    // the note with that id from the note array, writing the updated note array to the db.json file, and then sending the
    // update note array as JSON using the res.json()method
// delete note by user
router.delete('/notes/:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            note.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note, null, 2)
    )
    res.json(note);
});

// exports the router module for use in the main server file
module.exports = router;

// summary:
// sets up several routes for handling API requests in an express server:
    // one for reading all notes
    // one for reading a specific note
    // one for creating a new note
    // one for deleting a specific note