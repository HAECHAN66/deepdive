// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if(x % 2){ // 2 % 2 = 0 이다. 이떄 0은 false로 암묵적 강제 변환된다.
    result = '홀수' ;
} else {
    result = '짝수' ;
}

console.log(result); // 짝수

// 삼항 조건 연산자
var result = y % 2 ? '홀수' : '짝수';
console.log(result); //짝수


// 수가 세 가지 일 때
var num = 2;
var kind = num ? (num > 0 ? '양수' : '홀수') : '영';

console.log(result);