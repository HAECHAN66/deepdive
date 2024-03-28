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

// for문에서 선언한 i는 전역변수다 = 중복 선언 가능
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5

// 15 변수 호이스팅
/* 이 시점에서 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.(1. 선언단계)
    변수 foo undefined로 초기화 된다(2. 초기화단게)*/
console.log(foo); // undefined

foo = 123; // 3. 할당단계

console.log(foo); // 123

var foo; // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
// 이름상 안 맞고 가독성 떨어뜨리고 오류 발생 여지 줌
