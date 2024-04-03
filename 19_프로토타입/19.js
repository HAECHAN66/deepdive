// 자바스크립트를 이루고 있는 거의 "모든 것"이 객체다

// 추상화 _ex: 이름과 주소속성을 갖느 객체
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log(person); // { name: 'Lee', address: 'Seoul' }

// 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체
// 이때 반지름은 상태를 나타내는 데이터이며 동작이다.

const circle = {
  radius: 5, // 반지름

  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레
  getPerimter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);
console.log(circle.getDiameter());
console.log(circle.getPerimter());
console.log(circle.getArea());
/*

{
  radius: 5,
  getDiameter: [Function: getDiameter],
  getPerimter: [Function: getPerimter],
  getArea: [Function: getArea]
}
10
31.41592653589793
78.53981633974483

상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작 하나의 논리적 단위로 묶어 생각
객체: 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 구조
객체의 상태 데이터 -> 프로퍼티 / 동작 -> 메서드 = 상속 가능
*/

// 상속과 프로토타입 _ 불필요한 중복을 제거

// 생성자  함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율을 나타내는 상수다.
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// getArea 메서드를 중복 생성하고 모든 인슨턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false
console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
// 내용이 동일한 메서드가 중복 생성 , 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가
// 프로토타입은 Circle 생성자 함수의 protoype 프로퍼티에 바인딩 되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle3 = new Circle(1);
const circle4 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 Circle.protoype으로부터 getArea 메서드를 상속 받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.getArea());
console.log(circle2.getArea());
