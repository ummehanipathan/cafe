var imgchanger = document.querySelector(" .five-section");
const img = ["url(c-1.jpeg)","url(c-2.webp)","url(cc-33.jpg)","url(ff-img-5.jpg)",]
  

  function bgchanger(index){

    imgchanger.style.backgroundImage = img[index];
  }