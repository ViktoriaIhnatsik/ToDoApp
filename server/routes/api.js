const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');


// get all items
router.get('/', async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
  });

//get specific item
router.get('/:id', async (req, res) => {
  const todo = await Todo.findOne({_id: req.params.id});
  res.status(200).json(todo);
});

// create ny item
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newTodo = await Todo.create({
    title,
    content
  });
  res.status(200).json(newTodo);
});

// update item
router.post('/:id', async (req, res) => {
 const {  editedTitle, editedContent } = req.body;
 const id = req.params.id;
 const updatedTodo = await Todo.findByIdAndUpdate( id,{
    title: editedTitle,
    content: editedContent,
 });
   res.status(200).json(updatedTodo);
});

// delete item
router.delete('/:id', async (req, res) => {
  const todo = await Todo.findOneAndDelete({_id: req.params.id});
  res.status(204).json(null)
});

module.exports = router;
