// Events.js
// JS에서 조금 개념을 추가했다 보면된다.
// 특징 : 일반함수로 선언하기 보다는 arrow function을 적극적으로 활용


// react에서도 이벤트 객체를 다룰 수 있다.
// 다만 바닐라 js는 인라인 이벤트핸들러에 이벤트 객체 선언시
// event라는 풀네임으로 작성해야했지만
// react에서는 addEventListner를 쓰듯이 사용해도 문제없다.
import React from "react";

function Shoot() {

    const shot = (param1, evt) => {
        alert(`사장님 나이스샷 ${param1}`);
        alert(evt.target);
    }

    return(
        <button onClick={(event) => shot('고올!!', event)}>힘껏 치세요!</button>
    );
}

export default Shoot;