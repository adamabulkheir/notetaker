const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/notes', function(req, res) {
    res.sendFile(__dirname + '/develop/public/notes.html');
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/develop/public/index.html');
});

app.listen(3001, function() {
    console.log('port 3001');
});