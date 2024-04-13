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



// 예제 22-09
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티이다.
var value = 1;
// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj1 = {
    value: 100,
    foo () {
        console.log("이마요시는 :", this); //{ value: 100, foo: [Function: foo] }
        console.log("이마요시는 :", this.value); // 100

        // 메서드 내에서 정의한 중첩 함수
        function bar() {
            console.log("이마요시는 :", this); // window
            console.log("이마요시는 :", this.value); // 1
        }
        
    // 메서드 내에서 정의한 중첨 함수도 일반함수로 호출되면 중첩 함수 내부의 this에는
    // 전역 객체가 바인딩
    bar();
    }
};

obj1.foo();

// 예제 22-10
// 콜백함수가 일반함수로 호출된다면 콜백함수 내부의 this에도 전역객체가 바인딩 된다.
var value = 1;

const obj2 = {
    value: 100,
    foo() {
        console.log("이마요시는 :", this); // { value: 100, foo: [Function: foo] }
        // 콜백 함수 내부의 this에는 전역 객체가 바인딩 된다.
        setTimeout(function(){
            console.log("이마요시는 :", this); // window
            console.log("이마요시는 :", this.value); // 1
        }, 100);
    }
};

obj2.foo();

// 예제 22-11
var value = 1;

const obj3 = {
    value: 100,
    foo() {
        //  this 바인딩(obj)을 변수 that에 할당한다.
        const that = this;

        // 콜백 함수 내부에서 this대신 that을 참조한다.
        setTimeout(function() {
            console.log(that.value); // 100
        }, 100);
    }
};

obj3.foo();

// 예제 22-12
var value = 1;

const obj4 = {
    value: 100,
    foo() {
        // 콜백 함수에 명시적으로 this를 바인딩한다.
        setTimeout(function() {
            console.log(that.value); // 100
        }.bind(this), 100);
    }
};

obj4.foo();


// 예제 22-14
const person1 = {
    name : '이마요시',
    getName() {
        return this.name;
    }
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // 이마요시


// 예제 22-15
const anotherPerson = {
    name: '쿠로코'
};
// getName 메서드를 위 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 위이다.
console.log(anotherPerson.getName()); // 쿠로코

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName()); // ' '
// 일반 함수로 호출된 getName 함수의 내부 this.name은 브라우저 환경에서 window.name과 같다.
// node.js 환경에서 this.name은 undefined 이다.


// 예제 22-16
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me1 = new Person('쿠로코');

// getName 메서드를 호출한 객체는 me1다.
console.log(me1.getName()); // 쿠로코

Person.prototype.name = '카가미';

// getName 메서드를 호출한 객체는 Person.prototype
console.log(Person.prototype.getName()); // 카가미