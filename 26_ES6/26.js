// 26 함수의 구분
// 예제 26-05
const obj = {
  x: 1,
  // foo는 메서드
  foo() {
    return this.x;
  },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// 예제 26-09
const base = {
  name: "이재현",
  sayHi() {
    return `안녕 나는 ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // sayHi는 ES6메서드다. [[HomeObject]]를 갖는다.
  // HomeObject는 sayHi가 바인딩된 객체인 derived를 가리키고
  // super은 sayHi의 homeobject인 base를 가리킨다.
  sayHi() {
    return `${super.sayHi()}. 혜인아 사랑해 사귀자`;
  },
};

// 예제 26-10
const derived1 = {
  __proto__: base,
  // sayHi는 ES6메서드 X
  // 따라서 갖지않으므로 super키워드 X
  sayHi: function () {
    // SyntaxError
    return `${super.sayHi()}뿡`;
  },
};

// 예제 26-15
// concise body
const power = (x) => x ** 2;
power(2);

// 위 표현은 다음과 동일하다.
// block body
const power = (x) => {
  return x ** 2;
};
// 중괄호를 생략한 경우 내부 문 표현식이 아닌 문이라면 에러 발생

// 예제 26-16~17
const arrow = () => {
  const x = 1;
};
// 객체 리터럴을 반환하는 경우 리터럴을 소괄호 ()로 감싸 주어야 한다.

// 예제 26-19
const create = (id, content) => ({ id, content });
create(1, "JavaScript");
// 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다. 이때 반환 값이 있다면 명시적 반환

// 예제 26-20
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 예제 26-21 화살표 함수도 즉시 실행 함수로 사용할 수 있다.
const person = ((name) => ({
  sayHi() {
    return `안녕 내 이름은 ${name}.`;
  },
}))("이재현");

console.log(person.sayHi()); // 안녕 내 이름은 이재현.

// 예제 26-22 화살표함수도 일급 객체이므로 고차함수에 인수로 전달할 수 있다. 이경우 일반함수 표현식보다 표현이 간결하고 가독성이 좋다.
// ES5
[1, 2, 3].map(function (v) {
  return v * 2;
});

// ES5
[1, 2, 3].map((v) => v * 2);

// 예제 26-23
const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출X
new Foo(); // TypeError
Foo.hasOwnProperty("prototype"); // 실패!

// 예제 25-25~27

function normal(a, a) {
  return a + a;
}
console.log(normal(1, 2));

const arrow = (a, a) => a + a;

// 예제 26-28
class Prefixer {
  constructor(perfix) {
    this.perfix = prefix;
  }
  add(arr) {
    // add 메서드는 인수로 전달된 배열 arr을 수노히하며 배열의 모든 요소에 prefix를 추가
    return add.map(function (item) {
      return this.prefix + item;
      // TypeError
    });
  }
}

const perfixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));

// 예제 26-29~
class Prefixer {
  constructor(perfix) {
    this.perfix = prefix;
  }
  add(arr) {
    // this 대피시키기 1
    const that = this;
    return add.map(function (item) {
      return that.prefix + "" + item;
    });
  }
}

// 예제 26-30
class Prefixer {
  constructor(perfix) {
    this.perfix = prefix;
  }
  add(arr) {
    return add.map(
      function (item) {
        return this.prefix + "" + item;
      }.bind(this)
    ); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩 된다.
  }
}

// 예제 26-32
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}
const prefixer1 = new Prefixer("-webkit-");
console.log(prefixer1.add(["transition", "user-select"]));

// 예제 26-33
// 화살표 함수는 상위 스코프의 this를 참조한다
() => this.x;
// 익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 작동
(function () {
  return this.x;
}).bind(this);


// 34
// 중첩함수 foo의 상위 스코프는 즉시 실행 함수
(function() {
    const foo = () => console.log(this);
    foo();
}).call({a:1});

// bar 함수는 화살표 함수를 반환
// `` 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar이다.
// 하지만 화살표 함수는 함수자체의 this 바인딩을 갖지않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.
(function(){
    const var = () => () => console.log(this);
    bar()();
}).call({a:1});

// 35
(function() {
    const foo = () => console.log(this);
    foo();  }) //window


// 36
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
    num: 1,
    increase: () => ++this.num
};

console.log(counter.increase()); // NaN

// 37
window.x = 1;

const normal = function() {return this.x;};
const arrow1 = () => this.x;

console.log(normal.call({x:10})); // 10
console.log(arrow.call({x:10})); // 1

// 38
const add = (a,b) => a + b;

console.log(add.call(null, 1, 2));      // 3
console.log(add.apply(null, [1, 2]));   // 3
console.log(add.bind(null, 1, 2)());    // 3

// 39
// Bad
const person1 = {
    name: '누구',
    sayHi: ()=> console.log(`ㅎㅇ${this.name}`)
}
person1.sayHi(); // ㅎㅇundefined

// 40
// Good
const person2 ={
    name: '재현',
    sayHi() {
        console.log(`ㅎㅇ${this.name}`);
    }
};

person2.sayHi(); // ㅎㅇ재현

// 41
// Bad
function Person(name) {
    this.name = name;
}
Person.prototype.sayHi =  () => console.log(`ㅎㅇ${this.name}`);

const person3 = new Person('재현');
person3.sayHi(); // ㅎㅇ

// 42
// Good
function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function () {console.log(`ㅎㅇ${this.name}`);};
const person4 = new Person('재현');
person4.sayHi(); // ㅎㅇ재현

// 43
function Person(name){
    this.name = name;
}

Person.prototype = {
    // constructor 프로퍼티와 생성자 함수간의 연결을 설정
    constructor: Person,
    sayHi() {console.log(`ㅎㅇ${this.name}`);}
};

const person5 = new Person('주연');
person5.sayHi(); // ㅎㅇ 주연



// 44
// Bad
class Person{
    // 클래스 필드 정의 제안
    name = "재현";
    sayHi = () => { console.log(`HI ${this.name}`); }
} // 작동은 잘 됨

// 45
class Person {
    constructor () {
        this.name = '현재';
        // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다
        this.sayHi = () => console.log(`hi${this.name}`);
    }
}

// 46
// Good
class Person {
    // 클래스 필드 정의
    name = '재현';
    
    sayHi() { console.log(`hi${this.name}`);}
}
const person6 = new Person();
person6.sayHi(); // hi 재현

// 50
function foo (param, ...rest){
    console.log(param); // 1
    console.log(rest);   //[ 2, 3, 4, 5 ]
}
foo(1,2,3,4,5);
function bar (param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest);   // [3,4,5]
}
bar(1,2,3,4,5);


// 51
function foo(... rest, param1, param2) {}
foo(1,2,3,4,5); // SyntaxError

// 52
function foo(...rest1, ...rest2) {}
foo(1,2,3,4,5);

// 53
function foo(...rest) {}
console.log(foo.length);

function bar(x,...rest) {}
console.log(bar.length);

function baz(y,...rest) {}
console.log(baz.length);

// 54
function sum() {
    // 가변인자 함수는 arguments 객체를 배열로 변환한다.
    var array = Array.prototype.slice.call(arguments);
}

// 55
function sum() {
    // 유사 배열 객체인 arguments 객체를 배열로 변환
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function(pre,cur) {
        return pre + cur;
    },0);
}

// 56
function sum(... args) {
    // Rest 파라미터 args에는 배열 [1,2,3,4,5]가 할당된다.
    return args.reduce((pre,cur) => pre+cur,0);
}
console.log(sum(1,2,3,4,5)); //15


// 57
function sum(x,y) {
    return x + y;
}
console.log(sum(1));

// 58
function sum(x, y){
    // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당
    x = x || 0;
    y = y || 0;

    return x + y;
}
console.log(sum(1,2));
console.log(sum(1));

// 59 최소화
function sum(x = 0, y = 0){
    return x + y;
}
console.log(sum(1,2));
console.log(sum(1));

// 60
function logName(name = '재현') {
    console.log(name);
}

logName(); // 재현
logName(undefined); // 재현
logName(null); // null

// 61
function foo(...rest = []){
    console.log(rest);
} // SyntaxError

// 63 (영향ㅌ)
function sum(x,y = 0){
    console.log(arguments);
}

console.log(sum.length); // 1

sum(1); // [Arguments] { '0': 1 }
sum(1,2); // [Arguments] { '0': 1, '1': 2 }