// propsExam.js
import React from 'react';

// 여러분의 자산이 3조가 넘는다 가정하고 만들어보는 코드
function Car(props) {
    return <h1>나는 {props.brand.model}</h1>
}

function Garage() {
    const carInfo = {name: '포르쉐', model: '카이엔'}
    return (
        <>
            <h1>내 차고에는 이런 차량들이 있어요!</h1>
            <Car brand={carInfo} />
        </>
    )
}

export default Garage;