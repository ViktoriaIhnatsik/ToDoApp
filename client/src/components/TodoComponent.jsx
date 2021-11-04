import React from "react";

export default function TodoComponent({todo}) {
  return (
    <div className="col-md-3 border p-3 m-5" >
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="text-end">
        <button type="button" className="btn btn-outline-warning btn-sm m-2">
          Edit
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
}