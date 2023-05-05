// n 만큼 어떤 일을 반복한다.
function repeat1 (n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// 새롭게 n만큼 어떤 일을 반복한다.
function repeat2(n){
    // i를 출력한다.
    for (var i = 0; i <n; i++){
        // i가 홀수일 때만 출력한다.
        if(1 % 2)  console.log(i);
    }
}

repeat2(5); // 1 3

/* 로직을 미리 정의해두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다. */
// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n,f){
    for(var i=0; i < n; i++){
         
    }
}

var logAll = function (i) {
    console.log(i);
};

repeat(5, logAll);

var logAll = function(i){
    if(i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 1 3

// 익명 함수 리터럴을 콜백함수로 고차함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
	if(i % 2) console.log(i);
}); // 1 3

// 콜백을 사용한 이벤트 처리
// myButton을 클릭하면 콜백함수가 실행된다.
document.getElementById('myButton').addEventListener('click',function(){
    console.log('button cliked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 호출한다.
setTimeout(function(){
    console.log('1초 경과');
}, 1000);

// 콜백 함수를 사용하는 고차 함수 map
var res = [1,2,3].map(function(item){
    return item * 2;
});
console.log(res); // [2,4,6]

// 콜백 함수를 사용하는 고차함수 filter
res = [1,2,3].filter(function(item){
    return item %2;
});
console.log(res); // [1,3]

// 콜백함수를 사용하는 고차함수 reduce
res = [1,2,3].reduce(function(acc,cur){
    return acc + cur;
},0);
console.log(res); // 6