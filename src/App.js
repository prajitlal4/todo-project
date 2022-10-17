import { useState } from 'react'

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Do some coding", completed: false },
    { id: 2, name: "Take out the trash", completed: false}
  ])
  const [newTask, setNewTask] = useState('')

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    setTasks(tasks.concat({id: tasks.length+1, name: newTask, completed: false}))
    setNewTask('')
  }

  return (
    <div>
      <h1 className="text-3xl">To do app</h1>
      <p>Add todo item</p>
      <form onSubmit={addTask}>
        <div>
          Task name: <input value={newTask} onChange={handleTaskChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h1 className="text-3xl">Task list</h1>
      <div>
        {tasks.map(task =>
          <p key="task.id">{task.name}</p> )}
      </div>
    </div>
  );
}

export default App;
