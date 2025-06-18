const filmData = {
  1: {
    name: "Autumn (hands on film)",
    iso: "ISO–200",
    star: "3.5",
    scene1: "scene/1a.png",
    scene2: "scene/1b.png"
  },
  2: {
    name: "Spring (hands on film)",
    iso: "ISO–200",
    star: "3.0",
    scene1: "scene/2a.png",
    scene2: "scene/2b.png"
  },
  3: {
    name: "Candido",
    iso: "ISO–200",
    star: "4.2",
    scene1: "scene/3a.png",
    scene2: "scene/3b.png"
  },
  4: {
    name: "Kentmere",
    iso: "ISO–100 ( 흑백 )",
    star: "4.0",
    scene1: "scene/4a.png",
    scene2: "scene/4b.png"
  },
  5: {
    name: "Fujifilm",
    iso: "ISO–200",
    star: "4.8",
    scene1: "scene/5a.png",
    scene2: "scene/5b.png"
  },
  6: {
    name: "Kodak vision3",
    iso: "ISO–200",
    star: "4.7",
    scene1: "scene/6a.png",
    scene2: "scene/6b.png"
  },
  7: {
    name: "Hoaska flowerpower",
    iso: "ISO–200",
    star: "3.1",
    scene1: "scene/7a.png",
    scene2: "scene/7b.png"
  },
  8: {
    name: "Maple",
    iso: "ISO–100",
    star: "4.3",
    scene1: "scene/8a.png",
    scene2: "scene/8b.png"
  },
  9: {
    name: "Kodak Gold",
    iso: "ISO–200",
    star: "5.0",
    scene1: "scene/9a.png",
    scene2: "scene/9b.png"
  },
  10: {
    name: "Kodak Aerocolor 4",
    iso: "ISO–100",
    star: "4.8",
    scene1: "scene/10a.png",
    scene2: "scene/10b.png"
  },
  11: {
    name: "Duo (hands on film)",
    iso: "ISO–400",
    star: "4.6",
    scene1: "scene/11a.png",
    scene2: "scene/11b.png"
  },
  12: {
    name: "Lisboa",
    iso: "ISO–500",
    star: "4.1",
    scene1: "scene/12a.png",
    scene2: "scene/12b.png"
  },
  13: {
    name: "candido",
    iso: "ISO–400",
    star: "4.5",
    scene1: "scene/13a.png",
    scene2: "scene/13b.png"
  },
  14: {
    name: "Kentmere",
    iso: "ISO–400 ( 흑백 )",
    star: "5.0",
    scene1: "scene/14a.png",
    scene2: "scene/14b.png"
  },
  15: {
    name: "Zombie",
    iso: "ISO–400",
    star: "3.9",
    scene1: "scene/15a.png",
    scene2: "scene/15b.png"
  },
  16: {
    name: "Aqua",
    iso: "ISO–400",
    star: "4.8",
    scene1: "scene/16a.png",
    scene2: "scene/16b.png"
  },
  17: {
    name: "Fujifilm",
    iso: "ISO–400",
    star: "4.2",
    scene1: "scene/17a.png",
    scene2: "scene/17b.png"
  },
  18: {
    name: "Iro",
    iso: "ISO–400",
    star: "4.5",
    scene1: "scene/18a.png",
    scene2: "scene/18b.png"
  },
  19: {
    name: "Kiro",
    iso: "ISO–400",
    star: "3.9",
    scene1: "scene/19a.png",
    scene2: "scene/19b.png"
  },
  20: {
    name: "Kodak vision3",
    iso: "ISO–400",
    star: "3.7",
    scene1: "scene/20a.png",
    scene2: "scene/20b.png"
  },
  21: {
    name: "Midnight (hands on film)",
    iso: "ISO–1600",
    star: "4.8",
    scene1: "scene/21a.png",
    scene2: "scene/21b.png"
  },
  22: {
    name: "Hoasca",
    iso: "ISO–800",
    star: "3.4",
    scene1: "scene/22a.png",
    scene2: "scene/22b.png"
  },
  23: {
    name: "Candido",
    iso: "ISO–800",
    star: "4.2",
    scene1: "scene/23a.png",
    scene2: "scene/23b.png"
  },
  24: {
    name: "Umi",
    iso: "ISO–800",
    star: "4.6",
    scene1: "scene/24a.png",
    scene2: "scene/24b.png"
  }
};


function getFilmIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("film");
}

function displayFilmDetails(id) {
  const numId = Number(id);
  const data = filmData[numId] || {};

  // film 이미지 경로는 자동으로 설정
  const filmImgPath = `film/${numId}.png`;
  document.getElementById("film-img").src = filmImgPath;

  // 씬 이미지 있을 때만 보여줌
  if (data.scene1) document.getElementById("scene1").src = data.scene1;
  if (data.scene2) document.getElementById("scene2").src = data.scene2;

  // 이름, ISO, 별점 있으면 넣고 없으면 기본값
  document.getElementById("film-name").textContent = "NAME: " + (data.name || `Film ${numId}`);
  document.getElementById("film-iso").textContent = data.iso || "ISO – Unknown";
  document.getElementById("film-star").textContent = data.star || "★–";
}

// 실행
document.addEventListener("DOMContentLoaded", () => {
  const id = getFilmIdFromURL();
  displayFilmDetails(id);
});

// 좌우 이동
function goPrev() {
  const current = Number(getFilmIdFromURL());
  const prev = current - 1;
  if (prev >= 1) {
    window.location.href = `film-detail.html?film=${prev}`;
  }
}

function goNext() {
  const current = Number(getFilmIdFromURL());
  const next = current + 1;
  if (next <= 40) {
    window.location.href = `film-detail.html?film=${next}`;
  }
}
