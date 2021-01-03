import React from "react"

function EditTodo () {

  return (
    <div id="edit-page">
      <h1>Edit Todo</h1>
      <div className=""></div>
      <form action="" id="form-editTodo">
        <div className="form-group" >
          <label for="title">Title</label>
          <br/>
          <input type="text" name="title" id="title-edit" className="form-control"/><br/>
        </div>
        <div className="form-group">
          <label for="description">Description:</label><br/>
          <textarea name="description" id="description-edit" cols="30" rows="5" className="form-control"></textarea><br/>
        </div>
        <div className="form-group">
          <label for="due_date">Due Date:</label><br/>
          <input type="date" name="due_date" id="due_date-edit"/><br/>
        </div>
      
        <button type="submit" className="btn btn-primary">Edit</button>
      </form>
    </div>
  )
}

export default EditTodo