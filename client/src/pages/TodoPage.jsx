import React, { useState, useEffect} from "react";
import "../App.css";
import TodoComponent from "../components/TodoComponent";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
  }, []);

  function getTodos() {
    const url = "http://localhost:5000/todo/";
    fetch(url)
    .then(res => res.json())
    .then(data => setTodos(data))
  };
 

  return (
    <div className="container">
      <h3 className="text-center">Add todo</h3>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add title..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary">
          Add
        </button>
      </form>

      <div className="row">
        {todos.map(item => { 
            return <TodoComponent key={item.id} todo={item} />;
          })}
      </div>
    </div>
  );
}
