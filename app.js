const express = require('express');
const app = express();
const port = 3000;

let users = []; // Stores user json objects
let id = 0; // Counts current id

// Returns message "hello world"
app.get('/helloworld', (req, res) => {
    res.send('hello world');
})

// Returns json object containing "hello world"
app.get('/helloworldjson', (req, res) => { 
    res.send({"helloworldjson":"hello world"});
})

// Creates a new user with the given username and a unique ID
// Stores into users
app.post('/user', (req, res) => {
    let user = new Object();
    console.log(req.body);
    if(req.body === "")
    {
        res.status(400);
        res.send();
    }
    else
    {
    //user.username = req.body.json();
    //user.id = id;
    id++;
    users.push(user);
    res.status(200);
    res.send();
    }
})

// Returns a json object of a user with the given ID
app.get('/user', (req, res) => {
    let user = null; // User to be returned

    // Check matching id
    if(users.length > 0){
        users.forEach(element => {
            if(element.id == res){
                user = element;
            }
        })
    }
    
    // Return
    if(user != null)
    {
        res.send(user);
    }else{
        res.send("No user match");
    }
})
 
app.listen(port, () => { 
    console.log('Example app listening at http://localhost:' + port);
})