const container = document.querySelector('.container');
const link = 'https://dog.ceo/api/breeds/image/random';

function loadImages(numImages = 10){
    let i=0;
     while(i < numImages){
     fetch(link)
     .then(response=>response.json())
     .then(data=>{
        const div = document.createElement('div');
        const img =  document.createElement('img');
        img.src = data.message;
        div.appendChild(img);
        container.appendChild(div)
     })
     i++;
    }   
   }
 
 loadImages();

 window.addEventListener('scroll',()=>{
    if(Math.ceil(window.scrollY + window.innerHeight) >= 
      document.documentElement.scrollHeight){
      loadImages();
    }
})