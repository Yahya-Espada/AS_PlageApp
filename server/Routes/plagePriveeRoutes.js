const express = require('express');
const plagePriveeController = require('../Controllers/plagePriveeController');
const { createPlagePrivee, findPlagesPrivees, findPlagePriveeById, updatePlagePriveeById, deletePlagePriveeById } = plagePriveeController;
const router = express.Router();

// Route to create a new Plage privee
router.post('/', createPlagePrivee);

// Route to get all Plages privees
router.get('/', findPlagesPrivees);

// Route to get a specific Plage privee by ID
router.get('/:id', findPlagePriveeById);

// Route to update a specific Plage privee by ID
router.put('/:id', updatePlagePriveeById);

// Route to delete a specific Plage privee by ID
router.delete('/:id', deletePlagePriveeById);

module.exports = router;
