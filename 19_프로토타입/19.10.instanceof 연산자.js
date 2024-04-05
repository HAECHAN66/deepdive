/* instanceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자.
우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다. 만약 우변의 피연산자가 함수가 아닌 경우 에러

객체 instanceof 생성자 함수

우변의 생성자 함수의 prototype에 바인딩 된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가
그렇지 않은 경우에는 false로 평가
*/

// 생성자 함수
function Person(name) {
  this.name = name;
}
const me = new Person("tiger");

// 프로토타입 체인 상에 존재. true 평가
console.log(me instanceof Person);
console.log(me instanceof Object);

// 동작 이해를 위해 프로토타입 교체
function Person(name) {
  this.name = name;
}
const me1 = new Person("tiger");

// 교체할 프로토타입 객체
const parent = {};
// 프로토타입의 교체
Object.setPrototypeOf(me1, parent);

// Person 생성자 함수와 parent객체는 연결되어 있지 않다.
console.log(Person.prototype === parent); // ㄴㄴ
console.log(Person.constructor === parent); // ㄴㄴ
console.log(me1 instanceof Person); // ㄴㄴ
console.log(me1 instanceof Object); // ㅇㅇ!

// + parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩
Person.prototype = parent;
console.log(me1 instanceof Person); // ㅇㅇ!
console.log(me1 instanceof Object); // ㅇㅇ!
// 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인

// instanceof 연산자를 함수로 표현
function isInstanceof(instance, constructor) {
  // 프로토타입 취득
  const protorype = Object.getPrototypeOf(instance);

  // 재귀 탈출 조건
  // prototype이 null이면 프로토타입 체인의 종점에 다다른것.
  if (protorype === null) return false;

  // 프로토타입 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환
  // 그렇지 않으면 재귀 호출로 체인 상의 상위 프로토타입으로 이동하여 확인
  return (
    protorype === constructor.protorype || isInstanceof(protorype, constructor)
  );
}
console.log(isInstanceof(me1, Person));
console.log(isInstanceof(me1, Object));
console.log(isInstanceof(me1, Array));

// 생성자 함수에 의해 프로토타입이 교체되어 constructor 프로퍼티와 생성자 함수간의 연결이 파괴되어도
// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결은 파괴되지 않으므로 instance of는 영향X

const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자함수의 프로토타입 포퍼티를 통해 프로토타입 교체
  Person.prototype = {
    sayHello() {
      console.log(`이름:${this.name}`);
    },
  };

  return Person;
})();

const me2 = new Person("우치하 사스케");

// constructor프로퍼티와 생성자 함수 간의 연결이 파괴 되어도 영향X
console.log(me2.constructor === Person); // ㄴㄴ
console.log(me2 instanceof Person); // ㅇㅇ 체인 상에 존재
console.log(me2 instanceof Object); // ㅇㅇ 체인 상에 존재
