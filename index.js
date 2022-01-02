const port = process.env.port || 8000;
const express = require('express');
const app = express();

app.get('/', function(req, res){
    return res.send('<h1>Hello World</h1>')
})

app.listen(port, function(err){
    if (err){
        return console.log('error', err);
    }

    return console.log('Express server is up and is running on port:', port);
})