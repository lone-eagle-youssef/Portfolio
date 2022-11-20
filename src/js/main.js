let openMegamenuIcon = document.querySelector(
  "header .container .megamenu-icon i.open-menu"
);
let closeMegamenuIcon = document.querySelector(
  "header .container .megamenu-icon i.close-menu"
);
let megamenu = document.querySelector("header ul.megamenu");
let megamenuItems = document.querySelectorAll("header ul.megamenu li a");

openMegamenuIcon.onclick = () => {
  megamenu.style.top = "-192px";
  megamenu.style.opacity = "1";
  closeMegamenuIcon.style.display = "block";
  openMegamenuIcon.style.display = "none";
};

closeMegamenuIcon.onclick = () => {
  megamenu.style.top = "192px";
  megamenu.style.opacity = "0";
  openMegamenuIcon.style.display = "block";
  closeMegamenuIcon.style.display = "none";
};

megamenuItems.forEach((ele) => {
  ele.addEventListener("click", () => {
    megamenu.style.top = "192px";
    megamenu.style.opacity = "0";
    openMegamenuIcon.style.display = "block";
    closeMegamenuIcon.style.display = "none";
  });
});

// Writing Effect
var typed = new Typed("span.work", {
  strings: [
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Graphic Designer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Skills And To Up
let toUp = document.querySelector(".toup");
let aboutSection = document.getElementById("about");
let skillsSection = document.querySelector("#skills");
window.onscroll = () => {
  // Skills
  if (window.scrollY >= skillsSection.offsetTop) {
    document
      .querySelectorAll(".skills ul.skill-analysis li .myrow span")
      .forEach((ele) => {
        ele.style.width = ele.dataset.width;
      });
  }

  // To Up Btn
  if (window.scrollY >= aboutSection.offsetTop) {
    toUp.style.display = "flex";
  } else {
    toUp.style.display = "none";
  }
};

// Services Tips
let cardTextCloseList = document.querySelectorAll(
  ".services .cards .card .card-body ul.card-text .card-text-title i"
);
let viewMoreList = document.querySelectorAll(
  ".services .cards .card .card-body a.card-more"
);
let overlay = document.querySelector(".overlay");

viewMoreList.forEach((ele) => {
  ele.onclick = function () {
    document
      .querySelector(
        `.services .cards .card .card-body ul.card-text.${ele.dataset.open}-text`
      )
      .classList.add("active");
    overlay.classList.add("active");
  };
});

cardTextCloseList.forEach((element) => {
  element.onclick = function () {
    document
      .querySelector(
        `.services .cards .card .card-body ul.card-text.${element.dataset.close}-text`
      )
      .classList.remove("active");
    overlay.classList.remove("active");
  };
});

// Email Validate
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
let mail = document.querySelector(".contactme form.r-side input[type='mail']");
let submitBtn = document.querySelector(
  ".contactme form.r-side input[type='submit']"
);

mail.addEventListener("blur", () => {
  if (regex.test(mail.value)) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});

// Dark Theme

let sun = document.querySelectorAll("i.sun");
let moon = document.querySelectorAll("i.moon");

let dark = function () {
  moon.forEach((ele) => {
    ele.classList.add("active");
    console.log(ele);
  });
  sun.forEach((ele) => {
    ele.classList.remove("active");
    console.log(ele);
  });
  document.querySelector("body").classList.add("dark");
  window.localStorage.setItem("theme", "dark");
};

let sunny = function () {
  sun.forEach((ele) => {
    ele.classList.add("active");
    console.log(ele);
  });
  moon.forEach((ele) => {
    ele.classList.remove("active");
    console.log(ele);
  });
  document.querySelector("body").classList.remove("dark");
  window.localStorage.setItem("theme", "sunny");
};

if (window.localStorage.getItem("theme") == "dark") {
  dark();
} else if (window.localStorage.getItem("theme") == "sunny") {
  sunny();
} else {
  window.localStorage.setItem("theme", "sunny");
  sunny();
}

toUp.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Preloader
let preloader = document.querySelector(".preloader");
let preloaderText = document.querySelector(".preloader p");
window.onload = () => {
  preloader.classList.add("active");
  preloaderText.classList.add("active");
};
