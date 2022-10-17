import React from "react";

import Task from "./Task.jsx";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl p-4">Task list</h1>
        <div>
          {tasks.map((task) => (
            <Task key="task.id" task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
