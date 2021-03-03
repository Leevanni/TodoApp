import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"


class TodoContainer extends React.Component {
  // Declaring state
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };
  
  render() {
    return (
      <>
        <Header/>
        {/* We are passing the todos array from the parent component into the child component as a prop */}
        <TodosList todos={this.state.todos}></TodosList>
      </>
    )
  }
}
export default TodoContainer