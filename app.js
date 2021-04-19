const express = require('express') 
const app = express() 
const port = 3000 

let users = [];
 
app.get('/helloworld', (req, res) => { 
    res.send('hello world') 
})

app.get('/helloworldjson', (req, res) => { 
    res.send({"helloworldjson":"hello world"}) 
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
 
app.listen(port, () => { 
    console.log('Example app listening at http://localhost:' + port) 
})