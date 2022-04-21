const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const middlewareWrapper = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware cors for using cross origin express.json() for parse body
app.use(cors());
app.use(express.json());

// user:  dbuser1
// password : rvgdtZRLAZTaUfMs


// make connection with mongodb database
const uri = "mongodb+srv://dbuser1:rvgdtZRLAZTaUfMs@cluster0.ntup3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    await client.connect();
    const userCollection = client.db("foodExpress").collection('user');
    
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running my node CRUD Server');
})

app.listen(port, () => {
    console.log('CRUD server is running', port);
})