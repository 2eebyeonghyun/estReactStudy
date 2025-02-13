// useEffectExam.js
// useEffect
// 주로 관리하는 예시는
// 1. 데이터 가져오기시 사용
// 2. DOM direct update
// 3. timer

// useEffect의 기본 양식
// useEffect(() => {
//      언제나 랜더링
// });

// useEffect는 모든 랜더링에서 실행된다.
// useEffect는 실행의 기준을 개발자가 잡아줄 필요가 있다.
//  ex) 마운트 될 때만 실행시킨다던지, 마운트 업데이트때만 실행시킨다던지
// Effect 실행 제어 방법
// 1. 빈 배열 선언
// useEffect(() => {
//      처음만 실행( 빈 배열일 때)
// }, []);

// 2. 상태값 추가
// useEffect(() => {
//      처음 랜더링 시 실행
//      값이 변경될 때 마다 실행
// }, []);


// 화면을 킨지 ~초 지났습니다. 메시지를 1초마다 갱신하여 보여주세요.
import React, {useState, useEffect} from "react";

function Timer() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return <h1>화면을 킨지 {count}초 지났습니다.</h1>
};


// 상태값까지 추가하여 Effect를 제어하는 예시
function Counter() {
    
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);

    // 마운트 시 실행
    useEffect(() => {
        console.log('계산시작');
        setCal(() => count * 2);

        // 컴포넌트 언마운트를 제어할 수도 있다.
        return() => {
            console.log('계산완료');
        }
    }, [count]);

    // 컴포넌트가 사라질 때 실행
    return(
        <>
            <p>Count : {count}</p>
            {/* 혹시 모를 경우( 여러개의 요소에서 사용하게 되면 좀 더 안정적으로 실행)를 대비해서 파라미터(c)를 선언 */}
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>곱하기 2한 값 : {cal}</p>
        </>
    );
};


// 데이터를 요청하여 응답받은 후 처리할 때 Effect를 활용
function GetUser() {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                const data = await response.json();

                setUsers(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('fetchUser error : ', error);
            }
        }

        fetchUser();
    }, []);

    const box = {
        backgroundColor: 'skyblue',
        padding: '15px',
        color: 'white',
        marginBottom: '15px'
    }

    return(
        <div>
            {users.map((user) => (
                <div style={box} key={user.id}>
                    <p>ID : {user.id}</p>
                    <p>이름 : {user.name}</p>
                    <p>이메일 : {user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default GetUser;