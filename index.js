const express = require('express');
const cors = require('cors');
const middlewareWrapper = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware cors for using cross origin express.json() for parse body
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running my node CRUD Server');
})

app.listen(port, () => {
    console.log('CRUD server is running', port);
})