// set up api routes
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const note = require('../../db/db.json');

// GET /api/notes read the db.json file and returns all saved notes as json

// show all notes in JSON data
router.get('/notes', (req, res) => {
    res.json(note);
});

router.get('/notes', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            res.json(note[i]);
        }
    }
});

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

module.exports = router;