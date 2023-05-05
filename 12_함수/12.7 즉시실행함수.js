// 익명 즉시 실행 함수
(function (){
    var a = 3;
    var b = 5;
    return a * b;
}());

// 기명 즉시 실행 함수
(function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // Error 왜지??


// 즉시 실행 함수도 일반 함수처럼 값을 변환할 수 있다.
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

// 즉시 실행 함수에도 일반 함수처럼 값을 인수할 수 있다.
res = (function (a,b) {
    return a*b;
}(3, 5));

console.log(res);