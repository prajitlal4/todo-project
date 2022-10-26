import React from "react";

import Task from "./Task.jsx";

const TaskList = (props) => {
  const tasks = props.tasks
  const handleTaskList = props.handleTaskList
  const handleTaskToDelete = props.handleTaskToDelete

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl p-4">Task list</h1>
        <div>
          {tasks.map((task) => (
            <Task key="task.id" task={task} handleTaskList={handleTaskList} handleTaskToDelete={handleTaskToDelete}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
