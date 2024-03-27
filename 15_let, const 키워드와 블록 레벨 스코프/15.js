// var 키워드로 선언한 변수의 문제점
// 1. 변수 중복 선언 허용

var x = 1;
var y = 1;

// var 키워드로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1

// 함수 레벨 스코프
var x = 1;
if (true) {
  // x는 전역변수 = 중복 선언 가능
  var x = 10;
}

console.log(x); // 10 의도치않게 변수값이 변경 되는 부작용 발생

var i = 10;

// 랙문에서 선언한 i는 전역변수다 = 중복 선언 가능
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5
