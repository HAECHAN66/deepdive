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

// 예제 21-20
// 인수가 유한수이면 true를 반환한다.
isFinite(0); // -> true
isFinite(2e64); // -> true
isFinite("10"); // -> true: '10' -> 10
isFinite(null); // -> true: null -> 0

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false반환
isFinite(Infinity); // -> false
isFinite(-Infinity); // -> false
isFinite(NaN); // -> false
isFinite("Hello"); // -> false
isFinite("2005/12/12"); // -> false

// 예제 21-22
// 숫자
isNaN(NaN);
isNaN(10);

// 문자열
isNaN("boolean");
isNaN("10");
isNaN("10", "12");
isNaN("");
isNaN(` `);

// 불리언
isNaN(true);
isNaN(null);

// undefined
isNaN(undefined);

// 객체
isNaN({});

// date
isNaN(new Date());
isNaN(new Date().toString());

// 예제 21-23
// 문자열을 실수로 해석하여 반환한다.
parseFloat("3.14");
parseFloat("10.00");

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseFloat("34 45 66");
parseFloat("40 years");

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseFloat("He was 40");

// 앞뒤 공백은 무시된다.
parseFloat(" 60 ");

// 예제 21-24
// 문자열을 정수로 해석하여 반환한다.
parseInt("10");
parseInt("10.123");

// 전달받은 인수가 문자열이 아니면 문자열로 변환한 다음 정수로 해석
parseInt(10);
parseInt(10.123);

// 10`을 10진수로 해석하고 그 결과를 10진수 정수로 변환
parseInt("10");
// 10`을 2진수로 해석하고 그 결과를 10진수 정수로 변환
parseInt("10", 2);
// 10`을 8진수로 해석하고 그 결과를 10진수 정수로 변환
parseInt("10", 8);
// 10`을 16진수로 해석하고 그 결과를 10진수 정수로 변환
parseInt("10", 16);

const x2 = 15;
// 10진수 15를 2진수로 해석하고 그 결과를 문자열로 변환
x2.toString(2);

parseInt(x2.toString(2), 2);
// 10진수 15를 8진수로 해석하고 그 결과를 문자열로 변환
x2.toString(8);

parseInt(x2.toString(8), 8);
// 10진수 15를 16진수로 해석하고 그 결과를 문자열로 변환
x2.toString(16);

parseInt(x2.toString(16), 16);

x2.toString();
// 문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 변환
parseInt(x2.toString());
