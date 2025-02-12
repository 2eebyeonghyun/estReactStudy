// Redux
// react 라이브러리
//  -> 여러 컴포넌트가 공유하는 상태를 관리하기 위한 라이브러리
//  -> 예측 가능, 일관된 방식으로 상태를 관리하는것이 특징

// ● Redux의 핵심원칙
// 1. Single source of truth( 단일 진실 공급원)
//  -> 개발하는 서비스( 어플리케이션)의 모든 상태를
//     하나의 스토어에서 객체 트리 형태로 저장하고 관리하는 원칙
//  -> 근데 굳이 트리구조로 저장할 필요가 있음?
//  특징 : 모든 상태가 하나의 중앙화된 스토어에 저장
//      -> 데이터의 일관성과 정확성 유지가 쉬워진다.
//      -> 유지보수가 상대적으로 쉬워지며 모든 구성원들이 동일한 데이터에 접근 가능
//      -> 상태 예측이 투명해져서 디버깅과 테스트가 용이

// 2. State is read-only( 상태는 읽기 전용)
//  -> 읽기 전용 : 수정불가
//  -> 그렇다면 상태 자체를 수정할 방법은 없는가?
//     ( 상태를 직접 수정하는것은 불가능 반드시 액션 객체를 통해서만 변경이 가능)
//      -> 아무나 상태를 수정하게 되면 잘못된 데이터가 들어올 수 있거나 혹은
//         데이터가 탈취될 수도 있다.
//  -> 이 특징을 통해 실행취소, 다시 실행 기능을 쉽게 구현

// 3. Changes are made with pure functions( 순수 함수로의 변경)
// 순수 함수( Pure Functions) : 동일한 입력에 대해 항상 동일한 출력을 리턴
//  -> 외부 상태를 변경하지 않고, 외부값을 참조하거나 의존하지도 않음
//  -> 순수함수는 Reducer를 지칭하기도 한다.( 정확히는 리듀서는 순수함수여야 한다.)
//  이유 : 예측이 가능( 동일한 입력 -> 동일한 결과가 나와야해서)
//         성능최적화( 객체의 참조 비교만으로 변경을 감지할 수 있어서 깊게 비교할 필요는 없다.)
//         -> 리듀서에서 상태값을 직접 수정해서는 안된다.


// ● Redux 기본 구성요소
// 1. 액션 : 상태변화를 일으키기 위한 객체
//    구조
//      -> type 필드를 필수적으로 포함해야한다.
//    특징
//      -> 스토어로 데이터를 보내는 데이터 묶음
//      -> 스토어의 유일한 정보원
//      -> 일반적인 JS의 Object와 생김새가 똑같다.


// 2. 액션 생성함수( Action Creator) : 액션 객체를 생성하는 함수
// 기본적인 액션 생성 함수
//  -> 액션 객체 그대로 선언하면 될 거 같은데
//     액션 생성 함수가 굳이 필요한가?
//     만약 액션 생성함수가 필요하다면 썼을 때의 장점은 무엇인가?

// 장점
// 1. 재사용성, 확장성( 살짝 애매하기도..) 측면에서 유리
// 2. 유지보수성 측면에서도 좋음( 실수 방지에 유리)
// 3. 액션 생성 로직의 중앙화와 객체 생성의 자동화

// const addTodo = (text) => ({
//     type: 'ADD_TODO',
//     payload: {
//         text,
//         id: Date.now()
//     }
// });
  
// 여러 파라미터를 받는 액션 생성 함수
// const updateUser = (id, name, email) => ({
//     type: 'UPDATE_USER',
//     payload: {
//         id,
//         name,
//         email
//     }
// });


// 3. 리듀서(Reducer)
//  -> 상태와 액션을 받아 새로운 상태를 리턴하는 순수함수
// 특징
//  -> 순수함수로 작성이 필요
//  -> 이전 상태를 직접 수정하지 않고 새로운 상태 객체를 리턴
//  -> 리듀서의 기본구조는 hooks/ useReducer 파일들을 참조,
//  리덕스의 핵심 구성요소는 리듀서라봐도 과언이 아니다.


// 4. 스토어
//  -> redux 어플리케이션의 전체 상태를 보관하는 객체
// 특징
//  -> 단일성( 하나의 어플에는 하나의 스토어만 존재)
//  -> 모든 상태는 하나의 객체 트리 구조로 저장

// 핵심기능
//  -> 어플리케이션의 상태저장
//  -> getState()를 통한 상태 접근
//  -> dispatch( action를 통한 상태 수정)
//  -> subscribe를 통한 리스너 등록

