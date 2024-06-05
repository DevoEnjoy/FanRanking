const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/your-db');

app.use(express.json());
app.use(express.static('client'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});