const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("About Express!")
})

// route to match string patterns 
app.get('/ab?cd', (req, res) => {
    res.send('This route matched with acd or abcd')
})

// routes with route parameters 
app.get('/user/:userId', (req, res) =>{
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})