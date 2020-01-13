import { Map } from 'immutable';
import produce from 'immer'; // **** immer 불러오기

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생섬함수 정의
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
    color: 'red',
    number: 0,
};
// // **** 리듀서 작성
// export default function counter(state = initialState, action) {
//     console.log("default counter action.type=",action.type,"state=",state);
//     switch (action.type) {
//       case CHANGE_COLOR:
//         return {
//           ...state,
//           color: action.color,
//         };
//       case INCREMENT:
//         return {
//           ...state,
//           number: state.number + 1,
//         };
//       case DECREMENT:
//         return {
//           ...state,
//           number: state.number - 1,
//         };
//       default:
//         return state;
//     }
// }


// immutable start
// // **** Immutable 의 Map 으로 감싸기
// const initialState = Map({
//   color: 'red',
//   number: 0,
// });
// // 리듀서 작성
// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       // **** set 으로 특정 필드의 값을 설정
//       return state.set('color', action.color);
//     case INCREMENT:
//       // **** update 는 현재 값을 읽어온 다음에 함수에서 정의한 업데이트 로직에 따라 값 변경
//       return state.update('number', number => number + 1);
//     case DECREMENT:
//       // **** 마찬가지
//       return state.update('number', number => number - 1);
//     default:
//       return state;
//   }
// }
// immutable end

// immer start
// 리듀서 작성
// **** 내부 업데이트 로직 모두 수정
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return produce(state, draft => {
        draft.color = action.color;
      });
    case INCREMENT:
      return produce(state, draft => {
        draft.number++;
      });
    case DECREMENT:
      return produce(state, draft => {
        draft.number--;
      });
    default:
      return state;
  }
}
// immer end