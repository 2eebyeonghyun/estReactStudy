// customHook.js
// 커스텀훅 : 상태로직을 재사용할 수 있도록 하는 기능
// 함수이름을 정의해놓고 useState, useEffect등을 사용하여 구현

// 커스텀훅은 컴포넌트 재사용성의 궁극의 정수
//  -> 기존 컴포넌트 구성 코드의 중복도 줄일 수 있다는 장점이 있다.
//  -> API호출, 폼데이터 관리, 중복되는 애니메이션 기능들을 커스텀훅으로 만들어서 사용

// 리엑트 프로젝트의 일반적 폴더 구조
// src
//  -> components ( ui컴포넌트 저장 폴더)
//  -> hooks ( 커스텀 훅 저장 폴더)
//  -> utils ( 유틸리티 함수 저장 폴더)
//  -> pages ( 페이지 컴포넌트 저장 폴더)
//  -> styles ( css, scss 저장 폴더)
//  -> assets ( images, font 정적 파일 저장 폴더)
//  -> context ( 리엑트 컨텍스트 저장 폴더)
// app.js

// 폴더구조에서 커스텀훅과 유틸을 나눈 이유
// 커스텀훅은 react훅을 활용하여 공통적 코드를 처리
//  -> 컴포넌트의 상태, 라이프사이클 영향을 많이 받는다.
// 유틸은 react와 무관한 코드들, 어디서나 호출되면서 컴포넌트에 종속x
//  -> 단순한 js

// 커스텀훅 특징
// 재사용성, 캡슐화( 코드보안/ 유지보수성), 모듈성

// 커스텀훅의 규칙

import React, { useState, useEffect } from "react";
import useFetch from './cs';

function LoadData() {

    // 이 부분을 커스텀훅으로 변경
    // 요청은 이 파일에서 진행
    // 커스텀훅을 따로 분리해서 그 다음 붙이기
    // 요청은 이 파일 요청에 대한 처리는 커스텀 훅에서 진행
    
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  
    return (
        <>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
}

export default LoadData;