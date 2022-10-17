import React from "react";

const TaskForm = (props) => {
  const addTask = props.addTask;
  const handleTaskChange = props.handleTaskChange;
  const newTask = props.newTask;

  return (
    <div>
      <h3 className="text-3xl">Add new task</h3>
      <form onSubmit={addTask}>
        <div>
          Task name: <input value={newTask} onChange={handleTaskChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
