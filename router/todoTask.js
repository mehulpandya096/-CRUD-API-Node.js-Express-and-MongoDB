const express = require('express');
const router = express.Router()
const {  getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controlers/taskControler')

router.route('/api/v1/tasks').get(getAllTasks).post(createTask);
router.route('/api/v1/tasks/:id').get(getTask).patch(updateTask).delete(deleteTask);

// way long method to create a task
// router.get('/api/v1/tasks', (req, ses) => {
//     res.send("this is a test for router all items")
// });

module.exports = router;

