const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');


// get all items
router.get('/api', function(req, res, next) {
  res.json(todoItems);
});

//get specific item
router.get('/api/:id', function(req, res, next) {

});

// create ny item
router.post('/add', async(req, res, next) => {
  const {title, content} = req.body;
  const todo = {title, content};
  const newTodo = await Todo.create(todo);
  res.status(201).json({
    status: "success",
    data: {
      todo: newTodo,
    },
  });
});

// update item
router.post('/api/:id', function(req, res, next) {
 todoItems.push(req.body);
 res.json(todoItems);
});

// delete item
router.delete('/api/:id', function(req, res, next) {
 
});

module.exports = router;
