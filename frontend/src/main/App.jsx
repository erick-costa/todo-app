import React from "react"
import Todo from "../todo/todo"
import About from "../about/about"

require("bootstrap/dist/css/bootstrap.min.css")
require("font-awesome/css/font-awesome.min.css")

const App = (props) => (
  <div className="container">
    <Todo />
    <About />
  </div>
)
export default App
