// 객체 리터럴에 의한 객체 생성
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`); // '' 가 아닌 `` 임
  },
};

console.log(typeof person); //  object
console.log(person); // {neme: "Lee", sayHello: f}

// 프로퍼티 : 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

var person = {
  // 프로퍼티 키(빈 문자열을 포함하는 모든 문자열or 심벌 값) 는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로파티 키는 age, 프로퍼티 값(자바스크립트에서 사용할 수 있는 모든 값)은 20
  age: 20,
}; // 프로퍼티 나열은 ,(쉼표)로 구분 / 이름은 "" 따옴표 사용 필수

// 동적 프로퍼티

var obj = {};
var key = "hello";

// ES5 : 프로퍼티 키 동적 생성
obj[key] = "world";
// ES6 : 계산된 프로퍼티 이름
var obj = { [key]: "world" };

console.log(obj); // {hello: "world"}

var foo = {
  "": "", //빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

// 메서드: 프로퍼티 값이 함수일 경우 일반함수와 구분하기 위해 메서드라 부른다.
var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름
  getDiameter: function () {
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter()); // 10

// 프로퍼티 접근
// 1. 마침표(.) 접근 연산자를 사용하는 표기법 dot notation
// 2. 대괄호([..]) 접근 연산자를 사용하는 표기법 braket notaction

var person = {
  name: "Lee",
};

// dot notation
console.log(person.neme);
// bracjet notation
console.log(person["name"]); // 따옴표('')가 없을 시 RefernceError : name is not defined 에러

// 예제 10-15
var person = {
  "last-name": "Lee",
  1: 10,
};

// person.'last-name'; // -> SyntaxcError: Unexpected string
// person.last-name;   // 브라우저 환경: NaN
//                     // Node.js 환경: ReferenceError: name is not defined
// person[last-name];  // ReferenceError: last is not defined
person["last-name"]; // Lee

//프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
