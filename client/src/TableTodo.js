import React from "react"
import RowTodo from "./RowTodo"


function TableTodo (props) {
  console.log(props.todo);
  const rowTodo = props.todo.map(item => <RowTodo delTodo={props.delTodo} key={item.id} item={item}/>)
  console.log(rowTodo)
  return (
    <table id="table-todos" className="table" >
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Due Date</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>

      {rowTodo}
    </table>
  )
}

export default TableTodo