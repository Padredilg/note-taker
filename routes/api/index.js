const router = require('express').Router();
const path = require("path");
const fs = require("fs");
const { notesDb } = require('../../db/db.json');
const uniqid = require('uniqid');

//GET /api/notes
router.get('/notes', (req, res) => {
    res.json(notesDb);
});

// POST /api/notes
router.post('/notes', (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()//use uniqid to generate id
    }
    //notesDb in here is an array that holds the value of db.json
    //without altering it
    notesDb.push(note);

    //rewrite db.json with the updated notesDb
    fs.writeFileSync(
        //path to the db.json file that will be rewritten
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notesDb }, null, 2)
    );

    res.json(note);
});

// DELETE /notes/:id
router.delete('/notes/:id', (req, res) => {
    //perhaps get the id in a variable
    const id = req.params.id;

    let newDb = [];

    //write loop to copy each element of notesDb in new array
    //dont copy/push if id is the same
    for(let i=0; i<notesDb.length; i++){
        if(id !== notesDb[i].id){
            newDb.push(notesDb[i]);
        }
    }

    //rewrite notesDb
    fs.writeFileSync(
        //path to the db.json file that will be rewritten
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notesDb: newDb }, null, 2)
    );

    res.json(notesDb);
    console.log(newDb);
});

module.exports = router;