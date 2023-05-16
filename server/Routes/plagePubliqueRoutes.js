const express = require('express');
const plagePubliqueController = require('../Controllers/plagePubliqueController');
const {createPlagePublique,findPlagesPubliques,findPlagePubliqueById,updatePlagePubliqueById,deletePlagePubliqueById}= plagePubliqueController;
const router = express.Router();

router.post('/createPlagePublique', createPlagePublique);

router.get('/findPlagesPubliques',findPlagesPubliques);

router.get('/findPlagePubliqueById/:id',findPlagePubliqueById);

router.put('/updatePlagePubliqueById/:id', updatePlagePubliqueById);

router.delete('/deletePlagePubliqueById/:id', deletePlagePubliqueById);

module.exports = router;