// 생성방법
// createStore 함수를 사용하여 생성
// 첫번째 파라미터로 리듀서 함수를 받아야한다.
// 두번째 파라미터로 초기 상태값을 받아야한다.

// 스토어는 필요한가?( 스토어의 중요성)
// 상태 안전성 유지
// 데이터의 흐름을 보장
// 상태 변화의 예측 가능성 제공


// 5. 디스패치 : 스토어 내장 함수중 하나. 액션을 발생시키는 역할
//  -> 액션을 스토어에 전달하는 유일한 방법
//  -> 상태를 업데이트 하기 위한 명령을 전달하는 행동

// 실행순서
// 이벤트 발생 -> 액션을 redux 스토어에 dispatch -> 스토어가 reducer를 실행하여
// 새로운 상태를 생성 -> ui가 새로운 상태에 따라 리렌더링


// 6. 구독
//  -> 스토어 내장함수중 하나. 상태 변화 감지 및 반응

// 기본동작원리
// state가 업데이트 될 때마다 등록된 리스너 함수가 호출
// 구독 해제를 위한 unsubscribe 함수를 리턴

//  -> 기능이 복잡해서 직접 쓰진 않고 라이브러리의 함수들을 활용하여 사용
//     useSelector와 같은 hook으로 구독관련 기능을 처리한다.

// redux도 사용을 위해서는 우선 설치가 필요
// npm install redux react-redux @reduxjs/toolkit


// Redux Toolkit
// Redux 공식 상태 관리 도구 모음( Redux를 쉽게 적용하기 위한 표준 방식)

// 주요 특징
//  - Redux 개발을 위한 표준화된 도구 모음 제공
//  - 저장소 설정, Reducer 정의 단순화
//  - 불변 업데이트 로직 간소화
//  - 보일러플레이트 코드 감소

// 보일러플레이트 코드 : 최소한의 변경으로 여러곳에서 재사용되며
// 반복적으로 비슷한 형태를 띄는 코드
//  -> 반복작업, 패턴에 대한 표준화 코드( 공통 코드)

// 보일러플레이트 코드는 완벽한가?
// 이 코드의 장점?
// 1. api화( 재사용성)
// 2. 똑같은 코드 그대로쓰니깐 -> 그 코드가 문제없으면 실수 자체가 줄어들음
//    (코드 실수 최소화) -> 품질 개선

// 단점
// 1. 체계적인 상황에서는 유리하지만 창의성은 제한됨
// 2. 유연하지 못한 코드 -> 클라이언트의 요구사항 맞추기가 어려워질수도..

// 핵심 기능
// 1. configureStore() : 스토어 설정 간소화
//  -> 개발환경 상태에서 상태 변이 검사 미들웨어 자동추가
// 예시
// import { createSlice } from "@reduxjs/toolkit";
// const store = configureStore({
//   reducer: rootReducer, // 리듀서 지정
//   middleware: [...middlewares], // 사용할 미들웨어 배열 설정
//   devTools: true // Redux DevTools 사용 유무 설정.
// });


// 2. createReducer() : 리듀서 작성 단순화
//  -> 이 함수가 없다면 우리는 state와 action 관리시
//     switch case를 거의 반 강제로 써야하는 상황이 발생
//  -> 로직의 단순화를 위해 사용
// 예시
// const counterReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(increment, (state) => {
//             state.value++
//         })
//         .addCase(decrement, (state) => {
//             state.value--
//         })
// });


// 3. createAction() : 액션 생성자 함수 자동 생성
//  -> 액션 생성 함수
// 예시
// import { createAction } from '@reduxjs/toolkit';

// // 기본 액션 생성
// const increment = createAction('increment');

// // 페이로드와 함께 사용
// const addTodo = createAction('ADD_TODO');
// addTodo({ text: 'Buy milk' });
// 결과: { type: 'ADD_TODO', payload: { text: 'Buy milk' } }


// 4. createSlice() : 리듀서, 액션 자동생성
// redux를 가장 단순하게 만들어주는 고마운 도구.
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: { value: 0 },
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },

//         decrement: (state) => {
//             state.value -= 1;
//         }
//     }
// });


// 5. createEntityAdapter : 정규화된 데이터 처리
//  -> 정규화된 상태구조에서 / CRUD 작업을 수행하기 위한
//     미리 만들어진 리듀서와 셀렉터를 생성하는 도구.

// 기본 상태 구조
// ids : 엔티티의 고유 id 배열
// entities: id를 키로 하는 엔티티 객체 map 타입 데이터.

