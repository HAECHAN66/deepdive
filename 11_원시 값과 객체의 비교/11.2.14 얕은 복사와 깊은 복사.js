const v = 1;

// 깊은 복사
const c1 = v;
console.log(c1 === v); // true

const o = { x: 1 };

// 얕은 복사
const c2 = o;
console.log(c2 === o); // true
