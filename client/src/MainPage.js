import React from "react"
import AddTodo from "./AddTodo"
import EditTodo from "./EditTodo"

function MainPage () {
  const [todos, setTodo] = React.useState([])

  // React.useEffect(() => {
  //   fetch("http://localhost:3000/todos",{
  //     method:"GET",
  //     headers: localStorage.getItem('access_token')
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       setTodo(result)
  //     })
  // })
  return (
      <div id="loggedIn-page">
        <AddTodo/>
        <h1 style={{marginTop: "50px"}}>Your Todo</h1>
        <div id='todos'>
          {todos}
        </div>

        <h1 style={{marginTop: "50px"}}>Holidays Date</h1>
        <div id='holidays'>
        </div>
        <EditTodo/>
      </div>
  )
}

export default MainPage