// 일반적인 함수로서 호출
foo(); // -> 1

// 생산자 함수로서 호출
new foo(); // -> foo {}

// 메서드로서 호출
var obj = { foo: foo};
obj.foo(); // -> 1


const obj = {
    x:1,
    // foo는 메서드다.
    foo() { return this.x;},
    // bar에 바인딩되 함수는 메서드가 아닌 일반 함수다.
    bar: function() { return this.x;}
};

console.log(obj.foo()); //1
console.log(obj.bar()); //1

new obj.foo(); // ERROR
new obj.bar(); // bar {}

// construtor가 아닌 ES6 메서드이므로 property 프로퍼티가 없다.
obj.foo.hasOwnProperty('Property'); // -> false
// construtor인 아닌 일반 메서드이므로 property 프로퍼티가 있다.
obj.bar.hasOwnProperty('Property'); // -> true

String.prototype.toUpperCase.prototype;
String.fromCharCode.prototype;

