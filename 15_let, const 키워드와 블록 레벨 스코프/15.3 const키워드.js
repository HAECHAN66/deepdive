// 선언과 초기화 (const키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.)

const foo = 1;
{
  console.log(foo); // 에러
  const foo = 1;
  console.log(foo); // 1
}
// 블록 레벨 스코프를 갖는다
console.log(foo); // 에러

// var, let 키워드로 선언은 재할당이 자유로우나 const 선언 변수는 제한
const foo2 = 1;
foo2 = 2; // TypeError

// 상수는 재할당이 금지된 변수
let preTaxPrice = 100; // 세전 가격

// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1; // 세후 가격

console.log(afterTaxPrice); // 110
/* const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고
const키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.*/

// 언더스코어(_)로 구분하기
const TAX_RATE = 0.1;

let afterTaxPrice1 = preTaxPrice + preTaxPrice * TAX_RATE; // 세후 가격

console.log(afterTaxPrice1); // 110

// const 키워드와 객체 = 키워드로 선언된 변수에 객체를 할당한 경우 값 변경O
const person = {
  name: "Lee",
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = "Kim";
console.log(person); // {name:"Kin"}
/* const키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다. */
