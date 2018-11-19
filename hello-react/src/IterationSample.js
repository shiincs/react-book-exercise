import React, { Component } from 'react'

export default class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  }

  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })  
  }

  handleRemove = (index) => {
    const {names} = this.state
    this.setState({
      // names 배열의 요소들을 spread operator로 꺼낸 뒤 0부터 index 전까지 slice하고, 
      // index+1 번째부터 배열의 마지막 요소까지 slice한다.
      // names: [
      //   ...names.slice(0, index),
      //   ...names.slice(index+1, names.length)
      // ]

      // names 배열에서 클릭된 요소의 index와 같지 않은 요소들만 filtering 한다.
      names: names.filter((item, idx) => idx !== index)
    })
  }

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li 
        key = {index}
        onDoubleClick = {() => this.handleRemove(index)}
      >{name}</li>
    ))
    return (
      <div>
        <input 
          type="text"
          value = {this.state.name}
          onChange = {e => this.handleChange(e)}
        />
        <button onClick = {() => this.handleInsert()}>추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}
