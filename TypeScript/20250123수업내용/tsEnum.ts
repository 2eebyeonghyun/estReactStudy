// 2025.01.23 수업내용

// enum( 열거형)
// ts에서 enum 요즘은 자주 안쓴다.
//  -> 전제조건이 있다.
// 1. 해당환경이 tree shaking을 지원하는지를 체크( 이거 없으면 쓰지말라 권장함)
// tree shaking: 실제로 쓰지 않는 코드들을 제외하는 개념
//  -> 웹 성능 최적화와 관련이 있다.
// 2. 작성한 코드가 사용되지 않을 수도 있다라는 전제조건이 있는 경우

// enum은 ts 관점으로는 성능상으로는 불리하다.
// 다만 코드 생산성을 매우 높일 수는 있다.
// 무조건 생산성만 최고다, 성능만 최고다를 얘기하는것보다는
// 밸런스를 맞추고 타협안을 제시할 수 있어야한다.

// enum: 상수들이 모이면 enum
//  -> 상수들이 모여서 enum이라는 하나의 집합을 구성한다.

// export enum num1 {
//     one = 1,
//     two = 2,
//     three = 3
// }

// console.log(num1.one);
// console.log(num1.two);
// console.log(num1.three);


export enum statCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    ErrorCode = 500
}

console.log(statCode.Accepted);