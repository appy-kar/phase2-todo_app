import { useState } from "react"
import { IoMdAdd } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {
  const [addnewItem, setAddnewItem] = useState("")
  const [addnewDate, setAddnewDate] = useState("")

  const handleAddnewItem = (event) => {
    setAddnewItem(event.target.value)
  }

  const handleAddnewDate = (event) => {
    setAddnewDate(event.target.value);
  }

  const handleAddButtonClick = () => {
    onNewItem(addnewItem, addnewDate)
    setAddnewItem("")
    setAddnewDate("")
  }


  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6"><input type="text" name="" id="" placeholder="Enter todo Here" 
          onChange={handleAddnewItem} value={addnewItem}/></div>
          <div className="col-4"><input type="date" name="" id="" onChange={handleAddnewDate} value={addnewDate}/></div>
          <div className="col-2">
            <button type="button" className="btn btn-success" onClick={handleAddButtonClick}><IoMdAdd /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo