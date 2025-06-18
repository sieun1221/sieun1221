const slider = document.getElementById('slider');
const indicator = document.getElementById('indicator');
const slideLink = document.getElementById('slide-link');
const slides = slider.querySelectorAll('img');

let currentIndex = 0;
const slideCount = slides.length;

const slideLinks = [
  { text: '→ FILM', url: 'film.html' },
  { text: '→ CAMERA', url: 'camera.html' },
  { text: '→ POST', url: 'post.html' }
];

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

  // 링크 텍스트 및 주소 변경
  const { text, url } = slideLinks[currentIndex];
  slideLink.textContent = text;
  slideLink.href = url;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// 초기 상태 설정
updateSlider();
