const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
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
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection('users');
       

        // GET : fetch or get user / read user
        app.get('/user', async (req, res) => {

            const query = {};

            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users)
        })

        // POST user: add new user 
        app.post('/user',async (req, res) => {
            const newUser = req.body;
            console.log('Adding new user', newUser);

            // set data on mongodb
            const result = await userCollection.insertOne(newUser);
            res.send(result)
        })

        // update user

        app.put('/update/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }
            const result = await userCollection.updateOne(filter, updatedDoc, options)
            res.send(result);
        } )

        // update user

        app.get('/update/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);
        } )

        // delete a user 
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        } )
    } finally {
        
   }
    
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running my node CRUD Server');
})

app.listen(port, () => {
    console.log('CRUD server is running', port);
})