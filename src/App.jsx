import { useState } from 'react'
import './App.css'
import AppNmae from './components/AppNmae'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import { WelcomeMessage } from './components/WelcomeMessage'


function App() {

  const initialTodoItems=[

  ]

  const [todoItems, setTodoItems] = useState(initialTodoItems)

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item added ${itemName} Date: ${itemDueDate}`)
    const newTodoItem = [...todoItems, 
      {name: itemName, dueDate: itemDueDate }
    ]
    setTodoItems(newTodoItem);
  }

  const handleDeleteItem = (todoItemName)=>{
    console.log(`Item Deleted: ${todoItemname}`)
  }


  return (
    <>
    <center className='todo-container'>
      <AppNmae/>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
    </>
  )
}

export default App
