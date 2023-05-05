const router = require('express').Router();
const fs = require('fs');
const crypto = require('crypto');

router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading note data');
            return;
        }
        console.log(data);
        res.json(JSON.parse(data));
    });
});

router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving note data');
        }

        const notes = JSON.parse(data);

        // Generate a unique ID
        const id = crypto.randomBytes(16).toString('hex');

        // Create a new note object
        const newNote = {
            id: id,
            title: req.body.title,
            text: req.body.text,
        };

        // Add the new note object to the notes array
        notes.push(newNote);

        // Write the entire notes array to the db.json file
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error writing note data');
                return;
            }

            console.log('Note saved successfully');
            res.send('Note saved successfully');
        });
    });
});

module.exports = router;