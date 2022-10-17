import React from "react";

const Task = ({ task }) => {
  const buttons = [
    { id: 1, type: "Complete", css: "border bg-green-700" },
    { id: 2, type: "Edit", css: "border bg-gray-400" },
    { id: 3, type: "Delete", css: "border bg-red-500" },
  ];

  return (
    <div className="flex">
      <h1>{task.name}</h1>
      {buttons.map((button) => (
        <button className={button.css}>{button.type}</button>
      ))}
    </div>
  );
};

export default Task;
