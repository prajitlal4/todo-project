import React from "react";

import { useState } from "react";
import axios from "axios";

const Task = (props) => {
  const task = props.task;
  const setTasks = props.setTasks;
  const [editing, setEditing] = useState(true);
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

  const handleNewTaskUpload = (event) => {
    event.preventDefault();
    const url = "http://localhost:3005/tasks/";
    const changedTask = { ...task.name, name: taskName };

    axios.put(url + task.id, changedTask).then((response) => {
      handleEditClick();
      setTaskName(changedTask.name);
    });
  };

  const handleDeleteTask = (event) => {
    const url = "http://localhost:3005/tasks/";
    const deletedTask = { ...task.name, name: taskName };

    axios.delete(url + task.id, deletedTask);
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  };

  return (
    <div className="flex pb-2">
      <input type="checkbox" defaultChecked={task.completed} />
      <input
        className={editing ? "" : "border"}
        readOnly={editing}
        value={taskName}
        onChange={handleTaskNameChange}
      />
      {editing ? (
        <button onClick={handleEditClick} className="border bg-gray-400">
          Edit
        </button>
      ) : (
        <button onClick={handleNewTaskUpload} className="border bg-green-600">
          Save
        </button>
      )}
      <button onClick={handleDeleteTask} className="border bg-red-500">
        Delete
      </button>
    </div>
  );
};

export default Task;
