import React from "react"
import Todo from "../todo/todo"
import About from "../about/about"
import Menu from "../template/menu"

require("bootstrap/dist/css/bootstrap.min.css")
require("font-awesome/css/font-awesome.min.css")

const App = (props) => (
  <div className="container">
    <Menu />
    <Todo />
    <About />
  </div>
)
export default App
