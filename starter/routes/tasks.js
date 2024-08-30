const express = require('express');
const router = express.Router();
const { 
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')
router.route('/').get(getTask).post(createTask)
router.route('/:id').post(updateTask).delete(deleteTask)


module.exports = router;