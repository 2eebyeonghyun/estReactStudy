import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Car from './util.js';
import Test from './basic/classComponent.js';
import Props1 from './basic/propsExam.js';
import Event from './basic/Events.js';
import EventExam1 from './basic/EventExam1.js';
import ConRender from './basic/conditionalRender.js';
import List1 from './basic/reactList.js';
import StyleCss from './basic/usingCss.js'

// import reportWebVitals from './reportWebVitals';

// jsx를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx를 쓴걸까?');

// JSX 적용
// const el = <h1>This is JSX</h1>;

// JSX의 표현식
// const test = '군침싹'
// const el2 = <h1>리엑트의 신기한 기능 {test} 개 보여줄게요.</h1>

// JSX 규칙
// JSX문법을 적용시킬 때 HTML태그가 2줄이상이면 소괄호로 감싸줄것을 권장
// const el3 = (
//     <div>
//         <h1>이렇게 써도 되는거 아님?</h1>
//     </div>
// );

// JSX가 JS+ html이라고 한다면
// JS의 조건과 HTML코드를 융합하는것도 가능?
// 위의 el3변수에는 div이라는 body를 제외한 최상위 부모요소를 통해
// 코드들을 하나로 묶었음. 하지만 부모요소가 body인 경우는 어떻게?
//  -> 그냥 써도 상관x 다만, 성능상의 문제점이 발생
//     (DOM에 불필요한 노드가 추가된다.)
//  -> 위의 문제점을 해결하기 위해 fragment 라는것을 사용하여 여러줄을 한번에 묶을 수 있다.
// const el4 = (
//     <>
//         <h1>이렇게 써두면 문제없어요.</h1>
//         <h1>이렇게 써두면 문제없어요2.</h1>
//     </>
// );

// JSX문법은 기본적으로 XML의 규칙을 따른다.
// XML : 마크업언어( HTML과 유사하다.)
//  -> 다른 종류의 데이터를 기술할 때 사용하는 마크업언어
// 규칙 : 시작이 있으면 종료가 무조건 필요하다.

// 예시 : input 태그의 경우 종료태그는 생략해도 문제 없었다.
//  -> XML의 경우는 반드시 잘 작성해줘야한다.

// const el5 = <input type='text' />;

// JSX 규칙2
// class 관련
// JSX기반의 형식에서는 class가 아니라 className으로 작성해줘야한다.
//  -> class로 기본처럼 써도 잘되는데?
//  -> 사실 class 속성도 잘 먹히긴함. 다만, JSX 문법 위반
//     (JS에서는 es6 이후로는 class 키워드가 생김)
//  -> JSX의 규칙을 준수하려면 className으로 쓰는것을 권장
// const el6 = <h1 className="test">클래스 테스트 해보기</h1>;


// JSX 규칙3
// 퀴즈 : 단순 JS로 변수 test1을 선언하고
// test1의 값에 따라 나타나는 문자열을 다르게 보여줄것
// test1의 값이 10보다 작으면 : hungry
// test1의 값이 10보다 크면 : gunchimssak
// const test1 = 1;
// let txt = 'hungry';
// if(test1 > 10) {
//     txt = 'gunchimssak';
// }

// 위 코드를 삼항연사자로 변경했을 때
// let txt = test1 > 10 ? 'gunchimssak' : 'hungry';

// JS 코드의 결과를 JSX에서 인식하여 처리하는것도 가능
// const el7 = <h1>{(test1) > 10 ? 'gunchimssak' : 'hungry'}</h1>

// 컴포넌트 방식
// 1. 클래스 방식
// class Car extends React.Component {
//     render() {
//         return <h1>클래스방식의 컴포넌트 리턴</h1>
//     }
// }

// 2. 함수 방식
// function Car(props) {
//     // return <h1>곧 {props.time}먹을걸 생각하니 {props.test} 싹도노</h1>
//     return <h1>곧 점심먹을걸 생각하니 군침이 싹도노</h1>
// }

// 컴포넌트 활용 예시.
// 함수를 컴포넌트화 하려면 첫글자는 무조건 대문자로

// 컴포넌트 안에 컴포넌트를 포함해오는것도 가능
// function Wide() {
//     return (
//         <>
//             <h1>test1234</h1>
//             <Car />
//         </>
//     );
// }

const arr1 = [1, 3, 2];
const root = ReactDOM.createRoot(document.getElementById('root'));

// 함수 컴포넌트건 클래스 컴포넌트건 결국 랜더링 방식은 똑같다.
// root.render(<Car time='점심' test='군침이싹싹'/>);
// root.render(<Test />);
// root.render(<Test result='무엇이' />);
// root.render(<Test />);
// root.render(<Props1 />);
// root.render(<ConRender isGoal={true} />);
// root.render(<ConRender test={arr1} />);
// root.render(<List1 />);
root.render(<StyleCss />);

// root.render(
//     <React.StrictMode>
//         <Test />
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
