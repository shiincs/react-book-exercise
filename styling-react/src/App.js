import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Button from './components/Button'

console.log(styles)
// 함수 객체의 bind 메소드를 호출하면,
// 메소드의 인수로 넘겨준 값(styles)이
// this가 되는 새로운 함수(cx)를 반환한다.
const cx = classNames.bind(styles)

class App extends Component {

  render() {
    const isBlue = true;

    return (
      <React.Fragment>
        <div className={cx('box', {
          blue: isBlue
        })}>
          <div className = {cx('box-inside')} />
        </div>
        <div>
          <Button>버튼</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
