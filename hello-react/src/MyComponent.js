import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    /* 전통적인 방식의 state 정의 & 초기화 방식
    this.state = {
      number: 0
    } */
  }

  // transform-class-properties 문법에 의해 이렇게 작성해도 state가 잘 작동한다.
  state = {
    number: 21
  }
  // default Props 값 설정하는 부분
  static defaultProps = {
    name: 'Changseon',
    age: 28
  }

  // propTyps를 설정하는 부분
  // 부모 컴포넌트로부터 전달받는 props의 타입을 제한한다.
  // 꼭 해당 타입이 아니여도 렌더링은 되지만 콘솔에서 Warning을 뿜는다.
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <p>안녕하세요!! 제 이름은 {this.props.name} 입니다!</p>
        <p>저는 {this.props.age}살 입니다 ㅠ..</p>
        <p>숫자: {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>더하기</button>
      </div>
    )
  }
}

export default MyComponent