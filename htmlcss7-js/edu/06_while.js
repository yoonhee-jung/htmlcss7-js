
let cnt = 0;

// while(cnt < 3) {
//   console.log(cnt);
//   cnt++;
  // console.log('while문 시작');
  
  // if(){
  //   break;
  // }
  // console.log('while문 끝');

// }

while(true) {
  console.log(cnt);
  cnt++;
  // console.log('while문 시작');
  
  if(cnt >= 3){
    break;
  }
  // console.log('while문 끝');

}

// 구구단 2단

// let dan = 2;
// let lineCnt = 1;

// while(true) {
//   if(lineCnt <= 9) {
//     console.log(`${dan} X ${lineCnt} = ${dan*lineCnt}`);
//     lineCnt += 1;
//   }
// }

let multiPlier = 1;

// while(multiPlier < 10) {
//   console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);
//   multiPlier++;
// }

// do-while문
do {
  console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

  multiPlier++;
} while(multiPlier < 10);

