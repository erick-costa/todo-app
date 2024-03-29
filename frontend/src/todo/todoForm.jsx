import React from "react"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"

const TodoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === "Escape") {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Digite uma tarefa"
          onChange={props.handleChange}
          value={props.description}
          onKeyUp={keyHandler}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton theme="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton theme="info" icon="search" onClick={props.handleSearch} />
        <IconButton theme="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  )
}

export default TodoForm
