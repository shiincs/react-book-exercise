import React, { Component } from 'react';

class EventTest extends Component {
  state = {
    buttonName: ''
  }

  handleClick = (e) => {
    this.setState({
      buttonName: e.target.className
    })
  }

  // 버튼을 누르면 해당 버튼의 className값이 buttonName의 상태값으로 설정되면서 현재버튼이름 영역에 출력된다.
  render() {
    return (
      <div>
        <div className="button1" onClick={this.handleClick}>버튼1</div>
        <div className="button2" onClick={this.handleClick}>버튼2</div>
        <div>현재버튼이름: {this.state.buttonName}</div>
      </div>
    );
  }
}

export default EventTest;