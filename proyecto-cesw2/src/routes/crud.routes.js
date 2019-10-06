const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

//read
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);

});

//read one
router.get('/:id', async(req, res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

//create
router.post('/', async (req, res) => {
    const { tittle, description } = req.body;
    const task = new Task({ tittle, description });
    await task.save();
    console.log(task);
    res.status(200).json({ status: 'task saved' });
})

//update
router.put('/:id', async (req, res) => {
    const { tittle, description } = req.body;
    const newTask = { tittle, description };
    console.log(req.params.id);
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({ status: 'Task update' });
});

//delete
router.delete('/:id', async (req, res) => {
   await Task.findByIdAndRemove(req.params.id);
   res.json({status: 'Task deleted'});
})
module.exports = router;