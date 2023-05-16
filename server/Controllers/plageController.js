const db = require('../Models');

// Function to create a new plage
const createPlage = async (req, res) => {
  try {
    const plage = await db.plage.create(req.body);
    res.status(201).json(plage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find all plages
const findPlages = async (req, res) => {
  try {
    const plages = await db.plage.findAll();
    res.status(200).json(plages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find a specific plage by ID
const findPlagesById = async (req, res) => {
  try {
    const plage = await db.plage.findByPk(req.params.id);
    if (plage) {
      res.status(200).json(plage);
    } else {
      res.status(404).json({ error: 'Plage not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to update a specific plage by ID
const updatePlageById = async (req, res) => {
  try {
    const plage = await db.plage.findByPk(req.params.id);
    if (plage) {
      await plage.update(req.body);
      res.status(200).json(plage);
    } else {
      res.status(404).json({ error: 'Plage not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to delete a specific plage by ID
const deletePlageById = async (req, res) => {
  try {
    const plage = await db.plage.findByPk(req.params.id);
    if (plage) {
      await plage.destroy();
      res.status(200).json({ message: 'Plage deleted successfully' });
    } else {
      res.status(404).json({ error: 'Plage not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { 
    createPlage,
    findPlages,
    findPlagesById, 
    updatePlageById, 
    deletePlageById 
};
