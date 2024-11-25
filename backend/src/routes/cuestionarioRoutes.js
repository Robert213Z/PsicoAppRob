const express = require('express');
const { createCuestionario, getCuestionarios, updateQuestionnaire,
    deleteQuestionnaire,
    searchQuestionnaires } = require('../controllers/cuestionarioController');
const router = express.Router();

router.post('/', createCuestionario);
router.get('/', getCuestionarios);
// Ruta para editar un cuestionario
router.put('/:id', updateQuestionnaire);

// Ruta para eliminar un cuestionario
router.delete('/:id', deleteQuestionnaire);

// Ruta para buscar cuestionarios
router.get('/search', searchQuestionnaires);

module.exports = router;
