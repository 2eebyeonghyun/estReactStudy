import React from "react";

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

export default App;