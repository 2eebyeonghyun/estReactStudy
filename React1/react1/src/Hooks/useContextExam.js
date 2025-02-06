// useContextExam.js

// 컨텍스트 사용법

import React, {createContext, useContext, useState} from "react";

// 우선 전역에 생성
//  -> 중요한점은 컴포넌트를 서로 연결해두면 
//     당연히 Context의 사용은 가능해진다.
// 컴포넌트는 파일당 1개만 만드는게 아니다.
const UserContext = createContext();

function Component1() {

    const [user, setUser] = useState('test1234');

    return(
        <UserContext.Provider value={user}>
            <h1>{`무엇을 던지는가 ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
};

function Component2() {
    
    // const user = useContext(UserContext);

    return(
        <>
            <h1>{`무엇을 던지는가 여기는 component2`}</h1>

            <Component3 />
        </>
    );
};

function Component3() {

    const user = useContext(UserContext);

    return(
        <h1>{`무엇을 던지는가 ${user} 여기는 component3`}</h1>
    );
};




export default Component1;