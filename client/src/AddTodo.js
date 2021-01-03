import React from "react"

function AddTodo (props) {

  function postTodo (event) {
    event.preventDefault()
    const formData = event.target
    const {title} = formData
    const {description} = formData
    const {due_date} = formData

    const data = {
      title:title.value,
      description: description.value,
      due_date:due_date.value
    }

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        access_token:localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        console.log("success")
        props.fetchTodo()
      })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <React.Fragment>
      <h1>Add Todo</h1>
      <form action="" id="form-addTodo" onSubmit={postTodo}>
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