import { Component } from "react"
import axios from "axios"
import PageHeader from "../template/pageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: "", list: [] }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : ""

    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((res) =>
        this.setState({ ...this.state, description, list: res.data })
      )
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description }).then((res) => this.refresh())
  }

  handleRemove(task) {
    axios
      .delete(`${URL}/${task._id}`)
      .then((res) => this.refresh(this.state.description))
  }

  handleMarkAsDone(task) {
    axios.put(`${URL}/${task._id}`, { ...task, done: true }).then((res) => {
      this.refresh(this.state.description)
    })
  }

  handleMarkAsPending(task) {
    axios.put(`${URL}/${task._id}`, { ...task, done: false }).then((res) => {
      this.refresh(this.state.description)
    })
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}
