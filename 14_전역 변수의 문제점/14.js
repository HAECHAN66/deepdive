// 지역 변수의 생명주기는 함수의 생명 주기와 일치
function foo() {
  // 생성
  var x = "local"; // 할당
  console.log(x);
  return x; // 변수 x 소멸
} // {} 안은 변수 x의 생명주기

foo();
console.log(x);

/* 호이스팅은 스코프를 단위로 동작 = 변수 선언이 스코프의 선두로 끌어 올려진 것처럼
동작하는 자바스크립트 고유의 특징을 말한다. */

// 전역변수의 문제점
/*
1. 암묵적 결합
2. 긴 생명주기
3. 스코프 체인 상에서 중점에 존재
    ㄴ 검색속도가 가장 느리다.
4. 네임스페이스 오염 */

// 사용 억제 방법
// 즉시 실행 함수
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
})();
console.log(foo); // Ref... : foo is not defined

// 네임스페이스 객체 + 객체를 프로퍼티로 추가해서 계층적으로 구성
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.person = {
  name: "Lee",
};
console.log(MYAPP.name);
// 식별자 충돌을 방지하지만 객체 자체가 전역변수에 할당 되므로 그다지 유용X

// 모듈화
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 말한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0

// ES6 모듈 = 파일 자체의 독자적인 모듈 스코프를 제공한다.
{
  /* <script type="module" src="lib.mjs"></script>
<script type="module" scr="app.mjs"></script> */
}
