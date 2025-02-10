
// Redux Toolkit의 createSlice 함수를 가져온다.
//  -> 리듀서 + 액션 생성자를 한번에 만들어주는 함수
import { createSlice } from "@reduxjs/toolkit";

// 초기에는 initialState를 통해 초기 상태 설정이 진행
const counterSlice = createSlice({

    // name 속성은 슬라이스의 이름을 정의할 때 사용
    name: 'counter',
    // 슬라이스의 초기값 정의( 초기상태 정의)
    initialState: {
        value: 0
    },
    // 상태변경 함수들의 정의
    // 이 파일은 Counter.js의 dispatch로 부터 이벤트 실행을 받아온다.
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // action 파라미터는 dispatch된 액션 객체 자체를 의미
        // 여기서의 액션객체는 counter.js의 이 함수 옆에 써둔 인수5
        // action.payload속성에 증가시킬 값 5를 담고 있다.
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

// createSlice가 생성한 액션 생성자 함수를 배출
//  -> 컴포넌트에서 액션 dispatch시 사용
// counter.js 파일에서 해당 액션들을 인식을 해야 dispatch를 통해 전달이 가능
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// createSlice가 생성한 리듀서를 내보낸다.
// store 설정 시 사용
export default counterSlice.reducer;