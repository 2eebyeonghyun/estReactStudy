// reactList.js

import React from "react";

function Car(props) {
    return <li>I am a { props.brand }</li>;
}
  
function Garage() {

    const cars = [
        {id: 1, brand: '현대'},
        {id: 2, brand: '기아'},
        {id: 3, brand: '테슬라'}
    ];

    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {/* {cars.map((car) => <Car brand={car} />)} */}
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

export default Garage;