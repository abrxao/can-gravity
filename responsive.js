// O código Javascript permanece o mesmo
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentSlideEl = document.getElementById("current-slide");
const totalSlidesEl = document.getElementById("total-slides");
const warpAnimationEl = document.getElementById("warp-animation");

let currentSlide = 0;
const totalSlides = slides.length;

totalSlidesEl.textContent = totalSlides;

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
      // A animação do slide 4 continua funcionando
      if (slide.dataset.slide === "4" && warpAnimationEl) {
        warpAnimationEl.animate(
          [
            { transform: "scaleX(1) scaleY(1)" },
            { transform: "scaleX(1.1) scaleY(0.9)" },
            { transform: "scaleX(1) scaleY(1)" },
            { transform: "scaleX(0.9) scaleY(1.1)" },
            { transform: "scaleX(1) scaleY(1)" },
          ],
          {
            duration: 2000,
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      }
    } else {
      slide.classList.remove("active");
    }
  });
  currentSlideEl.textContent = currentSlide + 1;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (currentSlide < totalSlides - 1 && e.target.tagName == "BODY") {
    currentSlide++;
    updateSlides();
  }
});
document.addEventListener("click", (e) => {
  if (currentSlide > 0 && e.target.tagName == "BODY") {
    currentSlide--;
    updateSlides();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlides();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});

updateSlides();
