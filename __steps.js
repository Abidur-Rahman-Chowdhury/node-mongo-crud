/*
* 1. Create a node server with 5 steps
*1.1 create folder 
*1.2 npm init 
*1.3 npm i express cors mongobd
*1.4 script-dev: nodemon index.js
*1.5 create index.js
*1.6 use 5 steps to create a node server
 -------------------------------
  create atlas account 
 -------------------
 1. sign up google access
 2. create cluster 
 3. Create user dbuser and password
 4. network access ---> ip: address allow all
 5. database > connect > code copy 

 ------------------------
 CRUD Operation
 -------------
 1. node mongodb CRUD >Fundamentels
 2. create async run function
 ----------------------------
 Integrate sending data from client to server
 ----------------------------------------------
 1. Client Side: create form
 2. onSubmit get form data and create user object
 3. on Server: create user POST method to receive data on backend 
 4. on client side: set fetch with POST, headers,body
 5. make sure you return a json from the POST API
 ----------------------------------------
 Load data and show on client side
 ------------------------------------
 1. create a get api;
 2. create a query object
 3.collection.find(query)
 4.cursor.toArray()
 5.return the result
 6. from client useEffect and display users like you have done before

 */