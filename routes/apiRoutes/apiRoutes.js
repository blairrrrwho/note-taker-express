// set up api routes
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4:uuidv4 } = require('uuid');
const {notes} = require('../../db/db.json');

// GET /api/notes read the db.json file and returns all saved notes as json
// show all notes in JSON data
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


// POST /api/notes receives a new note to save on the request body, add it to the db.json file, then returns
    // the new note to the client
    // give each note a unique id when it's saved -- npm i uuid package 
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDataBase(params, notes);
    res.redirect('');
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

function updateDataBase(id, notesArray) {
    const deletedNote = id;
    for (let i = 0; i < notesArray.length; i++) {
      if (deletedNote === notesArray[i].id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../../db/db.json"),
          JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  };

module.exports = router;