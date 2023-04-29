const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/notes', function(req, res) {
    res.sendFile(__dirname + '/db/public/notes.html');
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/db/public/index.html');
});

app.listen(3000, function() {
    console.log('port 3000');
});