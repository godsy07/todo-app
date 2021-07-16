import React from "react";

const AddToDo = ({ toggleAddToDo, status }) => {
  return (
    <div className='add-todo'>
      <button
        onClick={toggleAddToDo}
        className={status ? "close-todo-button" : "add-todo-button"}
      >
        {status ? "Close" : "Add ToDo"}
      </button>
    </div>
  );
};

export default AddToDo;
