// if 문
// 조건에 따라서 서로 다른 처리를 하는 문법 (분기문)
// 조건이 참이면 해당 처리를 진행하고, 거짓이면 다음 처리를 이어감
let rank = 5;
let flgRankOne = rank === 1;

if(flgRankOne) {
  console.log('1등 입니다.');
}else if(rank === 2) {
  console.log('2등 입니다.');
}else if(rank === 3) {
  console.log('3등 입니다.');
}else {
  if(rank === 5 || rank === 7) {
    console.log('특별상 입니다.');
  } else {
    console.log('등수 외입니다.');
  }
}

// if(rank === 1) {
//   console.log('1등 입니다.');
// }

// if(rank === 2) {
//   console.log('2등 입니다.');
// }

if(flgRankOne) {
  console.log('챔피언');
}

let answer1 = 2;
let answer2 = 3;
let answer1check = 2 === 2;
let answer2check = 3 === 5;
let score = 0;

if (answer1check === true) {
  if(answer2check === true){
  console.log('100점');
  }else {
  console.log('50점');
  }
} else {
 if(answer2check === false){
  console.log('0점');
  }else {
  console.log('50점');
  }
}

// if(answer1 === 2 && answer2 === 5) {
//   score = 100;
// } else if (answer1 === 2 || answer2 === 5) {
//   score = 50;

if(answer1 === 2) {
  score += 50;
}

if(answer2 === 5) {
  score += 50;
}

console.log(score + '점');

