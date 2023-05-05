// 월을 영어로 변환한다. (11 -> 'Novemver')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    break;
    // 2~11 month
    case 12: monthName = 'December';
    break;
    default : monthName = 'Invalid month';
}

console.log(monthName); // November


var year = 2000; // 2000년은 윤월으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어떨어지는 해(2000 ...)는 윤년이다.
        // 2. 연도가 4로 나누어지더라도 연도가 100으로 나누어떨어지는 해 (2000, 2100...)는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 24000...)는 윤년이다.
        days = ((year % 4 === 0 && 100 !== 0) ?? (year % 400 === 0)) ? 29 : 28;
        break;
    default :
    console.log('Invalid month');
}

console.log(days); // 29