import React from "react";
import { useState } from "react";

export default function TodoFormComponent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = `https://td-app-mern.herokuapp.com/todo`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    }).then(window.location.reload());
  };

  return (
    <form className="form shadow rounded p-5 m-5 " onSubmit={handleOnSubmit}>
      <div className="mb-3 ">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Add title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          className="form-control"
          placeholder="Add content..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Add
      </button>
    </form>
  );
}
