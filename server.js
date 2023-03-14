// create express server
const express = require('express');
//  to set up the actual server
const app = express();

// const PORT = process.env.PORT || 3001;

// set up routes; request, response
// set up html routes(index.html & note.html)
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

// route get path
app.get('/', (req, res) => {
    // console.log('here');
    // res.status(500).send('hi');
    // res.json({ message: "Error" })
    // res.send('hi'); 
    // send is good for testing purposes
})

// to make the server run
app.listen(3000)
console.log("server is now listening on port$");

// app.listen(PORT, () => {
//     console.log(`Server is now listening on port${PORT}`);
// });