import { configureStore } from "@reduxjs/toolkit";
import postReducer from './slice';
import { createLogger } from 'redux-logger';

// 미들웨어 활용 예시
const logger = createLogger();

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = configureStore({

    reducer: {
        posts: postReducer
    },
    // 액션이 dispatch 되기 전 상태 추적
    // 디스패치된 액션 정보 출력
    // 액션 처리 후 새로운 상태 출력
    // 개발환경에서만 사용하도록 설정 가능
    middleware: (getDefalutMiddleware) => getDefalutMiddleware().concat(middlewares)
});