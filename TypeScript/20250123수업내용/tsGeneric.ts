// 2025.01.24 수업내용

// tsGeneric.ts
// Java같은 언어들은 사실 타입이 굉장히 정적
//  -> 정적: 처음에 타입을 지정해줘야한다.
//  -> TS에서는 타입이 정적으로 이용되기 때문에 TS에서는
//     제네릭을 출시
// 제네릭 : 클래스를 정의하는 시점에 파라미터나 리턴값 타입이 필수
//  -> 코드를 짜다보면 사리 타입 지정이 어려울때도 있다.
//  -> 물론 TS에는 any가 있긴하다.( any는 상황에 따라 에러가 발생할 수 있다.)
//  -> TS에서 다양한 타입을 지원해야하는 경우는 제네릭을 사용

// // 큐의 동작원리는?
// class Queue {
//     // any를 쓰게되면 일단 어떤 타입이든 저장은 가능
//     // push를 한 데이터를 보면 처음에 number가 들어와서
//     // 그 후는 number가 아닌 경우 런타임에러 발생가능성이 높음
//     protected data: any[] = [];
  
//     // 해결방안
//     // Queue 클래스를 상속하여 number타입이 들어왔을 때 처리하는 방안을 따로..
//     push(item: any) {
//       this.data.push(item);
//     }
  
//     pop() {
//       return this.data.shift();
//     }
// }

// class NumberQueue extends Queue {

//     push(item: number) {
//         super.push(item);
//     }

//     pop(): number {
//         return super.pop();
//     }
// }

// // 위의 Queue 클래스를 상속받아
// // 아래의 코드가 문제없이 동작할 수 있도록
// // NumberQueue 클래스를 작성
// // 힌트 : 부모클래스에서 내용을 끌고와야하기 때문에
// //        부모클래스의 속성과 메서드에 접근이 가능한 super라는 키워드를 활용
// // 힌트 : pop할시
// //  -> return super.pop();

// const queue = new NumberQueue();

// queue.push(0);
// // 의도하지 않은 실수를 사전 검출 가능
// // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// // queue.push('1');
// queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

// console.log(queue.pop().toFixed()); // 0
// console.log(queue.pop().toFixed()); // 1

// // 사실 위의 코드도 문제가 있다.
// // 에러만 감지할 수 있는거지 그거외에는 큰 차이가 없다.
// //  -> 다양한 타입을 지원할라면 타입별로 클래스를 상속받아서
// //     다시 만들어줘야한다.


// 제네릭이 위와같은 문제점을 해결해줄 수 있다.

// 제네릭을 써서 Queue 클래스를 재정의
// 제네릭 = 타입에 파라미터 지정
class Queue<Gunchim> {
    data: Array<Gunchim> = [];

    push(item: Gunchim) {
        this.data.push(item);
    }

    pop(): Gunchim | undefined {
        return this.data.shift();
    }
}


// number 전용 Queue
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

// ?. => optional chaining
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
console.log(numberQueue.pop()?.toFixed()); // 0
console.log(numberQueue.pop()?.toFixed()); // 1
console.log(numberQueue.pop()?.toFixed()); // undefined

// string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop()?.toUpperCase()); // HELLO
console.log(stringQueue.pop()?.toUpperCase()); // WORLD
console.log(stringQueue.pop()?.toUpperCase()); // 
// 커스텀 객체 전용 Queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});
console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // undefined