// 요구사항:
// 1. 현재 값과 이전 값을 비교하여 표시하는 컴포넌트를 만드세요
// 2. 값이 증가했는지 감소했는지 화살표로 표시하세요 (↑ 또는 ↓)
// 3. 변화량도 함께 표시하세요
// 4. 첫 렌더링시에는 이전 값 대신 "-"를 표시하세요

import { useEffect, useState, useRef } from "react";

function ValueTracker() {
    
    const [value, setValue] = useState(0);
    const previousInputValue = useRef('-');

    useEffect(() => {
        previousInputValue.current = value;
    }, [value]);

    const changeSymbol = () => {

        // if (previousInputValue.current === null) {
        //     return '-';
        // } 

        return value > previousInputValue.current ? '↑' : '↓';
    }

    return(
        <>
            <input value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <p>현재 값 : {value}</p>
            <p>이전 값 : {value === null ? '-' : previousInputValue.current}</p>
            <p>변화량 : {value - previousInputValue.current} {changeSymbol()}</p>
        </>
    );
}


// 요구사항:
// 1. localStorage와 동기화되는 상태를 관리하는 커스텀 훅을 만드세요
// 2. 새로고침해도 데이터가 유지되어야 합니다
// 3. 여러 컴포넌트에서 같은 키로 접근하면 데이터가 동기화되어야 합니다
// 4. JSON 형식의 데이터도 처리할 수 있어야 합니다

function TodoApp() {
    // 여기에 코드를 작성하세요
}

// export default ValueTracker;