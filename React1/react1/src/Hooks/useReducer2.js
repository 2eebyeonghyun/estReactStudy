// useReducer2.js

import React, { useReducer } from "react";

// 캐릭터의 기본 정보
const INITIAL_STATE = {
    health: 100,
    level: 1,
    item: []
};

const gameReducr = (state, action) => {

};

// 캐릭터가 기본적으로 취할 수 있는 행동
const ACTIONS = {
    HEAL: '체력회복',
    DAMAGE: '데미지',
    LEVEL_UP: '레벨업',
    GET_ITEM: '아이템획득'
};

function Character1() {

    return(
        <div>
            <h1>캐릭터 정보</h1>
            <p>체력 : </p>
            <p>레벨 : </p>
            <p>아이템 : </p>

            <button onClick={() => dispatch({ type: ACTIONS.HEAL })}>포션먹기</button>
            <button onClick={() => dispatch({ type: ACTIONS.DAMAGE })}>공격당하기</button>
            <button onClick={() => dispatch({ type: ACTIONS.LEVEL_UP })}>레벨업</button>
        </div>
    );
}

export default Character1;