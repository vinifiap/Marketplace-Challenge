/* carrossel */ 


let slideIndex = 0;
  showSlides(slideIndex);

  function moveSlide(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.transform = "translateX(" + (-slideIndex * 100) + "%)";
    }
  }
/* carrossel */