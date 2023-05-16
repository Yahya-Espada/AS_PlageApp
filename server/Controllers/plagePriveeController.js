const db = require('../Models');

// Function to create a new plage privee
const createPlagePrivee = async (req, res) => {
  try {
    const plagePrivee = await db.plage_privee.create(req.body);
    res.status(201).json(plagePrivee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find all plages privees
const findPlagesPrivees = async (req, res) => {
  try {
    const plagesPrivees = await db.plage_privee.findAll();
    res.status(200).json(plagesPrivees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find a specific plage privee by ID
const findPlagePriveeById = async (req, res) => {
  try {
    const plagePrivee = await db.plage_privee.findByPk(req.params.id);
    if (plagePrivee) {
      res.status(200).json(plagePrivee);
    } else {
      res.status(404).json({ error: 'Plage privee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to update a specific plage privee by ID
const updatePlagePriveeById = async (req, res) => {
  try {
    const plagePrivee = await db.plage_privee.findByPk(req.params.id);
    if (plagePrivee) {
      await plagePrivee.update(req.body);
      res.status(200).json(plagePrivee);
    } else {
      res.status(404).json({ error: 'Plage privee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to delete a specific plage privee by ID
const deletePlagePriveeById = async (req, res) => {
  try {
    const plagePrivee = await db.plage_privee.findByPk(req.params.id);
    if (plagePrivee) {
      await plagePrivee.destroy();
      res.status(200).json({ message: 'Plage privee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Plage privee not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { 
    createPlagePrivee, 
    findPlagesPrivees, 
    findPlagePriveeById, 
    updatePlagePriveeById, 
    deletePlagePriveeById 
};
