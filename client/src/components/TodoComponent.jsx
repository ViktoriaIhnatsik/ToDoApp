import React from "react";

 const deleteTodo = (id) => {
   const url = `http://localhost:5000/todo/${id}`;
   fetch(url, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
   })
   .then(window.location.reload())
 };


export default function TodoComponent({ todo }) {
  return (
    <div className="col-md-3 border p-3 m-5">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <p>Last updated:{todo.updatedAt}</p>
      <div className="text-end">
        <button type="button" className="btn btn-outline-warning btn-sm m-2">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
         onClick={() => deleteTodo(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
