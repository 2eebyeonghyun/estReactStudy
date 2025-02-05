import React, { useState } from "react";

// 실습예시 1
// 1. '안녕하세요' 버튼을 만드세요.
// 2. 버튼을 클릭하면 메시지가 '안녕히가세요'로 변경되어야 해요.
// 3. 다시 클릭하면 '안녕하세요'로 돌아가야 해요.
function Quiz() {

    // hook
    const [msg, setMsg] = useState('안녕하세요');

    let quizEvt = () => {
        if(msg === '안녕하세요') {
            setMsg('안녕히가세요');
        } else {
            setMsg('안녕하세요');
        }
    }

    return(
        <button onClick={quizEvt}>
            {msg}
        </button>
    );
}

// 실습예시 2
// 요구사항 :
// 1. 하트(♥) 이모지와 숫자를 보여주는 컴포넌트를 만드세요.
// 2. 하트를 클릭할 때마다 숫자가 1씩 증가해야해요.
// 3. 숫자가 10이 되면 '최대 좋아요 수에 도달했습니다!'라는 메시지를 표시하세요.

function Quiz2() {

    // 배열의 비구조화 할당 문법
    const [count, setCount] = useState(0);

    let quiz2Evt = () => {

        // 내가 만든 코드
        // if (count < 10) {
        //     setCount(count + 1);

        //     if (count + 1 === 10) {
        //         alert('최대 좋아요 수에 도달했습니다!');
        //     }
        // } 

        if (count < 10) {
            setCount(count + 1);
        }
        
    };

    return(
        // 내가 만든 코드
        // <button onClick={quiz2Evt}>
        //     ♥ {count}
        // </button>

        <div>
            <div onClick={quiz2Evt}>
                ♥ {count}
            </div>
            {/* 변수 cnt가 10이 됐을 때 이 태그를 띄울것 */}
            {count === 10 && <p>최대 좋아요 수에 도달했습니다!</p>}
        </div>
    );
}


export default Quiz2;