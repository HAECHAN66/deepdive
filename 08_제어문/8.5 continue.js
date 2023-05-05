var string = 'Hello Word!';
var search = 'l';
var count = 0;

//문자열은 유사 배열이므로 for문으로 순화할 수 있다.
for (var i = 0; i < string.length; i++) {
    //'l'이 아니면 한 지점에서 실행을 중단하고 반복문의 중감식으로 이동한다.
    if (string[i] !== search) continue;
    count++;  // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); //3

//참고로 String.prototype.match 매서드를 사용해도 같은 동작을 한다.