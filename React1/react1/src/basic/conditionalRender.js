// conditionalRender.js

import React, { useState } from "react";

// 조건부 랜더링
// react는 조건부의 랜더링 기준이 컴포넌트 단위로 가능

// function MissedGoal() {
//     return <h1>아이고 까비까비 ㅋㅋㅋ</h1>
// }

// function MadeGoal() {
//     return <h1>Gooooooal!!! nice shot</h1>
// }

// function App(props) {

//     let isGoal = props.isGoal;

//     if(isGoal) {
//         return <MadeGoal />
//     }
//     return <MissedGoal />
// }

function App(props) {

    console.log(props.test);
    const test = props.test;
    
    return(
        <>
            <h1>파라미터로 받아온 배열 요소의 개수</h1>
            { test.length > 0 &&

                <h2>
                    배열 요소의 개수는 {test.length}개 입니다.
                </h2>
            }
        </>
    );
}


export default App;