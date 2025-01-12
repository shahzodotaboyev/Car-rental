let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  plusSlides(1);
}, 7000);

let touchStartX = 0;
let touchEndX = 0;

document
  .querySelector(".slideshow-container")
  .addEventListener("touchstart", handleTouchStart, false);
document
  .querySelector(".slideshow-container")
  .addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  if (touchEndX < touchStartX) {
    plusSlides(1);
  } else if (touchEndX > touchStartX) {
    plusSlides(-1);
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
    slides[i].style.transition = "opacity 1s";
    slides[i].style.opacity = 0;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = 1;
  dots[slideIndex - 1].className += " active";

  slides[slideIndex - 1].style.transform = "scale(1.05)";
  setTimeout(() => {
    slides[slideIndex - 1].style.transform = "scale(1)";
  }, 1000);
}
let darkMode = () => {
  let sun = document.querySelector(".bxs-sun, .bx-moon");
  let body = document.querySelector(".conteiner");
  let header = document.querySelector("header");
  let links = document.querySelectorAll(".links");
  let select = document.querySelectorAll(".select");
  let options = document.querySelectorAll("option");
  let number = document.querySelector(".users");
  let darkmode = document.querySelector(".darkMode");
  let hamburgerMenu = document.querySelector(".hamburgerMenu");
  let h4 = document.querySelector("h4");
  let h3 = document.querySelector("h3");
  if (h3) {
    h3.classList.toggle("colorBlack");
  }

  if (h4) {
    h4.classList.toggle("colorBlack");
  }
  if (options.length > 0) {
    options.forEach((option) => {
      option.classList.toggle("colorBlack");
    });
  }

  if (darkmode) darkmode.classList.toggle("bg-white");

  if (select.length > 0) {
    select.forEach((selectElement) => {
      selectElement.classList.toggle("colorBlack");
    });
  }

  if (links.length > 0) {
    links.forEach((link) => {
      link.classList.toggle("colorBlack");
    });
  }

  if (hamburgerMenu) hamburgerMenu.classList.toggle("bg-white");

  if (header) header.classList.toggle("bg-white");

  if (body) body.classList.toggle("bgWhite");

  if (number) number.classList.toggle("colorBlack");

  if (sun) {
    if (sun.classList.contains("bxs-sun")) {
      sun.classList.remove("bxs-sun");
      sun.classList.add("bx-moon");
    } else {
      sun.classList.remove("bx-moon");
      sun.classList.add("bxs-sun");
    }
  }
};

let menu = () => {
  let menuright = document.querySelector(".hamburgerMenu");
  menuright.classList.add("right0");
};
let closeMenu = () => {
  let menuright = document.querySelector(".hamburgerMenu");
  menuright.classList.remove("right0");
};
