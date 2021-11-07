import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "../App.css";

export default function TodoComponent({ todo }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteTodo = (id) => {
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(window.location.reload());
  };

  return (
    <div className="col-md-3 border p-3 m-5">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <p>Last updated:{todo.updatedAt}</p>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-outline-warning btn-sm m-2"
          onClick={openModal}
        >
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

      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <p>Last updated:{todo.updatedAt}</p>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => deleteTodo(todo._id)}
          >
            Delete
          </button>
        </Modal>
      </div>
    </div>
  );
}
