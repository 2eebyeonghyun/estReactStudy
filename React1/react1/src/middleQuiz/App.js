import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// 요구사항 :
// 1. 액션이 발생할 때마다 몇 초가 걸렸는지 콘솔에 출력
// 2. 액션의 type과 함께 시간을 표시
// 3. 1초 이상 걸리는 액션은 경고 메시지 출력

// 도전과제
// 1. timerMiddleware가 잘 동작할 수 있도록
//    우리가 그동안 만들었던 예시에 추가하는 형태로 코드를 융합해보세요.
// 2. store, app 및 미들웨어들을 컴포넌트( 파일) 단위로 분리하여
//    잘 실행되는가도 체크해보세요.

const timerMiddleware = store => next => action => {
    const start = Date.now();
  
    // 액션 실행
    const result = next(action);
    
    // 소요 시간 계산
    const end = Date.now();
    const diff = end - start;
    
    // 결과 출력
    console.log(`액션 ${action.type} 실행 시간: ${diff}ms`);
    
    if (diff > 1000) {
        console.warn(`경고: ${action.type} 액션이 ${diff}ms로 오래 걸렸습니다!`);
    }
    
    return result;
};

const store = configureStore({

    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(timerMiddleware)
});


function App() {

    return(
        <React.StrictMode>
            <Provider store={store}>
                <div className="App"></div>
            </Provider>
        </React.StrictMode>
    );
}

export default App;