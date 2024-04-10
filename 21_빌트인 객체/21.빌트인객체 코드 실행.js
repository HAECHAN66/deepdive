// 예제 21-11
let foo = 123;
console.log(window.foo); // undefined

// 예제 21-12
// 전역프로퍼티는 window를 생략하고 참조 가능
console.log(window.Infinity === Infinity); // true

// 임의의 무한대
console.log(3 / 0); // Infinity
// 음의 무한대
console.log(-3 / 0); // -Infinity
// 숫자값이다.
console.log(typeof Infinity); // number

// 예제 21-13
console.log(window.NaN); // Nan
console.log(Number("xyz")); // Nan
console.log(1 * "string"); // Nan
console.log(typeof NaN); // Number

// 예제 21-14
console.log(window.undefined); // undefined

var foo1;
console.log(foo1); // undefined
console.log(typeof undefined); // undefined

// 예제 21- 15 eval 메서드
// 표현식인 문
eval("1" + "2;"); // ->3
// 표현식이 아닌 문
eval("var x = 5;"); // undefined

// eval 함수의해 런타임에 변수 선언문이 실행되어 x변수가 선언 되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval("({ a: 1})");
console.log(o); // { a: 1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function() {return 1;})");
console.log(f()); //1

// 인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면
// 모든 문을 실행한 다음 마지막 결과값을 반환한다.
eval("1 +2; 3 + 4;"); // 7

// 자신이 호출된 위치에 해당하는 기존 스코프를 런타임에 동적으로 수정
const x = 1;
function foo() {
  eval("var x= 2;");
  console.log(x); // 2
}

foo();
console.log(x); // 1

// strict 엄격모두에서 기존의 스코프를 수정하지 않고
// 함수 자신의 자체적인 스코프 생성
const y = 1;
function foo() {
  `use strict`;

  eval(`var x= 2; consloe.log(x);`); // 2
  console.log(y); // 1
}

foo();
console.log(y); // 1

// 또한 인수로 전달받은 문자열 코드가 let, const 키워드를 사용한 변수 선엄누이라면 암묵적으로 적용
const x1 = 1;

function foo() {
  eval("var x =2; consloe.log(x1);"); // 2
  eval("const x1 = 3; consloe.log(x1);"); // 3
  console.log(x1); //2
}

foo();
console.log(x1); // 1
