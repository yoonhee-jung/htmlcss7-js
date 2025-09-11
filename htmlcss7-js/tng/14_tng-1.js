

const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  event.preventDefault(); 

  const contents = document.querySelectorAll('input');

    contents.forEach(content => {
    document.body.append(content.value);
    })

})