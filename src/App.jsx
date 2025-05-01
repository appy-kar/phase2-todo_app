import './App.css'
import AppNmae from './components/AppNmae'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
function App() {
  const initialTodoItems=
  [{
    name:'Buy milk',
    dueDate:'4/03/2024'
  },
  {
  name:'Wash dish',
  dueDate:'4/03/2024'
  }
]
  const [todoItems, setTodoItems] = ([initialTodoItems])

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item added ${itemName} Date: ${itemDueDate}`)
  }

  return (
    <>
    <center className='todo-container'>
      <AppNmae/>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
    </>
  )
}

export default App
