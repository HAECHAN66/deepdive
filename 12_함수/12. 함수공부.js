//12.4 함수정의

//함수 정의 방식4

//1. 선언문
function add(x, y) {
  return x + y;
}

//2. 표현식
var add = function (x, y) {
  return x + y;
};

//3. function 생성자 함수
var add = new Function("x", "y", "return x+y");

//4. 화살표함수
var add = (x, y) => x + y;
