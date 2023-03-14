// create express server
const express = require('express');
//  to set up the actual server
const app = express();

const PORT = process.env.PORT || 3001;

// set up routes; request, response -- use routes folder
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// set up data parsing
app.use(express.json()); //for parsing incoming json data
app.use(express.urlencoded({extended: true})); // for parsing incoming string/array data
app.use(express.static('public'));


// use apiRoutes
app.use('/api', apiRoutes);
// use htmlRoutes
app.use('/', htmlRoutes);



// to make the server run
app.listen(PORT, () => {
    console.log(`Server is now listening on Port ${PORT}. How are you?!`);
});