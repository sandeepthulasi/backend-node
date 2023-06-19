const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// API endpoints for customers
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
