import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [taskToDelete, setTaskToDelete] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3005/tasks')
      .then(response => {
        setTasks(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .delete('http://localhost:3005/tasks/' + taskToDelete.id)
      .then(response => {
        setTasks(tasks.filter(task => task.id !== taskToDelete.id))
        setTaskToDelete('')
    })
  }, [tasks, taskToDelete.id])

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleTaskToDelete = (taskToDelete) => {
    setTaskToDelete(taskToDelete)
  }

  const addTask = (event) => {
    event.preventDefault()
    const taskObject = {
      id: tasks.length+1,
      name: newTask,
      completed: false,
    }

    axios
      .post('http://localhost:3005/tasks/', taskObject)
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
        <TaskList tasks={tasks} handleTaskList={handleTaskList} handleTaskToDelete={handleTaskToDelete}/>
      </div>
    </div>
  );
}

export default App;
