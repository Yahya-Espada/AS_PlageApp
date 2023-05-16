const express = require('express');
const plageController = require('../Controllers/plageController');
const { createPlage, findPlages, findPlagesById, updatePlageById, deletePlageById } = plageController;
const router = express.Router();

// Route to create a new Plage
router.post('/', createPlage);

// Route to get all Plages
router.get('/', findPlages);

// Route to get a specific Plage by ID
router.get('/:id', findPlagesById);

// Route to update a specific Plage by ID
router.put('/:id', updatePlageById);

// Route to delete a specific Plage by ID
router.delete('/:id', deletePlageById);

module.exports = router;
