// sets up several routes for handling api requests in an express server:
    // one for reading all notes (GET)
    // one for reading a specific note (GET)
    // one for creating a new note (POST request)
    // one for deleting a specific note (DELETE)

// imports the express router library, the path library, the fs (file system) library, and the uuid library
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// imports the db.json file, which stores the notes array
const note = require('../../db/db.json');

// show all notes in JSON data
// res.json() -- sends a JSON response; 
    //this method sends a response that is the parameter converted to a JSON string using the JSON.stringify() method

// defines a route for handling GET requests to the /api/notes url path
// server will respond by sending the JSON data stored in the note array 
router.get('/notes', (req, res) => {
    res.json(note);
});

// defines a route for handling GET api requests to the /api/notes:id url path; a specific note
// this route uses a url parameter :id to match the id of the note the user wants to view
// the server will respond by sending the JSON data for the note with that specific id using the res.json() method -- sends a JSON response
router.get('/notes', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            res.json(note[i]);
        }
    }
});

// defines a route for handling POST requests to the /api/notes url path
// when a user submits a new note, the server will respond by: 
    // creating a new note object with a unique id, adds it to the note array, and writes the updated note array to the db.json file
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

// defines a route for handling DELETE requests to the /api/notes:id url path
// uses the url parameter :id to match the id of the note the user wants to delete
// server responds by removing that note from the array and writing the updated note array to the db.json file
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