import React from "react"

function RowTodo (props) {

  return (
    <tr scope="row">
      <td>{props.item.title}</td>
      <td>{props.item.description}</td>
      <td>{props.item.due_date}</td>
      <td>{props.item.currStatus}</td>
      <td><button id='edit-btn' className='btn btn-primary'>Edit</button>|
        <button id="delete-btn" onClick={() => props.delTodo(props.item.id)} className='btn btn-danger'>Delete</button>|
        <button id="updateStatus-btn" className='btn btn-success'>Update Progress</button>
      </td>
    </tr>
  )
}

export default RowTodo