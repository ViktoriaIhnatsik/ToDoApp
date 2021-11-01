const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');


// get all items
router.get('/', async(req, res) => {
  const todos = await Todo.find({});
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: {
      todo: todos,
    },
  });
});

//get specific item
router.get('/:id', async(req, res) => {
  const todo = await Todo.findOne({_id: req.params.id});
  if(!todo){
    console.error('No found')
  };
  res.status(200).json({
    status: "success",
    data: {
      todo: todo,
    },
  });
});

// create ny item
router.post('/', async(req, res) => {
  const {title, content} = req.body;
  const todo = {title, content};
  const newTodo = await Todo.create(todo);
  res.status(200).json({
    status: "success",
    data: {
      todo: newTodo,
    },
  });
});

// update item
router.post('/:id', async(req, res) => {
 const updatedTodo = await Todo.finByIdAndUpdate(
   {_id: req.params.id},
   req.body
   );
   res.status(200).json({
    status: "success",
    data: {
      todo: updatedTodo,
    },
  });
});

// delete item
router.delete('/:id', async(req, res) => {
  const todo = await Todo.findOneAndDelete({_id: req.params.id});
   if(!todo){
    console.error('No found')
  };
  res.status(204).json({
    status: "success",
    data: {
      todo: null,
    },
  });
});

module.exports = router;
