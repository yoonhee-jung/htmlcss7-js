//아래처럼 별을 찍어주세요.
// 예시)

// *****
// *****
// *****
// *****
// *****

// console.log('\*\*\*\*\*');
// console.log('\*\*\*\*\*');
// console.log('\*\*\*\*\*');
// console.log('\*\*\*\*\*');
// console.log('\*\*\*\*\*');

// console.log('*****');

// for(let i = 1; i < 6; i++) { 
//   console.log('*****');
// }

//힌트
// let star = '*';
// let makedStar = '';

// makedStar += star;
// makedStar += star;
// makedStar += star;
// makedStar += star;
// makedStar += star;

// console.log(makedStar);



//내가 만든 별 5개 5줄..
// for (let star = '*'; star.length <= 5 ; star += '*' ) {
//     let makedStar = '';
//     makedStar += star;
//     if (star.length < 5)
//       { continue; }
//   for (let i = 0; i <= 4 ; i++ ) {
//     console.log(makedStar);
//   }
// }

// for (let i = 0; i < 1 ; i++ ) {
//     let star = '';
//   for (let z = ''; z <= 4 ; z++ ) {
//       star += '*';
//       console.log(star);
//     }  
//   }

//정답
for (let lineCnt = 0; lineCnt < 5; lineCnt++) {
  let makedStar = '';
  for(let starCnt = 0; starCnt <= lineCnt; starCnt++){
    makedStar += '*';
  }
  console.log(makedStar);
}

// let makedStar = '';
// for(let line = 0; line < 5; line++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// for(let i = 0; i < 5; i++) { 
//   let makedStar = '';
//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// let star = '*';

// for(let i = 0; i < 5; i++) { 
//   let makedStar = '';
//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }



// for(let i = 1; i < 6; i++) { 
//   console.log('*****');
// } i가 분기마다 1씩 증가

// for(let i = 1; i < 6; i+=2) { 
//   console.log('*****');
// } i가 분기마다 2씩 증가



//아래처럼 별을 찍어주세요.
//예시)
//    *
//   **
//  ***
// ****
//***** 


//정답
let makedStar = '';

for (let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}