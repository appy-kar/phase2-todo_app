import styles from "./todoItems.module.css"
import { MdOutlineDeleteOutline } from "react-icons/md";


function TodoItem({todoname,todoDate,onDeleteClick}){
  return(
    <>
    <div className="container">
      <div className="row kg-row align-items-center">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={`${styles["btn"]} btn btn-danger`} 
          onClick={()=> onDeleteClick(todoname)}><MdOutlineDeleteOutline /></button>
        </div>
      </div>
    </div>
    </>
  )
} 
export default TodoItem