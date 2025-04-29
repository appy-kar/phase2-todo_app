import TodoItem from "./TodoItem"

const TodoItems =({todoItems})=>{
  return(
    <div className='item-container'>
        {todoItems.map(item =>
        <TodoItem key={item.name} todoname={item.name} todoDate={item.date} ></TodoItem>)
        }
    </div>
  )
}

export default TodoItems