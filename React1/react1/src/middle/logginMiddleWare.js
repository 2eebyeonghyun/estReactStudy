// 요구사항 :
// 1. 모든 액션의 발생 시간을 로깅
//  -> 로그 찍기( 메서드 흐름 파악)
// 2. 액션 발생 전/후의 상태 변화를 콘솔에 출력
// 3. 특정 액션 타입일 때만 로깅하는 옵션 추가
// 4. 개발 환경에서만 로깅하도록 설정

const createLoggingMiddleware = (options = {}) => {

    // 옵션 디스트럭처링
    // 디스트럭처링 : 구조화된 배열이나 객체를 파괴하는것
    // 객체를 작성할때는 key: value 형태로 작성
    //  -> 그 후 사용을 위해서는 객체명.key값 형식이었으나
    //     이렇게 쓰는것이 보기 좋지않아 key값을 따로 분리한 후
    //     변수 쓰듯이 key만 입력해도 해당 객체의 값들을 가져올 수 있도록 처리
    const obj1 = [
        {name: '누렁이', age: 3},
        {name: '살쾡이', age: 5}
    ];
    const {name, age} = obj1;
    console.log(name, age);


    const {
        actionTypes = [], // 로깅을 하게 될 특정한 액션 타입들을 저장하는 배열
        development = true, // 개발환경 여부
    } = options;

    return store => next => action => {

        // 프로덕션 환경이거나 특정 액션 타입만 로깅하도록 설정된 경우
        if(!development || (actionTypes.length && !actionTypes.includes(action.type))) {
            return next(action);
        }

        // next( action) <-- 현재 액션을 다음 미들웨어나 리듀서에 전달시키는 메서드
        const timestamp = new Date().toISOString();
        const prevState = store.getState();

        console.group(`Action : ${action.type} @ ${timestamp}`);
        console.log('이전 상태 : ', prevState);
        console.log('액션 : ', action);

        const result = next(action);

        const nextState = store.getState();
        console.log('다음 상태 : ', nextState);
        console.groupEnd();

        return result;
    }
}

export default createLoggingMiddleware;