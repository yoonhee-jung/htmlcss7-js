// switch 문

let food = '돈까스';
let foodKinds = '';
let tt = 0; //데이터 타입? 정해진 룰 아니고 관습.. 어떻게 내 코드를 더 쉽게 분석할 수 있을까..

switch(food) {
  case '돈까스':
    foodKinds = '경양식';
    break;
  case '김치찌개':
    foodKinds = '한식';
    break;
  case '초밥':
    foodKinds = '일식';
    break;
  default:
    foodKinds = '기타';
    break;
}

console.log(foodKinds);

// if(food === '돈까스') {
//   foodKinds = '경양식';
// } else if(food === '김치찌개') {
//   foodKinds = '한식';
// } else if(food === '초밥') {
//   foodKinds = '일식';
// } else {
//   foodKinds = '기타';
// }

