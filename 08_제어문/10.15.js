// 프로퍼티 접근
var person = {
    'last-name' : 'Lee', 1 : 10
};

person.last-neme; // -> 브라우저 환경 : NaN
person['last-name']; // -> Lee

// 값 갱신
var person = {
    name : 'Lee'
};

// person 객체에 name프로퍼티가 존재하므로 name프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);

// 동적생성
var person = {
    name : 'Lee'
};
// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;
console.log(person);

// 삭제
var person = {
    name : 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;
// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age프로퍼티를 삭제할 수 있다.
// person 객체에 프로퍼티가 존재하지 않는 걸 없애도, 에러는 일어나지 않는다.
delete person.age;


/*
// ES6
let x = 1, y = 2;
// 프로퍼티의 축약 표현
const obj = {x, y};
console.log(obj); // {x:1,y:2}

// 계산된 프로퍼티 이름
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이릉므로 프로퍼티 키를 동적 생성
const obj = {
    ['${prefix}-${++i}'] : i,
    ['${prefix}-${++i}'] : i,
    ['${prefix}-${++i}'] : i
}

// 메서드 축약 표현
const obj = {
    name: 'Lee',
    sayHi(){
        console.log('Hi!'+this.name);
    }
}

obj.sayHi();

*/