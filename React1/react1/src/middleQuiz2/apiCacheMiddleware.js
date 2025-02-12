// apiCacheMiddleware.js


const createApiCacheMiddleware = (options = {}) => {

    const { maxAge = 5 * 60 * 1000, maxSize = 100, ignoreCacheQuery = 'fresh' } = options;

    // 여기에 코드를 작성하세요
    return store => next => action => {

        const cleanOldCache = () => {
            
        }

        // 주기적으로 오래된 캐시 정리
        cleanOldCache();

        // 캐시된 데이터가 있고, 강제 새로고침이 아닌 경우
        if (cache.has(cacheKey) && !ignoreCacheParam) {
            const cachedData = cache.get(cacheKey);
            return Promise.resolve(cachedData.data);
        }

        // 새로운 요청 실행
        return next(action).then(result => {
            // 성공한 경우에만 캐시
            if (!result.error) {
                enforceMaxSize();
                cache.set(cacheKey, {
                    timestamp: Date.now(),
                    data: result
                });
            }
            return result;
        });
    }
};

export default createApiCacheMiddleware;