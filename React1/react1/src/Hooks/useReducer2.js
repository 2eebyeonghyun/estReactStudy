// useReducer2.js

import React, { useReducer } from "react";

// 캐릭터의 기본 정보
const INITIAL_STATE = {
    health: 100,
    level: 1,
    items: []
};

// ... <-- 스프레드 연산자
// 리엑트에서는 스프레드 연산자를 자주보게 됨
// 이유: 리엑트 불변성 원칙 때문에
//  -> 리엑트의 특성은 기존상태를 직접 수정했을 시 변화감지를 못한다.
//  -> 리렌더링이 제대로 발생하지 않을 수 있다.
const gameReducer = (state, action) => {
    switch(action.type) {
        case '체력회복' :
            return{
                ...state, // 기존의 상태를 복사해온다.( 이래야 리렌더링시 데이터 변화를 감지시킬 수 있다.)
                health: state.health + 20
            };
        case '데미지' :
            return{
                ...state,
                health: state.health - 10
            };
        case '레벨업' :
            return{
                ...state,
                level: state.level + 1
            };
        case '아이템획득' :
            return{
                ...state,
                items: [...state.items, action.item]
            };
        default:
            return state;
    }
};

// 캐릭터가 기본적으로 취할 수 있는 행동
const ACTIONS = {
    HEAL: '체력회복',
    DAMAGE: '데미지',
    LEVEL_UP: '레벨업',
    GET_ITEM: '아이템획득'
};

const flexBox = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
}

function Character1() {

    const [character, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return(
        <div>
            <h1>캐릭터 정보</h1>
            <p>체력 : {character.health}</p>
            <p>레벨 : {character.level}</p>
            <p>아이템 : {character.items.join(', ')}</p>

            <div style={ flexBox }>
                <button onClick={() => dispatch({ type: ACTIONS.HEAL })}>포션먹기</button>
                <button onClick={() => dispatch({ type: ACTIONS.DAMAGE })}>공격당하기</button>
                <button onClick={() => dispatch({ type: ACTIONS.LEVEL_UP })}>레벨업</button>
                <button onClick={() => dispatch({ type: ACTIONS.GET_ITEM, item: '빨간포션' })}>아이템획득</button>
            </div>
        </div>
    );
}

export default Character1;