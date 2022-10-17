import React from "react";

const TaskForm = (props) => {
  const addTask = props.addTask;
  const handleTaskChange = props.handleTaskChange;
  const newTask = props.newTask;

  return (
    <div>
      <div className="flex flex-col items-center pt-10">
        <h3 className="text-3xl p-5">Add new task</h3>
        <form className="flex flex-row" onSubmit={addTask}>
          <div>
            Task name:{" "}
            <input
              className="border"
              value={newTask}
              onChange={handleTaskChange}
            />
          </div>
          <div>
            <button className="border" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
