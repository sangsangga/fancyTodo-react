import React from "react"

function AddTodo () {

  return (
    <React.Fragment>
      <h1>Add Todo</h1>
      <form action="" id="form-addTodo">
        <div className="form-group" >
            <label for="title">Title</label><br/>
            <input type="text" name="title" id="title-input" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="description">Description:</label><br/>
            <textarea name="description" id="description-input" cols="30" rows="5" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <label for="due_date">Due Date:</label><br/>
            <input type="date" name="due_date" id="due_date-input"/>
          </div>
          <button type="submit" className="btn btn-primary">Add todo</button>
      </form>
    </React.Fragment>
  )
}

export default AddTodo