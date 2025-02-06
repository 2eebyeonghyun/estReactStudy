// useRefExam.js

import React, { useState, useRef, useEffect } from "react";

// ref를 활용하여 input창에 입력한 숫자의 개수를 체크하려 했으나
// 내용을 지울때에도 카운트가 올라가는것을 확인할 수 있었다.
//  -> 이유 : ref의 카운트는 랜더링시 올라간다.
function App() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
        count.current = count.current + 1;
    });
  
    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}


// current : 현재값
function MagicBox() {

    const boxRef = useRef();

    const changeColor = () => {
        // boxRef.current: 요소 선택 / style.backgroundColor: DOM traversing
        boxRef.current.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    };

    return(
        <div>
            <div 
                ref={boxRef} 
                style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: 'hotpink',
                    margin: '25px'
                }}
            >
            </div>

            <button onClick={changeColor}>박스 색상 변경</button>
        </div>
    );
}


function InputBox() {

    const boxRef = useRef();

    const focusBox = () => {
        // 전역 event.target과도 유사하다.
        boxRef.current.focus();
    }

    return(
        <div>
            <input 
                ref={boxRef}
                type="text"
                placeholder="여기에 글자를 입력하세요."
            />
            <button onClick={focusBox}>입력창 반짝이게 하기</button>
        </div>
    )
}


function inputValueBox() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

export default inputValueBox;