import TodoItem from "./TodoItem"

const TodoItems =({todoItems, onDeleteClick})=>{
  return(
    <div className='item-container'>
        {todoItems.map(item =>
        <TodoItem key={item.name} todoname={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>)
        }
    </div>
  )
}

export default TodoItems