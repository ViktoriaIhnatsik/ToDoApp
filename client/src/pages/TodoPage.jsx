import React, { useState, useEffect } from "react";
import TodoComponent from "../components/TodoComponent";
import TodoFormComponent from "../components/TodoFormComponent";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    const url = `https://td-app-mern.herokuapp.com/todo`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }

  return (
    <div className="container">
      <h3 className="text-center">Add todo</h3>

      <TodoFormComponent />

      <div className="row">
        {todos ? (
          todos.map((item, key) => {
            return <TodoComponent key={key} todo={item} />;
          })
        ) : (
          <h3>Loading ...</h3>
        )}
      </div>
    </div>
  );
}
