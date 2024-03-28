// 객체 확장 금지는 프로퍼티 추가가 금지된다.
// Object.preventExtensions

const person = { name: "Lee" };

console.log(Object.isExtensible(person)); // true

Object.preventExtensions(person); // 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.

console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // {name: "Lee"}

delete person.name; // 추가는 금지, 삭제는 가능
console.log(person); // {}

// 프로퍼티 정의에 의한 추가도 금지된다.
Object.defineProperty(person, "age", { value: 20 });
// TypeError: Connot define property age, object is not extensible

// 객체 밀봉은 읽기와 쓰기만 가능하다
// Object.seal

const person2 = { name: "Lee" };

// person2 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person2)); // false

Object.seal(person2); // 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지

console.log(Object.isSealed(person2)); // True
console.log(Object.getOwnPropertyDescriptor(person2));

person2.name = "Kim";
console.log(person2); // {name: "Kim"} 값 갱신 가능, 나머지 불가능

Object.defineProperty(person2, "name", { configurable: true });
// TypeError: Cannot redefine property: name

// 객체 동결, 읽기만 가능하다
// Object.freeze

const person3 = {};

console.log(Object.isFrozen(person3)); // false

Object.freeze(person3);
console.log(Object.isFrozen(person3)); // true

// 동결된 객체는 writable과 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptor(person3));

// 불변 객체 _ 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체 까지는 영향을 주지 못한다.
// 이는 모든 프로퍼티에 대해 재귀적으로 Object.freeze메서드를 호출

function deepFreeze(target) {
  // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    /*
            모든 프로퍼티를 순회하며 재귀적으로 동결한다.
            Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
            forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행한다.
        */
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person = {
  name: "Lee",
  adress: { city: "Seoul" },
};

// 깊은 객체 동결

deepFreeze(person);

console.log(Object.isFrozen(person)); // true
//중첩객체까지 동결
console.log(Object.isFrozen(person.adress)); // true

person.adress.city = "Busan";
consolel.log(person); // {name: "Lee", address: {city: "Seoul"}}
