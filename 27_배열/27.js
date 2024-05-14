// 27 배열

// 예제 27-07
const arr = [1, 2, 3];
// 반복문으로 자료구조를 순서대로 순회하기 위해서는 자료구조의 요소에 순서대로 접근할 수 있어야 하며
// 자료구조의 길이를 알 수 있어야 한다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

// 예제 27-08
// 선형 검색을 통해 배열에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1 반환
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1

// 예제 27-09
// 16.2절 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
} 
*/

// 10
const arr1 = [
  "string",
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];

// 11
const arr2 = [];
console.time("Array Performance Test");
for (let i = 0; i < 100000; i++) {
  arr2[i] = i;
}
console.timeEnd("Array Petformance Test");

const obj = {};
console.time("Object Performance Test");
for (let i = 0; i < 100000; i++) {
  obj[i] = i;
}
console.timeEnd("Object Performance Test");

// 13
const arr3 = [1, 2, 3];
console.log(arr3.length); // 3

// 요소 추가
arr3.push(4);
// 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr3.length); // 4

// 요소 삭제
arr3.pop();
console.log(arr3.length); // 3

// 14
const arr4 = [1, 2, 3, 4, 5];
arr4.length = 3;
console.log(arr4); // [ 1, 2, 3 ]

// 15
const arr5 = [1];
arr5.length = 3;
console.log(arr5.length); // 3
console.log(arr5); // [ 1, <2 empty items> ]

// 17
// 희소배열
const sparse = [, 2, , 4];
// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [ <1 empty item>, 2, <1 empty item>, 4 ]

// 배열의 sparse에는 인덱스가 0,2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/

// 20
const arr6 = [1, , 3];
// 희소배열의 length는 배열의 실제 요소 개수보다 언제나 크다.
console.log(arr6.length); // 3
console.log(arr6); // [ 1, <1 empty item>, 3 ]
console.log(arr6[1]); // undefined

// 25
new Array(1, 2, 3);
new Array({});

// 28
// 유사 배열 객체를 변환하여 배열을 생성
Array.from({ length: 2, 0: "a", 1: "b" });
// 이터러블을 변환하여 배열을 생성
Array.from("Hello");

// 31
const arr7 = [1, 2];
// 인덱스가 0인 요소를 참조
console.log(arr7[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr7[1]); // 2

// 32
const arr8 = [0];
// 배열의 요소의 추가
arr8[1] = 1;
console.log(arr8); // [ 0, 1 ]
console.log(arr8.length); // 2

// 33
// length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열 됨
arr8[100] = 100;
console.log(arr8); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr8.length); // 101
// 이때 인덱스로 요소에 접근하여 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
// 이미 요소가 존재하는 요소에 값을 재할당하면 요소값이 갱신

// 37
// 요소값의 갱신
arr8[1] = 10;
console.log(arr8); // [ 0, 10, <98 empty items>, 100 ]

// 38
const arrr = [];
// 배열 요소의 추가
arrr[0] = 1;
arrr["1"] = 2;

// 프로퍼티 추가
arrr["foo"] = 3;
arrr.bar = 4;
arrr[1.1] = 5;
arrr[-1] = 6;

console.log(arrr); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]
// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arrr);

// 40
const aee = [1, 2, 3];
aee.splice(1, 1);
console.log(aee); // [ 1, 3 ]

// length 프로퍼티가 자동 갱신된다.
console.log(aee.length); // 2

// 41
const arrrr = [1];

// push 메서드는 원본 배열(arr)을 직접 변경
arrrr.push(2);
console.log(arrrr);
// concat 메서드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환
const result = arrrr.concat(3);
console.log(arrrr);
console.log(result);
