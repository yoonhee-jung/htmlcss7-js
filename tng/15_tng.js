
// timeCorner = setInterval(() => {
//   let time = new Date();
//   let hour = ('0' + time.getHours());
//   let minute = ('0' + time.getMinutes());
//   let second = ('0' + time.getSeconds());
//   const hourNum = Number(hour);
//   if (hourNum < 10 ) {
//     hour = ('0' + time.getHours());
//   } else if (hourNum {
//     hour = ('' + time.getHours());
//   }
//   const minuteNum = Number(minute);
//   if (minuteNum < 10 ) {
//     minute = ('0' + time.getMinutes());
//   } else {
//     minute = ('' + time.getMinutes());
//   }
//   const secondNum = Number(second);
//   if (secondNum < 10 ) {
//     second = ('0' + time.getSeconds());
//   } else {
//     second = ('' + time.getSeconds());
//   }
//   const timeP = hour + ':' + minute + ':' + second;
//   const timeNows = document.querySelector('.timeNows');
//   timeNows.innerHTML = timeP;
// })


// timeCorner = setInterval(() => {
//   let time = new Date();
//   let hour = ('0' + time.getHours());
//   let minute = ('0' + time.getMinutes());
//   let second = ('0' + time.getSeconds());
//   const hourNum = Number(hour);
//   if (hourNum >= 13 ) { 13시 이상이면 -12 넣어보기..
//     hour = (time.getHours() - 12);
//   } else if (hourNum > 9) {
//     hour = ('' + time.getHours());
//   } else {
//     hour = ('0' + time.getHours());
//    }
//   const minuteNum = Number(minute);
//   if (minuteNum < 10 ) {
//     minute = ('0' + time.getMinutes());
//   } else {
//     minute = ('' + time.getMinutes());
//   }
//   const secondNum = Number(second);
//   if (secondNum < 10 ) {
//     second = ('0' + time.getSeconds());
//   } else {
//     second = ('' + time.getSeconds());
//   }
//   const timeP = hour + ':' + minute + ':' + second;
//   const timeNows = document.querySelector('.timeNows');
//   timeNows.innerHTML = timeP;
// })

nowTimeIntoElement('#nowTime');

/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

function nowTimeIntoElementUntilMillieseoncds(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormatUntilMilliseconds();
}

/**
 * 현재시간을 `오전 hh:mi:SS.sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat() {
const now = new Date();

//return now.toLocaleTimeString();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let ampm = '';
if (hours < 12) {
  ampm = '오전';
} else {
  ampm = '오후';
  hours -= 12;
}

return `${ampm}` +
`${hours.toString().padStart(2, '0')}`
+ ':' + `${minutes.toString().padStart(2, '0')}`
+ ':' + `${seconds.toString().padStart(2, '0')}`;
}

function generateNowTimeFormatUntilMilliseconds() {
const now = new Date();

//return now.toLocaleTimeString();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();

let ampm = '';
if (hours < 12) {
  ampm = '오전';
} else {
  ampm = '오후';
  hours -= 12;
}

return `${ampm}` +
`${hours.toString().padStart(2, '0')}`
+ ':' + `${minutes.toString().padStart(2, '0')}`
+ ':' + `${seconds.toString().padStart(2, '0')}`
+ '.' + `${milliseconds.toString().padStart(3,'0')}`;
}

let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#nowTime');
  nowTime.textContent = generateNowTimeFormat();
}, 1000);

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
//  intervalNowTime = null;
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
nowTimeIntoElement('#nowTime');

clearInterval(intervalNowTime);

//if(intervalNowTime === null) {
  intervalNowTime = setInterval(() => {
    nowTimeIntoElement('#nowTime');
  }, 1000);
//  }
})

// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', ()=> {
  const container = document.querySelector('.reportContainer')
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  //newP.textContent = document.querySelector('#nowTime').textContent;
  container.appendChild(newP);
})

// 기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
})
