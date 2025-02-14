// SOLID : 객체지향 프로그래밍 5대 설계 원칙
// 설계원칙을 준수할수록 프로젝트의 코드는 유지보수성이 향상되고
// 재사용성과 확장성을 극대화 하여 원활한 프로젝트를 진행할수 있음.

// 1. SRP(Single Responsibility Principle) / 단일 책임 원칙
//  - 하나의 객체는 하나의 책임만을 진다.
//    (객체당 기능은 하나.)
//  - 하나의 모듈은 하나의 액터에 대해서만 책임진다.
//    (컴포넌트에 해당 기능에 대해서 필요한 것들만 작성.)

// 2. OCP(Open Closed Principle) / 개방 폐쇄 원칙
//  - 소프트웨어의 구성요소(컴포넌트, 클래스, 모듈, 함수)들은
//    확장에는 열려있고 변경에는 닫혀있어야함.
//  - 기존 소스코드 변경을 최소화 하면서 확장이 가능해야함
//  - 문제없는 코드는 굳이 수정하지 않고 확장하면서 기능을 변경해도된다.
//  - OCP는 비용에 관련된 내용이라 사장님들 입장에서는 매우중요
//  - OCP는 반드시 지키기는 불가능에 가까움 다만 잘 지키려 노력할 필요가 있다.

// 3. LSP(Liskov Substitution Principle) / 리스코프 치환 원칙
//  - 서브타입은 언제나 부모타입으로 교체할 수 있어야한다.
//  - LSP 원칙을 지켰을 때 상속과 다형성을 활용한다.
//  React에서는 이친구는 무시해도 된다.
//      -> 어거지로 쓸 수는 있다.( tsx쓰면 가능)
//  LSP가 리액트에서는 중요하지 않은 이유
//      -> LSP는 상속과 다형성 활용에 관한 원칙임
//      -> React는 사실 상속보다는 합성 개념을 권장

// 4. ISP(Interface Segregation Principle) / 인터페이스 분리 원칙
//  - 불필요한 인터페이스는 구현할 필요가 없다.
//  - 인터페이스가 직접적으로 필요한 상황이 아니라면 굳이?

// 5. DIP(Dependency Inversion Principle) / 의존 역전 원칙
//  - 고수준의 모듈이 저수준 모듈의 구현에 의존해서는 안된다.
//  - 함수, 클래스보다 추상화에 의존할 필요가 있다.
//  - ts를 쓰지 않으면 리액트에서는 볼 일이 그리 많지 않다.
//    (함수형 컴포넌트에서는 redux를 활용해야 얘기하기 편해진다.)

// 좋은 소프트웨어란 무엇인가?
// solid원칙을 준수하고 코드 복잡도가 낮고 
// 사용자와 개발자 모두 생산성을 높일 수 있는 소프트웨어
// 좋은 소프트웨어란 유지보수 용이성, 보안 강화, 신뢰성, 재사용성, 
// 기능성을 갖춘 소프트웨어입니다.
// 사용자 친화성, 신뢰성, 성능, 보안성을 만족하는 소프트웨어라고 생각합니다.
// 유지보수가 편하고 확장성과 재사용성이 좋은 소프트웨어

// 위의 관점은 개발자만의 관점.
// 모두가 생각하는 좋은 소프트웨어 : 변화에 대응이 빠른( 잘하는) 소프트웨어
//  (개발자는 비동의 할수도 있음)
//  -> 어떻게든 사용자의 요구사항 자체는 잘 들어주는것이 좋은 소프트웨어
//  모두가 동의하는 좋은 소프트웨어의 기반이 좋은 설계.

// 좋은 설계의 기준 : 새로운 요구사항과 변경사항에 있어서 기존 내용들의 영향이 적은 구조
//  -> 유연하게 상황에 대해 대처하기가 편해짐.
//  -> SOLID 원칙을 기반으로 코드의 확장과 유지보수를 처리하면서 복잡성을 제거하는
//     방향으로 설계가된다면 프로젝트 개발 생산성을 증대 시킬수 있음.
//  -> SOLID 원칙의 근간이 리펙토링 시간 자체를 줄여보자라는 의도.
//  -> SOLID는 딱히 언어에 영향을 받지는 않음.(객체지향)