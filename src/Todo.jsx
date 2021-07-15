import React from "react";

const Todo = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div className='todo-list'>
      {tasks.map((task) => (
        <div className='task-list' key={task.id}>
          <div className='task-item'>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => completeTask(task.id)}
            />
            <div className='item-name'>{task.name}</div>
          </div>
          <span className='delete' onClick={() => deleteTask(task.id)}>
            &#10006;
          </span>
        </div>
      ))}
    </div>
  );
};

export default Todo;
