const spanEl = document.querySelector("main h2 span");
const txtArr = [
  "Web Publisher.",
  "Front-End Developer.",
  "Web UI Designer.",
  "UX Designer.",
  "Back-End Developer.",
];
let index = 0;
let currentTxt = txtArr[index].split("");

console.log(currentTxt);

function writeTxt() {
  spanEl.textContent += currentTxt.shift(); //1
  if (currentTxt.length !== 0) {
    //2
    setTimeout(writeTxt, Math.floor(Math.random() * 200));
  } else {
    //3
    currentTxt = spanEl.textContent.split("");
    setTimeout(deleteTxt, 3000);
  }
}
writeTxt();

function deleteTxt() {
  currentTxt.pop();
  spanEl.textContent = currentTxt.join("");
  if (currentTxt.length !== 0) {
    setTimeout(deleteTxt, Math.floor(Math.random() * 100));
  } else {
    index = (index + 1) % txtArr.length;
    currentTxt = txtArr[index].split("");
    writeTxt();
  }
}

const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  const browserScrollY = window.pageYOffset;
  if (browserScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
});

const animationMove = function (selector) {
  const targetEl = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({ top: targetScrollY, behavior: "smooth" });
};

const scrollMoveEl = document.querySelectorAll(
  "[data-animation-scroll='true']"
);
for (let i = 0; i < scrollMoveEl.length; i++) {
  scrollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}
