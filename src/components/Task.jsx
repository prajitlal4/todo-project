import React from "react";

import { useState } from "react";

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  const handleEditClick = () => {
    if (editing === false) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div className="flex pb-2">
      <input type="checkbox" defaultChecked={task.completed} />
      <input
        readOnly={editing}
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button onClick={handleEditClick} className="border bg-gray-400">
        Edit
      </button>
      <button className="border bg-red-500">Delete</button>
    </div>
  );
};

export default Task;
