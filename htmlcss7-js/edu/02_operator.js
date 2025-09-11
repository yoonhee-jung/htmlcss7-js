//산술 연산자

let num1 = 5;
let num2 = 10;

console.log(num1 + num2);  //더하기
console.log(num1 - num2);  //빼기
console.log(num1 * num2);  //곱하기
console.log(num1 / num2);  //나누기
console.log(num1 % num2);  //나머지

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';
console.log(lastName + firstName);
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위|후위)증감 연산자
let num4 = 0;
console.log(++num4);
console.log(num4);

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// ==(데이터 타입 체크 X), ===(데이터 타입 체크 O)
console.log(1 == '1');
console.log(1 != '1');
console.log(1 === '1');
console.log(1 !== '1');

// 논리 연산자
console.log((1 === 1) && (1 === 0));
console.log((1 === 1) || (1 === 0));
console.log(!(1 === 1));

// 삼항연산자
// 조건식? 참일 경우 처리 : 거짓일 경우 처리
let rank = 2;
let result = rank >= 2 ? '통과' : '거부';
console.log(result);

