const pool = require('../config/db');

// Crear cuestionario
exports.createCuestionario = async (req, res) => {
  const { titulo, preguntas } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO cuestionario (titulo, preguntas) VALUES ($1, $2) RETURNING *`,
      [titulo, JSON.stringify(preguntas)]
    );
    res.status(201).json({ success: true, cuestionario: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al crear cuestionario' });
  }
};

// Obtener todos los cuestionarios
exports.getCuestionarios = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM cuestionario`);
    res.status(200).json({ success: true, cuestionario: result.rows });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error al obtener cuestionario' });
  }
};

//editar un cuestionario 
exports.updateQuestionnaire = async (req, res) => {
    const { id } = req.params;
    const { titulo, preguntas } = req.body;

    try {
        await pool.query('UPDATE cuestionario SET titulo = $1, preguntas = $2 WHERE id = $3', [titulo, preguntas, id]);
        res.json({ message: 'Cuestionario actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cuestionario' });
    }
};

//eliminar un cuestionario
exports.deleteQuestionnaire = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM cuestionario WHERE id = $1', [id]);
        res.json({ message: 'Cuestionario eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cuestionario' });
    }
};

//buscar un cuestionario
exports.searchQuestionnaires = async (req, res) => {
    const { query } = req.query;

    try {
        const result = await pool.query(
            'SELECT * FROM cuestionario WHERE titulo ILIKE $1',
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar cuestionario' });
    }
};
