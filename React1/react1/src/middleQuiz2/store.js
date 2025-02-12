import { configureStore } from '@reduxjs/toolkit';
import createApiCacheMiddleware from './apiCacheMiddleware';

// 요구사항:
// 1. API 요청 결과를 캐시하여 중복 요청 방지
// 2. 캐시 만료 시간 설정 가능
// 3. 강제로 캐시를 무시하고 새로운 요청을 보낼 수 있는 옵션 추가
// 4. 캐시된 데이터 크기 제한 설정

// 사용 예시:
const store = configureStore({

    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            createApiCacheMiddleware({
                maxAge: 5 * 60 * 1000, // 5분
                maxSize: 100, // 최대 100개 요청 캐시
                ignoreCacheQuery: 'fresh' // ?fresh=true로 캐시 무시 가능
            })
        )
});

export default store;