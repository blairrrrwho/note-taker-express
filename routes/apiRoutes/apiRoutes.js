// set up api routes
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4:uuidv4 } = require('uuid');
const {notes} = require('../../db/db.json');

// show all notes in JSON data
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});



// GET /api/notes read the db.json file and returns all saved notes as json


// POST /api/notes receives a new note to save on the request body, add it to the db.json file, then returns
    // the new note to the client
    // give each note a unique id when it's saved -- npm i uuid package 
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

function createNewNote (body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
}; 

module.exports = router;