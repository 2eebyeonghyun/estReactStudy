import React, { useState } from "react";

// 아래의 코드에서 개선사항이 있는지 확인해볼것.
// 개선사항 : 타입을 잘 맞춰주세요. 문자는 문자. 숫자는 숫자로.
//  -> 숫자형 데이터는 중괄호를 사용하여 JS 표현식으로 전달하는것을 권장함
function Profile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>나이: {props.age}</p>
        </div>
    );
}
  


function App() {

    return (
        <div>
            {/* <Profile name="철수" age="열살" /> */}
            <Profile name="철수" age={10} />
        </div>
    );
}



//퀴즈2 : 이 코드는 동작하지 않는데 그 이유를 설명하고 변경하세요.
// JSX 문법위반
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {/* isLoggedIn ? "환영합니다!" : "로그인해주세요" */}
            {(isLoggedIn) ? "환영합니다!" : "로그인해주세요"}
        </div>
    );
}



// 250206 Quiz
// 1. 숫자와 + - 버튼을 만드세요.
// 2. 숫자가 양수면 파란색, 음수면 빨간색, 0이면 검정색으로 표시하세요.
// 3. 버튼 클릭 시 1씩 증가/ 감소하도록 만드세요.

function Quiz0206() {

    /* 내가 푼 코드
    const [count, setCount] = useState(0);

    const minusEvent = () => {
        setCount(count - 1);
    };

    const plusEvent = () => {
        setCount(count + 1);
    };

    const colorChange = () => {
        if(count > 0) {
            return "blue"
        } else if(count < 0) {
            return "red";
        } 
        return "black";
    }

    return(
        <div style={{display: 'flex', gap: '1rem'}}>
            <button type="text" onClick={minusEvent}>-</button>
            <p style={{color: colorChange()}}>{count}</p>
            <button type="text" onClick={plusEvent}>+</button>
        </div>
    )
    */

    const [count, setCount] = useState(0);

    const getColor = () => count > 0 ? "blue" : count < 0 ? "red" : "black";

    return(
        <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span style={{ color: getColor(), margin: '0 10px', fontSize: '40px' }}>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Quiz0206;