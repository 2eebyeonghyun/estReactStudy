import { configureStore } from "@reduxjs/toolkit";
import logger from '../middle/logginMiddleWare';
import timer from '../middleQuiz/App';

// 미들웨어를 만들때에는 
// 1. 스토어에 등록
// 2. 등록된 미들웨어의 구현( 실행 코드)
const store = configureStore({

    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(timer)
});