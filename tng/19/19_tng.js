// function loadingToggle(flg) {
//   const loading = document.querySelector('loading');
//   if (flg) {
//     loading.classList.add('loading-on');
//   } else {
//     loading.classList.remove('loading-on');
//   }
// }

const loading = document.querySelector('.loading');

/*****
 * 
 * @param {boolean} flg
 * 
 * */ 
  document.querySelector('.request-box > button').addEventListener('click' , async () => {
  loading.classList.add(".loading-on");
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';


//  axios.get(url)
//  .then(res => {
//    res.data.forEach(item => {
//      constnewCard = document.createElement('div');
//      newCard.classList.add('card');
//      newCard.style.backgroundImage = `url(${item.download_url})`;

//      cardBox.appendChild(newCard);
//    });
//  })
//  .catch(err => {
//    console.error(err);
//  });
//});


try {
  const res = axios.get(url);
  res.data.forEach
  (item => {
      constnewCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;
      cardBox.appendChild(newCard);
});
} catch (err) {
      console.error(err);
} finally { () => {
      loading.classList.remove(".loading-on");
};
}

});