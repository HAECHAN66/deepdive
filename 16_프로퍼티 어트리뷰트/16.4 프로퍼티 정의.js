//

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerator: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

// [[Enumerable]]의 값이 false인 경우 -> for...in문이나 Object.keys등으로 열거X
console.log(Objec.keys(person)); // ["firstName"]

// [[Writable]]의 값이 false인 경우도 같음 -> lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거X
person.lastName = "Kim"; // 값 변경하면 에러X 무시O

// [[Confiurable]]의 값이 false인 경우 삭제X / 에러X 무시O
delete person.lastName;

// 재정의도 X
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

// 접근자 프로퍼티 정의

Object.defineProperty(person, "fullName", {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split("");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);

person.fullName = "Hyein Lee";
console.log(person);

// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의
// Object.defineProperties 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.

const person2 = {};

Object.defineProperties(person2, {
  firstName: {
    value: "Ungmo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
    enumerable: true,
    configurable: true,
    writable: true,
  },
  fullName: {
    // getter함수
    get() {
      return `${this.firstName}${this.lastName}`;
    },

    // setter 함수
    set(name) {
      [this.firstName, this.lastName] = naem.split("");
    },
    enumerable: true,
    configurable: true,
  },
});

person2.fullName = "Hyein Lee";
console.log(person2); // {firstName: "Hyein", lastName: "Lee"}
