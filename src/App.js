import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3005/tasks')
      .then(response => {
        setTasks(response.data)
      })
  }, [])

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    const taskObject = {
      id: tasks.length+1,
      name: newTask,
      completed: false,
    }

    axios
      .post('http://localhost:3005/tasks', taskObject)
      .then (response => {
        setTasks(tasks.concat(response.data))
        setNewTask('')
      })
  }

  const handleTaskList = (tasks) => {
    setTasks(tasks)
  }

  return (
    <div>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-5xl">To do app</h1>
        <TaskForm addTask={addTask} handleTaskChange={handleTaskChange} newTask={newTask} />
        <TaskList tasks={tasks} setTasks={handleTaskList}/>
      </div>
    </div>
  );
}

export default App;
