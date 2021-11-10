const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');


// get all items
router.get('/', async (req, res) => {
  try {
  const todos = await Todo.find({});
  res.status(200).json(todos);
  }
  catch(err) {
    res.status(400).json({message: err.message});
  }
  });

//get specific item
router.get('/:id', async (req, res) => {
  try {
  const todo = await Todo.findOne({_id: req.params.id});
  res.status(200).json(todo);
  }
  catch(err) {
    res.status(400).json({message: err.message});
  }
});

// create ny item
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
  const newTodo = await Todo.create({
    title,
    content
  });
  res.status(200).json(newTodo);
  }
   catch(err) {
    res.status(400).json({message: err.message});
  }

});

// update item
router.post('/:id', async (req, res) => {
 const {  editedTitle, editedContent } = req.body;
 const id = req.params.id;
 try {
 const updatedTodo = await Todo.findByIdAndUpdate( id,{
    title: editedTitle,
    content: editedContent,
 }, { new: true });
   res.status(200).json(updatedTodo);
}
catch(err) {
    res.status(400).json({message: err.message});
  }

});

// delete item
router.delete('/:id', async (req, res) => {
  try {
  const todo = await Todo.findOneAndDelete({_id: req.params.id});
  res.status(204).json(null)
  }
  catch(err) {
    res.status(400).json({message: err.message});
  }
});

module.exports = router;
