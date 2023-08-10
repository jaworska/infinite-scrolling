const container = document.querySelector('.container');
const link = 'https://dog.ceo/api/breeds/image/random';

const loadImages = (numImages = 10) => {
    let i=0;
     while(i < numImages){
      fetch(link)
      .then(res => {
          if (res.ok) {
              return res.json()
          } else {
              return Promise.reject(`Http error: ${res.status}`);
          }
        })
        .then(res => {
          const div = document.createElement('div');
          const img =  document.createElement('img');
          img.src = res.message;
          div.append(img);
          container.append(div)
        })
        .catch(error => {
            console.error(error)
        });
        i++;
      }   
   }
 
loadImages();

 window.addEventListener('scroll', () => {
    if(Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
      loadImages();
    }
})