// const booksAdapter = createEntityAdapter({
//     selectId: (book) => book.bookId,
//     sortComparer: (a, b) => a.title.localeCompare(b.title)
// });
  
// const booksSlice = createSlice({
//     name: 'books',
//     initialState: booksAdapter.getInitialState(),
//     reducers: {
//         bookAdded: booksAdapter.addOne,
//         booksReceived: booksAdapter.setMany
//     }
// });


// 사실 toolkit 없이 redux 구현 가능.
// toolkit이 있다면 훨씬 편하게 redux를 사용할수 있음.
// 6. createAsyncThunk : redux toolkit에서 제공하는 비동기 작업 처리함수
//  -> 프로미스랑 비슷...

// const fetchUser = createAsyncThunk(
//     'users/fetchUser',
//     async () => {
//         const response = await fetch('/api/users');
//         return response.json();
//     }
// );

// 리듀서 처리(extraReducer처리)
// const slice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUser.pending, (state) => {
//                 state.loading = 'pending';
//             })
//             .addCase(fetchUser.fulfilled, (state, action) => {
//                 state.loading = 'succeeded';
//                 state.data = action.payload;
//             })
//             .addCase(fetchUser.rejected, (state) => {
//                 state.loading = 'failed';
//             });
//     }
// })[3]

// Redux 흐름 요약

// 상태값을 전부 기억하기 어렵고 어떻게 redux를 접근해야할지 모르겠다면
// 최소한 이 부분들이라도 기억해야함.

// Store, Reducer, Action
// Action -> dispatch -> Reducer 호출 -> store 생성

// Subscribe(useSelector)
//  -> 스토어가 값 변경되면 호출되는 함수.

// dispatch(addEventListener react ver)


// Redux와 비동기.
//  -> 스토어는 기본적으로는 동기적 작업 처리가 가능.
// 그렇다면 왜 스토어는 동기적 작업만 처리가 가능한가?
//  -> 리듀서가 순수함수이기 때문, 부작용이 없어야해서.
// 그리하여 Redux는 비동기 처리가 필요했기 때문에 Toolkit를 이용하여
// 비동기 처리를 추가. -> createAsyncThunk

// 처리순서
// 1. 자동 액션을 생성
// pending : 요청 시작
// fulfilled : 요청 성공
// rejected : 요청 실패



// Redux Thunk
//  -> Redux전용 미들웨어(액션 객체 대신 함수를 리턴받아주는 도구)
//  -> 비동기 작업 처리시 사용

// 1. 일반 액션 객체 대신에 함수 그 자체를 리턴시키고 싶을때 사용.
//    (비동기 로직 자체를 캡슐화 / Promise 기반 비동기 작업 처리시 용이.)
//  -> 액션 객체가 아닌 함수를 디스패치 할수 있음.


// 작동방식
// 액션이 함수냐 객체냐에 따라 동작방식은 달라짐
//  -> 액션이 함수면 해당 함수 실행
//  -> 액션이 객체면 다음 리듀서로 전달.

// 예시
// const asyncAction = createAsyncThunk(
//     'actionType',  // 액션 타입 문자열
//     async (payload, thunkAPI) => {  // 비동기 작업을 수행할 콜백 함수
//         try {
//             const response = await fetch('/api/data');
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

// 비동기 작업을 처리하기위한 표준방법.
// Promise의 세가지 상태에 따른 액션을 자동으로 생성.

// const slice = createSlice({

//     name: 'example',
//     initialState: {
//       data: null,
//       loading: false,
//       error: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(asyncAction.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(asyncAction.fulfilled, (state, action) => {
//           state.loading = false;
//           state.data = action.payload;
//         })
//         .addCase(asyncAction.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.error;
//         });
//     }
// });

// function Component() {
//     const dispatch = useDispatch();
//     const { data, loading, error } = useSelector((state) => state.example);
  
//     useEffect(() => {
//         dispatch(asyncAction());
//     }, [dispatch]);
  
//     if (loading) return <div>로딩 중...</div>;
//     if (error) return <div>에러 발생</div>;
    
//     return <div>{data}</div>;
// }


// Redux와 랜더링 성능 최적화
// 성능최적화 방법
// 1. 불필요한 리랜더링 방지( 필요한것만 적재적소에...)
//  -> useSelector를 사용할 때 필요한 상태들만 정확하게 선택
//  -> 여러 상태를 개별적으로 선택하여 사용
//  -> 컴포넌트가 필요로 하는 상태 조각에만 붙도록 설정 

