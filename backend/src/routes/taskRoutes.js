const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// toadas las tareas
router.get('/task', taskController.getTasks);
// obtener una tarea
router.get('/task/:id', taskController.getTask);
// crear tarea
router.post('/task', taskController.createTask);
// editar tarea
router.put('/task/:id', taskController.editTask);
// eliminar una tarea
router.delete('/task/:id', taskController.deleteTask);


module.exports = router;