import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import List from './list';

function App() {

    return(
        <Provider store={store}>
            <List />
        </Provider>
    );
}

export default App;

// 요구사항:
// 1. JSONPlaceholder API를 사용하여 사용자 목록을 불러오기
// 2. 로딩 상태와 에러 상태 처리하기
// 3. 사용자 목록에서 특정 사용자 클릭 시 상세 정보 표시
// 4. 새로고침해도 데이터 유지되도록 구현
// 아래의 컴포넌트 참조
