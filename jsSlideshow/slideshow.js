let slide = 0;

function showImage(n = 0){
  let swap = true;
  if((slide === 4 && n === 1) || (slide === 0 && n === -1)){
    swap = false;
  }
  slide = n === 1 ? Math.min(slide + 1, 4) : Math.max(slide - 1, 0);

  let images = document.getElementsByClassName("slides");

  for(let i = 0; i < images.length && swap; i++){
    images[i].className += " fadeOut";
    setTimeout(function() {
        images[i].className = "slides"
        if(i === slide){
          images[i].style.display = "";
        } else {
          images[i].style.display = "none";
        }
    }, 500);
  }
}