import './App.css'
import AppNmae from './components/AppNmae'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
function App() {
  const todoItems=
  [{
    name:'Buy milk',
    dueDate:'4/03/2024'
  },
  {
  name:'Wash dish',
  dueDate:'4/03/2024'
  },
]
  return (
    <>
    <center className='todo-container'>
      <AppNmae/>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
    </>
  )
}

export default App
