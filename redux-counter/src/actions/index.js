/* 
  action 객체를 만드는 액션 생성 함수들을 선언합니다(action creators).
  여기에서 () => ({})은 function() {return {}}와 동일한 의미입니다.
*/

import * as types from './ActionTypes';

export const increment = index => ({
  type: types.INCREMENT,
  index,
});

export const decrement = index => ({
  type: types.DECREMENT,
  index,
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  index,
  color,
});

export const create = color => ({
  type: types.CREATE,
  color,
});

// 가장 마지막 카운터를 삭제할 계획이기 때문에 index를 인자로 받지 않았다.
export const remove = () => ({
  type: types.REMOVE,
});
