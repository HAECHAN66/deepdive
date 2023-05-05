function add(x,y){
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x,y) // 2 5
    return x + y;
}

add (2,5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // error


var var1= 1; //코드의 가장 바깥 영영에서 선언

if(true){
    var var2 = 2; // 코드 블록 내에서 선언
    if(true){
        var var3 = 3; // 중첩된 코드 블록 내에서 선언
    }
}

function foo(){
    var var4= 4; //함수 내에서 선언

    function bar(){
        var var5 = 5; // 중첩된 함수 내에서 선언
    }
}

console.log(); // 1~3까진 잘 됨. 4,5 error