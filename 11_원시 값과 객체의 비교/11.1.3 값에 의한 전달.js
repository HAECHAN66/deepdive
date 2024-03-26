var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80    80
console.log(score === copy); // true

// score변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
//따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy); // 100    80
console.log(score === score); // false

// 변수에는 값이 전잘되는 것이 아니라 메모리 주소가 전달된다. 이는 변수와 같은 식별자는 값이 아니라 메모리 주소를 기억하고 있기 때문
// 전잘된 메모리 주소를 통해 메모리 공간에 접근하면 값을 참조할 수 있다.
// 결국은 두 변수의 원시 값은 서로 다른 메모리 공간에 저장된 별개의 값이되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할 수 없다.
