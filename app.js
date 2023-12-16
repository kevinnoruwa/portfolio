const menuBtn = document.getElementsByClassName("menu-btn");

const mobilMenu = document.getElementsByClassName("mobil-menu");

const exitMenu = document.getElementsByClassName("close-icon");

const container = document.getElementsByClassName("big-container");
// const myfunc = () => {
//   container[0].classList.toggle("active");
// };

const clickedBtn = () => {
  mobilMenu[0].classList.toggle("active");
  mobilMenu[0].classList.toggle("flex");
  container[0].classList.toggle("active");
};

const clickedExit = () => {
  mobilMenu[0].classList.toggle("active");
  mobilMenu[0].classList.toggle("flex");
  container[0].classList.remove("active");
};

menuBtn[0].addEventListener("click", clickedBtn);

exitMenu[0].addEventListener("click", clickedExit);

let topTl = gsap.timeline();

topTl.fromTo(
  "#top .heading .name",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 4.5,
  }
);
