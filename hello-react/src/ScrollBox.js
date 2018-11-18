import React, { Component } from 'react';

class ScrollBox extends Component {
  
  // 컴포넌트의 멤버함수 선언
  scrollToBottom = () => {
    // ref로 가져온 React DOM의 객체값을 분해대입으로 가져온다.
    // scrollHeight는 해당 요소의 전체 scroll의 높이를 말한다. (여기에서는 내부 박스의 높이)
    // clientHeight는 해당 요소의 높이를 말한다. (여기에서는 ref가 설정된 외부 박스의 높이)
    const {scrollHeight, clientHeight} = this.box
    // 전체 스크롤 높이에서 해당 요소의 높이를 빼주고,
    // 그 값을 scrollTop의 값으로 설정해서 스크롤의 위치를 맨 아래쪽으로 내려준다.
    this.box.scrollTop = scrollHeight - clientHeight
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    }

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      // 조작하고자하는 DOM 요소에 ref를 달아주고
      // 콜백 함수에서 컴포넌트의 멤버변수(임의의 변수이름 설정)에 파라미터로 받아온 ref를 넣어준다.
      // 아래처럼 ref를 달아주면 현재 컴포넌트의 멤버변수로 선언된 this.box에 ref가 담기게 된다.
      // 이제 this.box는 React DOM 요소인 div를 직접 가리키게 된다.
      <div style={style} ref={(ref) => this.box = ref}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;