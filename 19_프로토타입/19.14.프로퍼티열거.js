// for...in문 _ 모든 프로퍼티를 순회하며 열거 하려면 for...in문을 사용
// for (변수선언문 in 객체) {...}
const person = {
  name: "Lee",
  address: "Seoul",
};

// for...in 문 변수 prop에 person객체의 프로퍼티 키가 할당된다.
for (const key in person) {
  console.log(key + ":" + person[key]);
}

const perosn1 = {
  name: "이마요시 쇼이치",
  adress: "Sounchun",
};

// in연산자는 객체가 상속 받은 모든 프로토타입의 프로퍼티를 확인
console.log("toString" in perosn1);
// for...in문도 객체가 상속받은 모든 프로토타입의 프로퍼티 열거
// 하지만 toString같은 object.~의 프로퍼티가 열거되지 않는다.
for (const key in perosn1) {
  console.log(key + ":" + perosn1[key]);
}
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
/*{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}

for ... in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트
[[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.
*/

const person2 = {
  name: "이마요시 쇼이치",
  address: "순천",
  __proto__: { age: 19 },
};

for (const key in person2) {
  console.log(key + ":" + person2[key]);
}

// 키가 심벌인 프로퍼티는 열거X
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10,
};

for (const key in obj) {
  console.log(key + ":" + obj[key]);
}

// 심벌 확인
const person3 = {
  name: "이마요시 쇼이치",
  address: "순천",
  __proto__: { age: 19 },
};

for (const key in person3) {
  // 객체 자신의 프로퍼티인지 확인
  if (!person3.hasOwnProperty(key)) continue;
  console.log(key + ":" + person3[key]);
}

// 순서 보장
const obj1 = {
  2: 2,
  3: 3,
  1: 1,
  b: "b",
  a: "a",
};

for (const key in obj1) {
  if (!obj1.hasOwnProperty(key)) continue;
  console.log(key + ":" + obj1[key]);
}

// 배열에는 for...in문 사용X 일반적인 for문이나 for...of문, Array.prototype.forEach메서드
const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티 가질 수 있음
for (const i in arr) {
  // 프로퍼티 x도 출력
  console.log(arr[i]);
}
// arr.length는 3이다
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// forEach 메서드는 요소가 아닌 프로퍼티는 제외
arr.forEach((v) => console.log(v));
// for ...of 변수 선언문에서 선언한 변수에 키가 아닌 값 할당
for (const value of arr) {
  console.log(value);
}

const person4 = {
  name: "이마요시 쇼이치",
  address: "순천",
  __proto__: { age: 19 },
};

console.log(Object.keys(person4)); // [ 'name', 'address' ]
console.log(Object.values(person4)); // [ '이마요시 쇼이치', '순천' ]
Object.entries(person4).forEach(([key, value]) => console.log(key, value));
/*
name 이마요시 쇼이치
address 순천
 */
