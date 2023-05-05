for (var i = 0; i < 2; i++){
    console.log(i);
}

/*  ';;'은 무한루프.
ex) for (;;) {...} */

// 중첩문

for(var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if(i + j === 6) console.log('[${i},${j}]');
    }
}
