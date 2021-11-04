import React from "react";
import { useState } from "react";

export default function TodoFormComponent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/todo/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Add title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          className="form-control"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => window.location.reload(false)}
        type="submit"
        className="btn btn-secondary"
      >
        Add
      </button>
    </form>
  );
}
