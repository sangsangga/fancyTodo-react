import React from "react"
import AddTodo from "./AddTodo"
import EditTodo from "./EditTodo"
import TableTodo from "./TableTodo"

function MainPage () {
  const [todos, setTodos] = React.useState([])

  function delTodo (id) {
    fetch("http://localhost:3000/todos/" + id, {
      method:"DELETE",
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        fetchTodo()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function fetchTodo () {
    fetch("http://localhost:3000/todos", {
      method:"GET",
      headers: {
        access_token:localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(result => {
        setTodos(result[0])
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchTodo()
  },[])
  return (
      <div id="loggedIn-page">
        <AddTodo fetchTodo={fetchTodo}/>
        <h1 style={{marginTop: "50px"}}>Your Todo</h1>
        <div id='todos'>
          <TableTodo delTodo={delTodo} todo={todos}/>
        </div>

        <h1 style={{marginTop: "50px"}}>Holidays Date</h1>
        <div id='holidays'>
        </div>
        <EditTodo/>
      </div>
  )
}

export default MainPage