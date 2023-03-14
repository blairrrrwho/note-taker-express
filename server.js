// create express server
const express = require('express');
//  to set up the actual server
const app = express();

const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

// set up routes; request, response -- use routes folder
const apiRoutes = require('./routes/apiRoutes/apiNotesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// set up data parsing
app.use(express.json()); //for parsing incoming json data
app.use(express.urlencoded({extened: true})); // for parsing incoming string/array data
app.use(express.static('public'));


// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/notes.html'));
//     // res.send('yo man');
//     // console.log(res.send);
//     // console.log(req.send);
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/notes.html'));
// })


// to make the server run
app.listen(PORT, () => {
    console.log(`Server is now listening on Port ${PORT}`);
});