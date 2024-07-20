const btn = document.querySelector('#btn');
const h1 = document.querySelector('#h1');

const showH1 = (event) => {  
  if(h1?.classList.contains('hide')) {
    h1.classList.remove('hide');
    return;
  }

  h1.classList.add('hide');
}

btn.addEventListener('click', showH1);
