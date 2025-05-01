const AddTodo = ({onNewItem})=>{
  return(
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6"><input type="text" name="" id="" placeholder="Enter todo Here"/></div>
          <div className="col-4"><input type="date" name="" id="" /></div>
          <div className="col-2">
            <button type="button" className="btn btn-success" onClick={()=>{onNewItem('a','b')}}>ADD</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default AddTodo