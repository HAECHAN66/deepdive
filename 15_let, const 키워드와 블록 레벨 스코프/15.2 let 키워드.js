// 중복 설정 불가능
// 블록 레벨 스코프
let foo = 1; // 전역
{
  let foo = 2;
  let bar = 3; // 지역
}

console.log(foo); // 1
console.log(bar); // RefernceError: bar is not defined

// let 키워드로 선언한 변수는 "선언단게"와 "초기화단계"가 분리되어 진행된다.
