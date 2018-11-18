import React, { Component } from 'react';
import MyComponent from './MyComponent'
import EventPractice from './EventPractice'
import EventTest from './EventTest'
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      // <MyComponent />
      // <EventPractice />
      // <EventTest />
      // <ValidationSample />
      <div>
        {/* 컴포넌트에 ref를 달아서 해당 컴포넌트의 멤버 요소를 가져올 수 있다.
        여기에서의 this.scrollBox 는 ScrollBox 컴포넌트의 멤버 요소를 말한다.*/}
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => {this.scrollBox.scrollToBottom()}}>맨 밑으로 스크롤</button>
      </div>
    )
  }
}

export default App;
