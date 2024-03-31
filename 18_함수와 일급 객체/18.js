// 일급객체_함수의 반환값으로 사용가능, 일반 객체 호출X 함수객채 호출O. 함수 고유 프로퍼티 소유

// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 런타임(할당단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
const auxs = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수의 매개변수에 전달할 수 있다.
const increase1 = makeCounter(auxs.increase);
console.log(increase());
console.log(increase());

// 3. 함수의 매개변수에 전달할 수 있다.
const decrease1 = makeCounter(auxs.decrease);
console.log(increase());
console.log(increase());

// 함수 객체의 프로퍼티_ console.dir 메서드 사용하여 함수 객체의 내부 보기
function square(number) {
  return number * number;
}

console.log(square);
console.log(Object.getOwnPropertyDescriptors(square));

/*
{
  length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'square',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
*/

// __proto__는 square의 함수 프로퍼티 X
console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.getPrototype, "__proto__"));

// arguments 프로퍼티_ 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. 순회 가능한 유사 배열 객체. 함수 내부에서 지역 변수처럼 사용. 외부참조X
function multipy(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multipy());
console.log(multipy(1));
console.log(multipy(1, 2));
console.log(multipy(1, 2, 3));

/*
[Arguments] {}
NaN
[Arguments] { '0': 1 }
NaN
[Arguments] { '0': 1, '1': 2 }
2
[Arguments] { '0': 1, '1': 2, '2': 3 }
2

arguments객체의 symbol프로퍼티는 순회가능한 자료구조인 이터러블로 만들기 위한 프로피티다. symbol.iterator
*/

function multipy1(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
  console.log(increase.next());
  console.log(increase.next());
  console.log(increase.next());
  console.log(increase.next());

  return x * y;
}
multipy1(1, 2, 3);

// arguments객체는 매개변수의 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// 유사배열객체란? length프로퍼티를 가진 객체로 for문으로 순회할 수 있는 객체를 말한다.
// ES6 Rest parameter
function sum1(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum1(1, 2));
console.log(sum1(1, 2, 3, 4, 5));

// caller 프로퍼티_비표준. 참고용... 넘어가도 됨,, / 함수자신을 호출한 함수를 가리킨다.
function foo(func) {
  return func();
}
function bar() {
  return `caller : ` + bar.caller;
}
console.log(foo(bar));
console.log(bar());

// length 프로퍼티_ 함수를 정의할 때 선언한 매개변수의 개수
function foo1() {}
console.log(foo1.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
// arguments 객체의 length프로퍼티와 함수 객체의 length 프로퍼티 값은 다를 수 있다.
// arguments 객체의 length 프로퍼티는 인자의 개수, 함수 객체의 length는 매개변수의 개수.

// name 프로퍼티_ ES5(빈 문자열),ES6(식별자) 동작 달리함.
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function () {};
// ES5 : name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름으로 값을 갖는다.
console.log(anonymousFunc.name); //anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); //bar

// __proto__ 접근자 프로퍼티
// 모든 객체는 프로토타입이라는 내부슬롯을 갖는다. 상속을 구현하는 객체를 가리킨다. 접근도!
// 간접 접근
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체는 Object.prototype의 프로퍼티를 상속받는다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false

// prototype 프로퍼티 _ constructor만이 소유하는 프로퍼티
(function () {}).hasOwnProperty("prototype"); // -> true
// 일반객체는 prototype를 소유하지 않는다.
({}).hasOwnProperty("prototype"); // -> false
// prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토 타입 객체를 가리킨다.
