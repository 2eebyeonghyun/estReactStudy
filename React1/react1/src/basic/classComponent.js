// classComponent.js
import React from 'react';

// prop를 활용하여 데이터를 받아와서 처리하는 방법도 있는가?
class Test1 extends React.Component {

    // 초기 생성자
    constructor(props) {
        super(props); // 무조건써야 React.Component 클래스로 접근이 가능
        this.state = {
            brand: '포르쉐',
            model: '카이엔',
            color: 'black',
            year: '2024'
        };


        // this.state = {
        //     test: '군침 안돌음' // props 값이 상수화되었음
        // };
    }

    // setState : 객체 상태 변경
    changeColor = () => {
        this.setState({color: 'blue'});
    }

    render() {
       return(
            <div>
                <h1>이것은 내가 좋아하는 차량 브랜드 {this.state.brand}</h1>
                <p>이 차의 색상은 {this.state.color}</p>
                <p>{this.state.model} 차종은 이거임</p>
                <p>이때부터 생상됐습니다. {this.state.year}</p>
                <button type='button' onClick={this.changeColor}>
                    색상을 바꿔보자!
                </button>
            </div>
       ); 
    }

    // render() {
    //     return <h1>클래스방식의 컴포넌트 리턴 {this.props.result}</h1>
    // }
}

// class MainCls extends React.Component {
//     render() {
//         return <h1>여기는 MainCls의 내용 리턴!</h1>
//     }
// }

// class Cls2 extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>여기는 Cls2</h1>
//                 <MainCls />
//             </div>
//         );
//     }
// }

export default Test1;