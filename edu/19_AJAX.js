
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

axios.get(url)
.then(response => {
  response.data.forEach((data, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', data.download_url);
    newImage.setAttribute('width', '300px');
  
    const container = document.querySelector('.container');
    container.appendChild(newImage);

  });

})
.catch(error => {
  console.log(error);
});

// async function test(url) {
//   try {
//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', data.download_url);
//     newImage.setAttribute('width', '300px');
//     const container = document.querySelector('.container');
//     container.appendChild(newImage);
//   } catch(error) {
//     console.log(error);
//   }
// }