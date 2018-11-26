import React, { Component } from 'react'
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput'
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 공부하기', done: false},
      {id: 1, text: '컴포넌트 스타일링 해보기', done: false}
    ]
  }

  handleChange = (e) => {
    const input = e.target.value
    this.setState({
      input
    })
  }

  handleInsert = () => {
    const {todos, input} = this.state
    const id = this.state.todos[this.state.todos.length -1].id
    const newTodo = {
      id: id + 1,
      text: input,
      done: false
    }
    this.setState({
      todos: [...todos, newTodo]
    })
  }

  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index+1, todos.length)
      ]
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    })
  }

  render() {
    return (
      <PageTemplate>
        <TodoInput onChange = {this.handleChange} value = {this.state.input} onInsert = {this.handleInsert} />
        <TodoList 
          todos = {this.state.todos} 
          onToggle = {(id) => this.handleToggle(id)}
          onRemove = {(id) => this.handleRemove(id)}
        />
      </PageTemplate>
    )
  }
}

export default App