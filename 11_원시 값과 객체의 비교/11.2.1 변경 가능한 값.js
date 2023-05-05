const o = { x : { y : 1}};

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o,x); // 35장 "스프레이드 문법"

// lodash의 cloneDeep을 사용한 깊은 복사
// 
const _ = require('lodash');

const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x );