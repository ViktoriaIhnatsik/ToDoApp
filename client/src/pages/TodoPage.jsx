import React, { useState, useEffect } from "react";
import "../App.css";

export default function TodoPage() {
  const [todos, setTodos] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const url = "http://localhost:5000/todo/";

  useEffect(() => {}, []);

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
        <div className="col-md-4 border p-3 m-4">
          <h3>Title</h3>
          <p>Content</p>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-warning btn-sm m-2"
            >
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
