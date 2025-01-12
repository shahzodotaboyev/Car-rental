let slideIndex = 1;
showSlides(slideIndex);

 
setInterval(() => {
  plusSlides(1);
}, 5000);

let touchStartX = 0;
let touchEndX = 0;

 
document.querySelector(".slideshow-container").addEventListener("touchstart", handleTouchStart, false);
document.querySelector(".slideshow-container").addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  if (touchEndX < touchStartX) {
    plusSlides(1); // O'ngdan chapga
  } else if (touchEndX > touchStartX) {
    plusSlides(-1); // Chapdan o'ngga
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transition = "opacity 1s"; // Sekin o‘tish effekti qo‘shildi
    slides[i].style.opacity = 0;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = 1;
  dots[slideIndex - 1].className += " active";

  // Boshqa sahifaga o'tgani bilinsin
  slides[slideIndex - 1].style.transform = "scale(1.05)";
  setTimeout(() => {
    slides[slideIndex - 1].style.transform = "scale(1)";
  }, 1000);
}
