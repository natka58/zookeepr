  
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// parse incoming JSON data
app.use(express.json());



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});