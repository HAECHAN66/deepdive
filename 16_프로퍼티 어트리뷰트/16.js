/* 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다. 
    프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다. */

// Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다. -> 프로퍼티 디스크립터 객체를 반환한다.
const person = {
  name: "Lee",
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writrable: true, enumerable: true, conigurable: true}

const person2 = {
  name: "Lee",
};

// 프로퍼티 동적 생성
person2.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객제들을 반환한다.
console.log(Object.getOwnPropertyDescriptor(person2));

// 데이터 프로퍼티와 접근자 프로퍼티
/*
- 데이터 프로퍼티: 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
- 접근자 프로퍼티: 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.

[[Value]] - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
[[Writable]] - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다. 읽기전용 프로퍼티.
[[Enumerable]] - 프로퍼티 열거 기능 여부를 나타내며 불리언 값을 갖는다. false인 경우 해당 프로퍼티는 for.. in문이나 Object.keys 메서드 등으로 열거X
[[Configurble]] - 프로퍼티의 재정의 가능
*/

const person3 = {
  name: "Lee",
};

person3.age = 20;

console.log(Object.getOwnPropertyDescriptor(person3));

// 접근자 프로퍼티
/*
[[Get]] - 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰값. getter함수가 호출
[[Set]] - setter 호출
Enumerable, Configurable
getter/ setter 함수를 모두 정의할 수 있고 하나만 정의 가능
*/

const person4 = {
  //데이터 프로퍼티
  firstName: "Ungom",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullName(name) {
    // 패열 디스트럭처링 할당 : "31.1 배열 디스트럭처링 할당" 참고

    [this.firstName, this.lastName] = name.split(``);
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person4.firstName + ` ` + person4.lastName);

// 접근자 프로퍼티를 통한 값의 저장
// fullName에 값을 저장하면 setter 함수가 호출된다.
person4.fullName = "Hyein Lee";
console.log(person4);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// fullName에 접근하면 getter함수가 호출된다.

console.log(person4.fullName);

// firesName은 데이터 프로퍼티다.
let decrease = Object.getOwnPropertyDescriptor(person4, "firstName");
console.log(decrease);
// {value: "Hyein", writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
decrease = Object.getOwnPropertyDescriptor(person4, "fullname");
console.log(decrease);

/* [[Get]] 내부 메서드가 호출되면 다음과 같이 동작한다.
1. 프로퍼티 키 유효 확인. 문자열 또는 심벌이어야 한다. "fullName"은 문자열이므로 유효한 키
2. 프로토타입 체인에서 프로퍼티를 검색한다. person4객체에 fullName 프로퍼티가 존재한다.
3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인. fullName프로퍼티는 접근자.
4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환
    fullName의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.get~ ... 메서드가 반환하는 프로퍼티 디스크립터 객체의 get프로퍼티값과 같다.
*/

/*프로토타입이란

프로토 타입은 어떤 객체의 상위 객체의 역할을 하는 객체다. 프로토타입은 자식 객체에게 자신의 프로퍼티와 메서드를 상속한다.
프로토 타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인것처럼 자유롭게 사용가능

프로토타입 체인이란

프로토타입이 단반향 링크드 리스트형태로 연결되어 있는 상속구조를 말한다.

*/

// 접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법

Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"); // 일반 객체의 __proto__ 접근자 프로퍼티
Object.getOwnPropertyDescriptor(function () {}, "prototype");
