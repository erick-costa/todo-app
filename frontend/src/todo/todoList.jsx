import React from "react"
import IconButton from "../template/iconButton"

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || []

    return list.map((task) => (
      <tr key={task._id}>
        <td className={task.done ? "markedAsDone" : ""}>{task.description}</td>
        <td>
          <IconButton
            hide={task.done}
            theme="success"
            icon="check"
            onClick={() => props.handleMarkAsDone(task)}
          />
          <IconButton
            hide={!task.done}
            theme="warning"
            icon="undo"
            onClick={() => props.handleMarkAsPending(task)}
          />
          <IconButton
            hide={!task.done}
            theme="danger"
            icon="trash"
            onClick={() => props.handleRemove(task)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

export default TodoList
