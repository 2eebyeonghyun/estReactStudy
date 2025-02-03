// let test = [1, 2, 3];
// 위 코드는 전통의 js에서의 배열 선언법

// ts는 js와 비교해서 차이점이 있다.
// 1. 배열에 타입을 지정하여 해당 타입만 배열에 할당 할 수 있도록 처리한다.
//  -> 아래의 코드는 현재 결과 자체는 나오지만
//     ts 문법에는 맞지 않음.

// let test: string[] = [];
// test.push('군침이싹9724');
// test.push(1234);
// console.log(test);

// 2. 배열에 키워드 readonly를 사용하여 배열의 변경 자체를 방지할 수 있다.
//  -> readonly를 원하면 상수타입으로 선언하면 그만

// const name1: readonly string[] = ['누렁이'];
// name1.push('바둑이');
// console.log(name1);

// 3. 유형화된 배열( 튜플) 개념이 존재
//  -> 각 인덱스 별로 길이와 유형이 미리 정의된 형식화된 배열
//  -> 튜플은 배열의 각 요소가 알려진 유형의 값이 될 수 있다는게 유용

// 튜플에는 선언해둔 타입별로 값을 집어넣을 수 있다.
// let tuple1: [number, boolean, string];

// 다만 타입이 어긋날시에는 에러가 발생
tuple1 = [9724, '피자먹으면 군침돌거같음', 'gunchim ssak'];
console.log(tuple1);