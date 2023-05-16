const db = require('../Models');

// Function to create a new plage publique
const createPlagePublique = async (req, res) => {
  try {
    const plagePublique = await db.plage_publique.create(req.body);
    res.status(201).json(plagePublique);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find all plages publiques
const findPlagesPubliques = async (req, res) => {
  try {
    const plagesPubliques = await db.plage_publique.findAll();
    res.status(200).json(plagesPubliques);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to find a specific plage publique by ID
const findPlagePubliqueById = async (req, res) => {
  try {
    const plagePublique = await db.plage_publique.findByPk(req.params.id);
    if (plagePublique) {
      res.status(200).json(plagePublique);
    } else {
      res.status(404).json({ error: 'Plage publique not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to update a specific plage publique by ID
const updatePlagePubliqueById = async (req, res) => {
  try {
    const plagePublique = await db.plage_publique.findByPk(req.params.id);
    if (plagePublique) {
      await plagePublique.update(req.body);
      res.status(200).json(plagePublique);
    } else {
      res.status(404).json({ error: 'Plage publique not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to delete a specific plage publique by ID
const deletePlagePubliqueById = async (req, res) => {
  try {
    const plagePublique = await db.plage_publique.findByPk(req.params.id);
    if (plagePublique) {
      await plagePublique.destroy();
      res.status(200).json({ message: 'Plage publique deleted successfully' });
    } else {
      res.status(404).json({ error: 'Plage publique not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { 
    createPlagePublique, 
    findPlagesPubliques, 
    findPlagePubliqueById, 
    updatePlagePubliqueById, 
    deletePlagePubliqueById 
};
