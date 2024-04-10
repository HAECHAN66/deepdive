function foo() {
  x = 10;
}
foo();

console.log(x); // 7
// 동적 생성한다. x 프로퍼티는 전역 변수처럼 사용가능, 암묵적 전역이라고함
// 암묵적전역은 오류를 발생시키는 원인이 된다. var, let, const키워드를 사용하려면
// 선두에 위치 시키기
`ues strict`;
function foo() {
  x = 10;
}
foo();
// 1. 선두 = 에러 X

function foo() {
  `ues strict`;
  x = 10;
}
foo();
// 2. 중위 = 에러O

function foo() {
  x = 10;
  `ues strict`;
}
foo();
// 3. 후위 = 에러O

// 실행함수로 스크립트를 감싸서 스코프 구분 후 적용
(function () {
  "use strict";
})();

// 함수 단위 적용도 피해라
(function () {
  // non-strict mode
  var let = 10; // 에러가 발생하지 않는다
  function foo() {
    "use strict";

    let = 20; // SyntaxError
  }
  foo();
})();

/* 대표적 에러
1. 암묵적 전역 -> 선언하지 않은 변수 참조 시
2. 변수, 함수, 매개변수의 삭제
3. 매개변수 이름 중복
4. with문의 사용 -> 가독성X */

// 적용에 의한 변화
// 일반함수의 this -> 사용할 필요가 없어서 에러 발생x
(function () {
  `use strict`;

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})(
  // arguments 객체 변영 반영 X
  (function (a) {
    `use strict`;
    // 매개변수에 전달 된 인수를 재할당하여 변경
    a = 2;

    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments);
    // [Arguments] { '0': 2 }
  })(1)
);
