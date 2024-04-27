// 예제 24-01
const x = 1;
function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();

// 예제 24-02
const x1 = 1;
function outerFunc() {
  const x1 = 10;
  innerFunc();
}
function innerFunc() {
  console.log(x); // 1
}
outerFunc();

// 예제 24-04
const x2 = 1;
function foo() {
  const x2 = 10;

  // 상위 스코픈느 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무 관계가 없다.
  bar();
}
// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Eviroment]]에 저장하여 기억한다.
function bar() {
  console.log(x);
}
foo();
bar();

// 예제 24-05
const x3 = 1;

// 1
function outer() {
  const x3 = 10;
  const inner = function () {
    console.log(x3);
  }; //2
  return inner;
}

// outer함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스틑 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); //3
innerFunc(); //10

// 예제 24-09
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// 예제 24-10
// 카운트 상태 변경 함수
const increase1 = function () {
  // 카운트 상태 변수
  let num = 0;
  return ++num;
};
// 이전 상태를 유지하지 못한다.
console.log(increase1()); // 1
console.log(increase1()); // 1
console.log(increase1()); // 1

// 예제 24-11
const increase2 = (function () {
  let num = 0;
  //클로저
  return function () {
    return ++num;
  };
})();

console.log(increase2()); // 1
console.log(increase2()); // 2
console.log(increase2()); // 3

// 예제 24-12 증가+감소
const counter = (function () {
  let num = 0;

  //클로저인 메서드를 갖는 객체를 반환
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경
  return {
    // num:0, // 프로퍼티는 public 하므로 은닉되지 않는다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(increase()); // 1
console.log(increase()); // 2

console.log(decrease()); // 1
console.log(decrease()); // 0

// 예제 24-13 생성자 함수로 표현
const Counter = (function () {
  // 1. 카운트 상태 변수
  let num = 0;

  function Counter() {
    // this.num = 0; // 프로퍼티는 퍼블릭하므로 은닉X
  }

  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };
})();

const counter1 = new Counter();

console.log(counter1.increase()); //1
console.log(counter1.increase()); //2

console.log(counter1.decrease()); //1
console.log(counter1.decrease()); //0

// 예제 24-14
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수 (함수형 프로그래밍에서 클로저 사용하기)
// 이 함수는 카운트 상태를 유지하기 위한 자유변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(aux) {
  let counter = 0;
  // 클로저를 반환
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
}

// 보조함수
function increase(n) {
  return ++n;
}
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increase3 = makeCounter(increase); // 1
console.log(increase3()); // 1
console.log(increase3()); // 2

// increase함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decrease1 = makeCounter(decrease); // 2
console.log(decrease1()); // -1
console.log(decrease1()); // -2

// makeCounter 함수를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된 렉시컬 환경을 갖는다.

// 예제 24-15
// 함수를 반환하는 고차 함수 (위처럼 독립된 카운터가 아니라 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다. 이를 위해 makeCounter를 두 번 호출X)
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter2 = (function () {
  let counter = 0;

  // 함수를 인수로 전달받은 클로저를 반환
  return function (aux) {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
})();

// 보조함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

// 보조함수를전달하여 호출
console.log(counter2(increase)); // 1
console.log(counter2(increase)); // 2
// 자유변수를 공유한다.
console.log(counter2(decrease)); // 1
console.log(counter2(decrease)); // 0

// 예제 24-16
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(
      `이야 오랜만이다 나 요즘 뭐 좋아하지 아 나는 ${this.name}이고 ${_age}살이다.`
    );
  };
}

const me = new Person("이재현", 27);
me.sayHi();
console.log(me.name);
console.log(me._age); // undefined

const you = new Person("이주연", 26);
you.sayHi();
console.log(you.name);
console.log(you._age);

// sayHi 인스턴스 메서드를 프로토타입 메서드로 변경하여 메서드 중복 생성을 방지해보자
// 예제 24-17
function Person(name, age) {
  this.name = name;
  let _age = age;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
  console.log(
    `Best the boys 안녕하세여 더보이즈 ${this.name}. ${_age}살입니다!`
  );
};

// 예제 24-18
// 즉시 실행 함수를 사용해서 Person 생성자 함수와 Person.prototype.sayHi 메서드를 하나의 함수 내에 모아보자.
const Person = (function () {
  let _age = 0; // private
  // 생성자 함수
  function Person(name, age) {
    this.name = name;
    _age = age;
  }
  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(
      `Best the boys 안녕하세여 더보이즈 ${this.name}. ${_age}살입니다!`
    );
  };

  // 생성자 함수를 반환
  return Person;
})();

const me1 = new Person("이재현", 27);
me1.sayHi();
console.log(me1.name);
console.log(me1._age); // undefined

const you1 = new Person("이주연", 26);
you1.sayHi();
console.log(you1.name);
console.log(you1._age);
// 정보은닉 성공, Person 생성자 함수와 sayHi 메서드는 이미 종료되어 소멸한 즉시 실행 함수의 지역변수 _age를 참조할 수 있는 클로저다.

// 예제 24-19
// _age 변수 상태 유지하기
const me2 = new Person("이재현", 27);
me2.sayHi();
const you2 = new Person("이주연", 26);
you2.sayHi();

me2.sayHi();
