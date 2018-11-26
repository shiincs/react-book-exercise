import React from 'react'
import styles from './TodoInput.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

// Functional Component
const TodoInput = ({value, onChange, onInsert}) => {

  // Enter 키가 눌리면 onInsert() 메소드를 실행한다.
  const handleKeyPress = (e) => {
    e.key === 'Enter' && onInsert()
  }

  return (
    <div className = {cx('todo-input')}>
      <input onChange = {onChange} value = {value} onKeyPress = {handleKeyPress} />
      <div className = {cx('add-button')} onClick = {onInsert} >추가</div>
    </div>
  )
}

export default TodoInput