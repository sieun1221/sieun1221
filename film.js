

function scrollLeftById(id) {
  const container = document.getElementById(id);
  if (container) {
    container.scrollBy({ left: -600, behavior: 'smooth' });
  }
}

function scrollRightById(id) {
  const container = document.getElementById(id);
  if (container) {
    container.scrollBy({ left: 600, behavior: 'smooth' });
  }
}


// 이미지 클릭 시 상세 페이지로 이동
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.film-item img').forEach(img => {
    const src = img.getAttribute('src');
    const match = src.match(/(\\d+)\\.png$/);
    if (match) {
      const id = match[1];
      const link = document.createElement('a');
      link.href = `film-detail.html?film=${id}`;
      link.className = 'film-item';
      img.parentNode.replaceChild(link, img);
      link.appendChild(img);
    }
  });
});
