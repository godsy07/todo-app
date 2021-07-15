import React from "react";

const AddToDo = ({ toggleAddToDo, value }) => {
  return (
    <div className='add-todo'>
      <button onClick={toggleAddToDo} className='add-todo-button'>
        {value}
      </button>
    </div>
  );
};

export default AddToDo;