// 2. 메모리제이션 활용하기
//  -> useMemo, useCallback을 적재적소에 활용

// 3. 상태 구조 최적화
//  -> 중첩 데이터 구조는 지양( 피해야한다.)
//  -> 상태 최소 유지
//  -> 상태는 정규화된 구조를 활요하는것이 좋다. 

// 4. immer 활용
//  -> 상태 업데이트를 쉽게 제공해주는 라이브러리
//  -> 중첩된 객체도 쉽게 업데이트가 가능하며 상태 변경의 관리를
//     조금 더 편하게 진행
//  -> useMemo, useCallback Hook의 활용
// const todoSlice = createSlice({
//     name: 'todo',
//     initialState: [],
//     reducers: {
//         add: (state, action) => {
//             state.push(action.payload);  // 직접 수정
//         },
//         remove: (state, action) => {
//             return state.filter(todo => todo.id !== action.payload);  // 새로운 상태 반환
//         }
//     }
// });


// 5. 개발자도구 활용
//  -> redux, DevTools를 사용한 성능 모니터링
//  -> 컴포넌트 리랜더링 추적
//  -> 병목 현상 식별 및 해결
//  -> 패키지 설치 후 스토어 설정을 통해 react에서 디버깅 진행을 할 수 있음


// ● redux 미들웨어 : 액션이 dispatch되어 reducer에서 처리되기 전에 사전작업을
//                 처리할 수 있도록 도와주는 중간자
// 1. 로깅 미들웨어 : npm install redux-logger
// 2. 비동기 작업처리 : thunk 참고
// 3. 상태 가공 : 미들웨어에서 액션이 리듀서에 도달하기 전에 데이터를 변형하거나 처리하는 과정
//  장점 : 상태 변화를 캐치하는것이 어려웠던게 redux의 특징
//      -> 상태가공을 활용함으로써 변화의 예측 가능성을 높일 수 있다.
//  -> 데이터 변형
//     (액션과 리듀서 사이에서 데이터를 가공)
//     (순수함수를 통한 상태 변경)

//  ● 상태가공과 데이터변형
//  주의사항 : 데이터의 변형은 불변성을 지켜야한다.( 원본에는 손 안댄다)
//  1. 배열의 변형 : 불변성 유지에 대해 신경을 쓸 필요가 있다.
//      -> 새로운 항목을 추가시
//         const newState = [...state, newItem];
//         -> 삭제 시
//         예시) state.filter(item => item.id !== removeId);
//         -> 수정 시
//         예시) state.map(item => 
//                  item.id === targetId ? { ...item, value: newValue } : item
//               );

//  2. 객체의 변형 
//  const newState = { ...state, name: 'newName' };

//  여러 속성 수정
//  const newState = { 
//      ...state, 
//      name: 'newName',
//      age: 25 
//  };

//  3. redux toolkit( 직접 수정하는 거 같은데 불변성은 유지)
//      -> 우리에게 가장 익숙한 방식
//      -> react 공식 권장 방법

//  -> 처리과정
//     (액션의 정보를 가로채서 필요한 가공 작업 수행)
//     (특정 조건에 따라 액션 수행여부 결정)
//     (하나의 액션에서 여러 상태 변경 가능


// ● 커스텀 미들웨어 예시
// 1. 로깅

// 2. 유효성검사
//  -> 액션이 리듀서에 도착하기 전에 데이터의 유효성을 미리 검사

//  store : dispatch, store의 메서드를 담고 있는 객체( getState)
//  next : 그다음 실행할 미들웨어를 가리키는 객체
// 아래와 같은 형태를 커링 함수 형태라 부른다.
// 커링함수 : 파라미터를 나눠 받는 형태의 함수
//  -> 경로를 확장하거나 경로를 지시하고 싶을 때 사용

// const validationMiddleware = store => next => action => {
//     // 액션 타입에 따른 유효성 검사
//     if (action.type === 'todos/addTodo') {
//         // 할 일 항목 유효성 검사
//         if (!action.payload || action.payload.trim().length < 2) {
//             console.warn('Todo 항목은 최소 2글자 이상이어야 합니다.');
//             return; // 유효하지 않은 경우 액션 중단
//         }
//     }
    
//     // 유효성 검사 통과 시 다음 미들웨어로 전달
//     return next(action);
// };

// 이 구조랑 같은거임
// function store() {
//     function next(p2) {
//         function action(p3) {

//         }
//     }
// }

// import { configureStore } from '@reduxjs/toolkit';
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(validationMiddleware)
// });

// 3. 로컬스토리지
// 4. 스토어에 미들웨어 적용