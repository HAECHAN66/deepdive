function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

console.log(10);

function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) *n
function factorial (n) {
    // 탈출 조건: n이 1 이하일 때 재귀호출을 멈춘다.
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial (n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4)); // 4! = 4 *3 *2 *1 = 24
console.log(factorial(5)); // 5! = 5 *4 *3 *2 *1 = 120

function factorial(n) {
    if(n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;
}// 위 결과와 같음