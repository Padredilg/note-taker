const router = require('express').Router();
//These endpoints for the server are going 
//to be accessible at the /api/users URL



// GET /api/users/1
router.get('/api/:id', (req, res) => {});

// POST /api/users
router.post('/api/', (req, res) => {});

// PUT /api/users/1
router.put('/api/:id', (req, res) => {});

// DELETE /api/notes/:id
router.delete('/api/:id', (req, res) => {});

module.exports = router;