const jangGi = document.createElement('li');
jangGi.textContent = '장기';
ul.appendChild(jangGi);
//const appleGame = document.querySelector('ul li:nth-child(4)');
const appleGame = document.querySelector('#apple');
ul.insertBefore(jangGi, appleGame);


// const jangGi = ul.innerHTML = '<li>수박게임</li><li>지뢰찾기</li><li>스페이스</li><li>장기</li><li>사과게임</li><li>체스</li><li>테트리스</li><li>고군분투</li><li>죽림고수</li><li>어메이징브릭</li>';

const evenColors = document.querySelectorAll('ul :nth-child(even)');
evenColors.forEach(evenColor => {evenColor.style.color = 'red'});

const oddColors = document.querySelectorAll('ul :nth-child(odd)');
oddColors.forEach(oddColor => {oddColor.style.color = 'blue'});

const beigeBg = document.querySelector('#ul li:last-child');
beigeBg.style.backgroundColor = 'beige';

  


//const targetApple = document.querySelector('#apple');
//const newJanggi = document.createElement('li');
//newJanggi.textContent = '장기';
//const parentUl = document.querySelector('#ul');
//parentUl.insertBefore(newJanggi, targetApple);

//const amazingLi = document.querySelector('ul :nth-child(10)');
//amazingLi.style.backgroundColor = 'beige';

//const listLi = document.querySelectorAll('#ul li');
//listLi.forEach((node, idx) => {
// if() {
// if(idx % 2 === 0) {
// node.style.color = 'blue';
//} else {
// node.style.color = 'red';
//}
//});

//function changeLiColor() {
//
//}

//function addLiChild(content) {
//  const newNode = document.createElement('li');
//  newNide.textContent = content;
//  parentUl.insertBefore(newNode, targetApple);
//}

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/lake.png'
};

//카드 구조 만들기
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
  

};





