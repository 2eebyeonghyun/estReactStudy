// usingCss.js

import React from "react";
// import styles from './test.module.css';
import './test.scss';

function App() {

    const freeStyle = {
        color: 'white',
        backgroundColor: 'black',
        padding: '15px',
        fontFamily: 'Sans-serif'
    };

    return(
        <>
            <h1 style={{color: 'red'}}>떠.. 떳냐?</h1>
            {/* <h1 className={styles.test}>모듈css를 붙일때는 클래스네임을 작성시 규칙이 있음</h1> */}
            {/* <h1 style={freeStyle}>비교용</h1> */}
            <h1>비교용</h1>
        </>
    )
}

export default App;