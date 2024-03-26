// ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj);

//ES6
let x = 1,
  y = 2;
//프로퍼티 축약 표현
const obj = { x, y };

console.log(obj);

// 계산된 프로퍼티 이름
// ES5
var prefix = "prop";
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1:1, prop-2:2, prop-3:3}

// ES6
const prefix = "prop";
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj);

// 메서드 축약 표현

// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi!" + this.name);
  },
};

obj.sayHi();

// ES6 에서는 메서드를 정의할때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
const obj = {
  name: "Lee",
  // 메서드 축약표현
  sayHi() {
    console.log("Hi!" + this.name);
  },
};

obj.sayHi();
