//이벤트
function test() {
  alert('테스트');
};


//Property Listener(프로퍼티 리스너)
//동일한 이벤트를 여러 번 사용 불가
const btn2 = document.querySelector('#btn2');

btn2.onclick = () => {
  alert('버튼2222');
};

btn2.onclick = () => {
  alert('2222');
};

//addEventListener
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
  alert('버튼333');
});

btn3.addEventListener('click', () => {
  alert('33333');
});

btn3.removeEventListener('click', btn3Alert);

function btn3Alert(event) {
  console.log(event);
  alert('33333');
}

window.addEventListener('scroll', () => {
  console.log('scroll test');
});

// removeEventListener() : 이벤트 제거
//btn3.removeEventListener('click', () => {
//  alert('33333');
//})

// ------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  const regex = /^[0-9]+$/;

  const label = document.querySelector('#labelEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    label.textContent ='';
  }

//  console.log(regex.test(e.target.value));
});

// -----------------비밀번호 보이고 안보이고------------------
const chkPw = document.querySelector('#seePw');
chkPw.addEventListener('change', (e) => {
    //인풋 패스워드 접근
    const pw = document.querySelector('#pw');
    //체크여부 확인 분기
  if(e.target.checked) {
    //인풋 패스워드 type 속성 text로 변경
    pw.setAttribute('type', 'text');
    //인풋 패스워드 type 속성 password로 변경
  } else {
    pw.setAttribute('type', 'password');
  }
});

// const chkPw = document.querySelector('#seePw');
// chkPw.addEventListener('change', (e) => {
//     //인풋 패스워드 접근
//     const pw = document.querySelector('#pw');
//     //체크여부 확인 분기
//   if(e.target.checked) {
//     //인풋 패스워드 type 속성 text로 변경
//     pw.setAttribute('type', 'text');
//     //인풋 패스워드 type 속성 password로 변경
//   } else {
//     pw.setAttribute('type', 'password');
//   }
// });





