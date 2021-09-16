const router = require('express').Router();
const notesFunctions = require('../../public/assets/js/index.js');
const db = require('../../db/db.json')

//GET /api/notes
router.get('/notes', (req, res) => {
    //read the db.json file and 
    //return all saved notes as JSON.
    //probably link this route with the function that renders all notes
});

// POST /api/notes
router.post('/notes', (req, res) => {
    /*
    should receive a new note to save on the 
    request body, add it to the db.json file, 
    I believe it should add the note when save button is clicked
    and then return the new note to the client.
    */

    //this will post to the db, so db must be required
});

// DELETE /notes/:id
router.delete('/:id', (req, res) => {
    /*
    receive a query parameter containing the id 
    of a note to delete. In order to delete a note, 
    you'll need to read all notes from the db.json file, 
    remove the note with the given id property, and then 
    rewrite the notes to the db.json file
    */
});

module.exports = router;