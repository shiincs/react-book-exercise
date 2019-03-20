/* 멀티 카운터 리듀서 */
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0,
    },
  ],
};

function counter(state = initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0,
          },
        ],
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1),
      };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1,
          },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1,
          },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counter[action.index],
            color: action.color,
          },
          ...counters.slice(action.index + 1, counters.length),
        ],
      };
    default:
      return state;
  }
}

export default counter;

/* 싱글 카운터 리듀서 */
// import number from './number';
// import color from './color';

// import { combineReducers } from 'redux';

// /*
//   서브 리듀서들을 하나로 합칩니다.
//   combineReducers를 실행하고 나면, 나중에 store 형태를
//   파라미터로 전달한 객체 모양대로 만듭니다.
//   지금은 다음과 같이 만듭니다.
//   {
//     numberData: {
//       number: 0
//     },
//     colorDate: {
//       color: 'black'
//     }
//   }
// */

// const reducers = combineReducers({
//   numberData: number,
//   colorData: color,
// });

// export default reducers;
