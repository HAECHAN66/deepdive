var person = {
  name: "Lee",
};

var copy = person;

console.log(copy === person);

copy.name = "Kim";

person.address = "Seoul";

console.log(person);
console.log(copy);

var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2);
console.log(person1.name === person2.name);

// === 일치 비교 연산자는 변수에 저장되어 있는 값을 타입 변환하지 않고 비교한다.
