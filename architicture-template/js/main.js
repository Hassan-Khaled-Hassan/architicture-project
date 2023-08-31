let pagbtn = document.querySelector(
  ".navbar .collapse .navbar-nav .dropdown .nav-link"
);
let pags = document.querySelector(".navbar .nav-item .dropdown-menu ");
let arrow = document.querySelector(".arroww");
pagbtn.onclick = function () {
  if (pags.style.opacity == 1) {
    pags.style.opacity = 0;
  } else {
    pags.style.opacity = 1;
  }
};
window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
};

let tabs = document.querySelectorAll(
  ".project .container .g-4 .col-lg-4 .nav button"
);
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(
  ".project .container .g-4 .col-lg-8 .tab-pane"
);
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach(ele=>{
        ele.style.display="none";
    })
    document.getElementById(e.currentTarget.getAttribute("data-cont")).style.display="block";
  });
});
