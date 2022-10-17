import React from "react";

import Task from "./Task.jsx";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1 className="text-3xl">Task list</h1>
      <div>
        {tasks.map((task) => (
          <Task key="task.id" task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
