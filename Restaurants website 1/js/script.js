let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	menu.classlist.toggle('fa-times');
	navbar.classlist.toggle('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();



const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);