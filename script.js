var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;

var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

//Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth; //Lấy kích thước chiều rộng của 1 element

//Tính tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;

//Cập nhật css
carouselInner.style.width = `${totalWidth}px`;

var position = 0;
//Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  //Khi bấm vào nút next => Trừ đi kích thước của 1 item
  if (Math.abs(position) + itemWidth * 2 > totalWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
  ++count;
  dots.children[count].classList.add("color");
  dots.children[count - 1].classList.remove("color");
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) < itemWidth) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
  --count;
  dots.children[count].classList.add("color");
  dots.children[count + 1].classList.remove("color");
});

var isDraggStar = false;
var starX;
var endX;
var count = 0;
var silde;
var aB;
const draggingstar = function (e) {
  translaTe = carouselInner.style.translaTe;
  e.preventDefault();
  isDraggStar = true;
  carouselInner.addEventListener("mouseup", draggingBreak);
  if (!isDraggStar) {
    return;
  }
  starX = e.clientX;
  carouselInner.addEventListener("mousemove", draggingLeft);
};
carouselInner.addEventListener("mousedown", draggingstar);

const draggingLeft = function (e) {
  focusX = e.offsetX;
};

const draggingBreak = function (e) {
  endX = e.clientX;
  isDraggStar = false;

  aB = endX - starX;

  if (aB < -100 && aB !== 0) {
    if (Math.abs(position) + itemWidth * 2 > totalWidth) {
      return;
    }
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  } else if (aB < 100 && aB !== 0) {
    carouselInner.style.translate = `0px`;
  } else if (aB > -100 && aB !== 0) {
    if (Math.abs(position) < itemWidth) {
      return;
    }
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
  } else if (aB > 100 && aB !== 0) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
};

var numberDots = carouselInner.children.length;
var dots = document.querySelector(".carousel--button");

for (let i = 0; i < numberDots; i++) {
  const liElement = document.createElement("li");
  // Thêm phần tử <li> mới vào phần tử <ul>
  dots.appendChild(liElement);
}
dots.children[0].classList.add("color");
var arr = [];
arr = dots.children;
