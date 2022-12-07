
const Task = require('../models/taskModels');
const asyncWrapper = require('../middleware/async');
const { createCoustomAPIError } = require('../error/coustom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(201).json({ tasks });

    // try {
    //     const tasks = await Task.find();
    //    res.status(201).json({ tasks }); 
    // res.status(201).json({ tasks, amount: tasks.length });
    //     res.status(201).json({
    //         success: "success", data: {
    //             tasks,
    //             nbHits: tasks.length
    //         }
    //     });
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json({ task });

    // try {
    //     const task = await Task.create(req.body);
    //     res.status(200).json({ task });
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }

})

const getTask = asyncWrapper(async (req, res, next) => {

    // after 
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId })

    if (!task) {
        return next(createCoustomAPIError(`not task with id : ${taskId}`, 404))
        // const error = new Error('Not Found');
        // error.status = 404;
        // return next(error)
        // return res.status(404).json({ msg: `not task with id : ${taskId}` });
    }
    res.status(201).json({ task });
    
    // before 
    // try {
    //     const { id: taskId } = req.params
    //     const task = await Task.findOne({ _id: taskId })
    //     if (!task) {
    //         return res.status(404).json({ msg: `not task with id : ${taskId}` });
    //     }
    //     res.status(201).json({ task });
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }

})

const deleteTask = asyncWrapper(async (req, res) => {

    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return next(createCoustomAPIError(`not task with id : ${taskId}`, 404))
        // return res.status(404).json({ msg: `not task with id : ${taskId}` });
    }
    res.status(200).json({ task: null, status: "success" });

    // try {
    //     const { id: taskId } = req.params;
    //     const task = await Task.findOneAndDelete({ _id: taskId })
    //     if (!task) {
    //         return res.status(404).json({ msg: `not task with id : ${taskId}` });
    //     }
    //      // res.status(200).json({ task });
    //      //res.status(200).send();
    //     res.status(200).json({ task: null, status: "success" });
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }
})

const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCoustomAPIError(`not task with id : ${taskId}`, 404))
        // return res.status(404).json({ msg: `not task with id : ${taskId}` });
    }
    res.status(200).json({ task })

    // try {
    //     const { id: taskId } = req.params;
    //     const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    //         new: true,
    //         runValidators: true
    //     }) 
    // if (!task) {
    //     return res.status(404).json({ msg: `not task with id : ${taskId}` });
    // }
    //     res.status(200).json({ task })
    // } catch (error) {
    //     res.status(500).json({ msg: error.message });
    // }
})

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }