// 예제 22-02 -  생성자 함수 방식으로 인스턴스를 생성하는 경우를 생각해보자.
function Circle (radius) {
    // 이 시점에서 생성자 함수를 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
    ????.radius = radius;
}
Circle.prototype.getDiameter = function() {
    // 위와 같다
    return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);

// 예제 22-03
// 객체 리터럴
const circle1 = {
    radius: 5,
    getDiameter() {
        // this는 메서드를 호출한 객체를 가리킨다.
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter()); // 10

// 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle을 가리킨다.
// 생성자 함수
function Circle(radius) {
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
};

// 인스턴스 생성
const circle2 = new Circle(5);
console.log(circle2.getDiameter()) // 10


// this는 어디서든 참조 가능 , 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
    // 일반 함수 내부에서 this는 전역객체 window를 가리킨다.
    console.log(this);
    return number * number;
}
square(2);

const person = {
    name : 'Lee',
    getName() {
        // 메서드 내부에서 this는 메서드 호출한 객체를 가리킨다.
        console.log(this) // { name: 'Lee', getName: [Function: getName] }
        return this.name;
    }
};
console.log(person.getName()); // Lee

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this); // Person { name: 'Lee' }
}

const me = new Person('Lee');


// 예제 22-06
const foo = function () {
    console.dir(this);
};

// 1. 일반 함수 호출
// 일반적 방식으로 호출
// 전역 객체 window 가리킴
foo (); // window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// 메서드를 호출한 객체 obj를 가리킴
const obj = { foo };
obj.foo() // obj

// 3. 생성자 함수 호출
// new연산자와 함께 생성자 함수로 호출
// 생성한 인스턴스를 가리킴
new foo (); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// this 인수에 의해 결정
const bar = {name:'이마요시 쇼이치'};
foo.call(bar);
foo.apply(bar);
foo.bind(bar);



// 예제 22-08
function foo() {
    `use strict`;

    console.log("이마요시 쇼이치는: ", this); // undefined
    function bar() {
        console.log("쿠로코 테츠야는: ",this);  // undefined
    }
    bar();
}
foo();