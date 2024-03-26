/* 자바스크립트 객체는 프로퍼티 키를 인덱스로 사용하는 해시 테이블(연관배열, map, dictionary, lookup table이라 부르기도 한다.)
대부분의 자바스크립트 엔진은 해시테이블과 유사하다. 자바,C++ 클래스 기반 객체 지향 프로그래밍 언어는 사전에 정의된 클래스를 기반으로 객체를 생성
다시 말해, 객체를 생성하기 이전에 이미 프로퍼티와 메서드가 정해져있으며 생성 이후 동적 프로퍼티, 메서드 추가 가능
편리한 기능이지만 이론적으로 언어의 객체보다 생성과 프로퍼티 접근에 비용이 더 많이 드는 비효율적 방식.

따라서 V8 자바스크립트 엔진에서 동적 탐색 대신 히든클래스 hidden class 를 사용함!
*/

const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o, x); // 35장 "스프레이드 문법"

// lodash의 cloneDeep을 사용한 깊은 복사
//
const _ = require("lodash");
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);
