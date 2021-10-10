var express = require('express');
var router = express.Router();


let todoItems = [
  {
    id: 1,
    title: 'First item',
    body: 'Content of first item.'
  },
  {
    id: 2,
    title: 'Second item',
    body: 'Content of second item.'
  },
  {
    id: 3,
    title: 'Third item',
    body: 'Content of third item.'
  }
]

// get all items
router.get('/api/items', function(req, res, next) {
  res.json(todoItems);
});

//get specific item
router.get('/api/items/:id', function(req, res, next) {

});

// create ny item
router.post('/api/items', function(req, res, next) {
 todoItems.push(req.body);
 res.json(todoItems);
});

// update item
router.post('/api/items/:id', function(req, res, next) {
 todoItems.push(req.body);
 res.json(todoItems);
});

// delete item
router.delete('/api/items/:id', function(req, res, next) {
 
});

module.exports = router;
