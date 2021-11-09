import React from "react";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%",
    padding: "30px",
  },
};

export default function TodoComponent({ todo }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const editTodo = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/todo/${todo._id}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ editedTitle, editedContent }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(window.location.reload());
  };

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
      <p className="fst-italic text-end mt-5 text-secondary">
        Updated: {new Date(todo.updatedAt).toDateString()}
      </p>
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form className="form" onSubmit={editTodo}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                defaultValue={todo.title}
                onChange={(e) => {
                  setEditedTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder={todo.content}
                onChange={(e) => {
                  setEditedContent(e.target.value);
                }}
              />
            </div>
            <p className="fst-italic text-end mt-1 text-secondary">
              Updated: {new Date(todo.updatedAt).toDateString()}
            </p>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm "
              onClick={closeModal}
            >
              Close
            </button>
            <button
              className="btn btn-outline-success btn-sm m-2"
              type="submit"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteTodo(todo._id)}
            >
              Delete
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}
