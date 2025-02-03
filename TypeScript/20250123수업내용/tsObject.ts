// let document1 = {

//     // 프로퍼티
//     gunchim: '123',

//     // 메서드
//     getElementById1 : function(param1) {

//     }
// }

// document1.gunchim;
// document1.getElementById1();


// JS의 객체는 사실 유형( 타입) 자체를 추론하는 형식으로
// 데이터를 받아와서 처리
// TS의 경우는 미리 타입을 정해서 받아오는것이 가능
// JS, TS의 차이는 타입 선점 그 자체라봐도 무방하다.

// TS식 객체선언
// ? : 선택적 속성 선언
//  -> 안써도 그만이지만 추가도 가능
const car: {type: string, test?: number} = {
    type: '포르쉐 카이엔',
};

car.test = 3500;
console.log(car.type, car.test);