// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 참조
// console.bir은 console.log와 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add);

console.log(add(2, 5));

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {
  console.log("foo");
}

foo();

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {
  console.log("bar");
});
bar(); // 없다고? 갑자기?

// 함수 선언문을 의사 코드로 표현
var add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5)); //7

// < 함수 생성 시점과 함수 호이스팅 >
// 함수 참조
console.dir(add);
console.dir(sub);

// 함수 호출
console.log(add(2, 5));
console.log(sub(2, 5));

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

// 함수선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라 한다.
/* 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수표현식의 함수 리터럴도 할당문이 실행되는 시점에
평가되어 함수 객체가 된다. 따라서 함수표현식으로 함수를 정의하면 함수호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.
*/
