// create express server
const express = require('express');
//  to set up the actual server
const app = express();

const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

// set up routes; request, response -- use routes folder
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// to make the server run
app.listen(PORT, () => {
    console.log(`Server is now listening on Port ${PORT}`);
});