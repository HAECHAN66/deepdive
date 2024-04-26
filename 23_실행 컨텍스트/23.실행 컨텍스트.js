// 23. 실행 컨텍스트

// 예제 23-02
// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역 변수 선언
  const x = 10;
  const y = 20;

  // 메서드 호출
  console.log(a + x + y); // 130
}

// 함수 호출
foo(100);

// 메서드 호출
console.log(x + y); // 3

// 예제 23-03
const x1 = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}
foo(); // 6

// 예제 23-04
var x2 = 1;
const y1 = 2;

function foo(a) {
  var x2 = 3;
  const y1 = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x2 + y1 + z);
  }
  bar(10);
}
foo(20); //42

// Object.prototype.toString
window.toString();
window.__proto__.__proto__.__proto__ === Object.prototype;

// 예제 23-11
let x3 = 1;

if (true) {
  let x3 = 10;
  console.log(x3); // 10
}
console.log(x3); // 1
