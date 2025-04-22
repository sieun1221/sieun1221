const slider = document.getElementById('slider');
const indicator = document.getElementById('indicator');
const slides = slider.querySelectorAll('img');
let currentIndex = 0;
const slideCount = slides.length;

// 인디케이터 dot 생성
slides.forEach((_, idx) => {
  const dot = document.createElement('div');
  dot.classList.add('indicator-dot');
  if (idx === 0) dot.classList.add('active');
  indicator.appendChild(dot);
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // 인디케이터 업데이트
  const dots = indicator.querySelectorAll('.indicator-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

