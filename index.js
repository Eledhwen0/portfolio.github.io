


// ----------------------- GSAP Animation ----------------------

// ---------- intro animation ------------
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text-anim,.red-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(
  ".hero-content .title-light",
  { x: "200%", y: "200%", scale: "2" },
  { x: "0%", scale: "1", y: "0%", duration: 1, delay: 0.5 }
);
tl.fromTo(".big-title", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(
  ".hero-content .title",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 0.5 },
  "-=1"
);
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tl.fromTo(
  ".hero-content .red-button",
  { opacity: 0 },
  { opacity: 1, duration: 1.5, delay: 0.5 },
  "-=1"
);
// ----------------------- Hamburger Animation ----------------------

const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".navbar .nav-items a");
const navItems = document.querySelector(".nav-items");

hamburger.onclick = function (e) {
  navItems.classList.toggle("active");
}
// to close hamburger on the click
navItem.forEach((navs) => {
  navs.onclick = function (e) {
    // if(navItems.classList.contains('active'))
    navItems.classList.remove("active");
  }
})



// Nav Section Highlight
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar .nav-items .nav-item");

window.addEventListener('scroll',()=> {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 80;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset+height ){
      navLink.forEach((links) => {
        links.classList.remove('active');
      const ele = document.querySelector('.navbar .nav-items a[href*='+ id +']');
      if(ele !== null){
        ele.firstChild.classList.add('active');
      }
      });
    }
  });
});


// ----------------------- Hero Ball Animation ----------------------

const card = document.querySelector(".container");
// moving animation event
card.addEventListener("mousemove", (e) => {
  // console.log(window.innerWidth); // viewport width
  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
  // let xAxis = (e.pageX/6-60);
  // let yAxis = (e.pageY/6-60);

  // select the object to move
  const shapeList = document.getElementsByClassName("ball");

  for (let i = 0; i < shapeList.length; i++) {
    let element = shapeList[i];

    // element = element.querySelector(".ball:nth-child("+(i+1)+")");
    // console.log(xAxis, yAxis);
    if (i % 2 == 0) {
      element.style.transform = `translate3d(${xAxis + 50}px, ${
        yAxis - 10
      }px , 10px)`;
    } else {
      element.style.transform = `translate3d(${yAxis - 10}px, ${
        xAxis + 50
      }px , -10px)`;
    }
    // element.style.backgroundPosition = `${xAxis/5}px ${yAxis/5}px `;
    // element.style.boxShadow = `${yAxis/5}px ${xAxis/5}px 5px -2px rgb(0, 0, 0,40%)`;
  }
});

//----------- ON SCROLL ANIMATION -----------------

// ------ section-title
// let classLi = document.getElementsByClassName("page-title");

// for (let i = 0; i < classLi.length; i++) {
//   const element = classLi[i];

//   window.addEventListener("scroll", () => {
//     if (onScrollView(element, "on-scroll-view-bottom")) {
//       element.classList.add("on-scroll-view-bottom");
//     }
//   });
// }

// ------ skill card
let section = document.querySelector(".skill-box-wrap");

let cardBarLi = document.querySelectorAll(
  ".skill-progress-bar .skill-progression"
);
let cardValLi = document.querySelectorAll(".skill-progress-percentage");
let cardLi = document.querySelectorAll(".skill-card");
let start = [];
cardLi.forEach((x,i) => {start[i] = false});

window.onscroll = function () {
  for (let i = 0; i < cardLi.length; i++) {
    const element = cardLi[i];
      if (!start[i] && onScrollView(element, "on-scroll-view-bottom")) {
        element.classList.add("on-scroll-view-bottom");
        const cardVal = element.querySelector(".skill-progress-percentage");
          const cardBar = element.querySelector(".skill-progress-bar .skill-progression");
          startCount(cardVal, cardBar);
          start[i] = true;
      }
      
  }
};

function startCount(val, progressBar) {
  const span = progressBar;
  const percentage = span.dataset.percent;

  // color
  span.style.width = percentage + "%";

  // update percentage
  let progressVal = 0;
  let progressEndVal = percentage;
  let speed = 30;

  setInterval(() => {
    if (progressVal == progressEndVal) {
      clearInterval();
    } else {
      progressVal++;
      val.innerHTML = progressVal + "%";
    }
  }, speed);
}


// ------ para

let paraLi = document.getElementsByClassName("para");

for (let i = 0; i < paraLi.length; i++) {
  const element = paraLi[i];
  window.addEventListener("scroll", () => {
    if (onScrollView(element, "on-scroll-view-bottom")) {
      element.classList.add("on-scroll-view-bottom");
    }
  });
}
function onScrollView(ele, animeName) {
  const introEle = ele;

  // Distance of text relative to the window
  const introPos = introEle.getBoundingClientRect().top;

  // const screenPos = window.innerHeight; // Current browser viewport height
  const screenPos = window.innerHeight / 1.1;

  if (introPos < screenPos) {
    introEle.classList.add(animeName);
    return true;
  }

  // console.log(introPos);   -> 1020
  // console.log(screenPos);  -> 1000
}

// Progress BAR Animation
function progressBarAnime() {
  let progressBar = document.querySelectorAll(
    ".skill-progress-bar .skill-progression"
  );
  let valContainer = document.querySelectorAll(".skill-progress-percentage");

  for (let i = 0; i < progressBar.length; i++) {
    const span = progressBar[i];
    const percentage = span.dataset.percent;

    // color
    span.style.width = percentage + "%";

    // update percentage
    let progressVal = 0;
    let progressEndVal = percentage;
    let speed = 30;

    setInterval(() => {
      if (progressVal == progressEndVal) {
        clearInterval();
      } else {
        progressVal++;
        valContainer[i].innerHTML = progressVal + "%";
      }
    }, speed);
  }
}

// Button Animation

const btnLi = document.querySelectorAll("button");
btnLi.forEach((btn) => btn.addEventListener("mousemove", onmousemove));

function onmousemove(e) {
  const btn = e.currentTarget;
  const x = e.clientX - btn.getBoundingClientRect().left;
  const y = e.clientY - btn.getBoundingClientRect().top;

  // console.log(x);

  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
}

// FAQ CARD ANIMATION
let contentList = document.getElementsByClassName("faq-card-wrap");
for (let i = 0; i < contentList.length; i++) {
  let ele = contentList[i];

  ele.addEventListener("click", () => {
    // card open close
    document.querySelectorAll(".faq-content-box")[i].classList.toggle("show");

    // arrow flip
    let angle = document.getElementsByTagName("svg")[i].style.transform;
    if (angle === "rotate(0deg)") {
      angle = "rotate(90deg)";
    } else {
      angle = "rotate(0deg)";
    }
    document.getElementsByTagName("svg")[i].style.transform = angle;

    // arrow color change
    let val = document.getElementsByTagName("path")[i].getAttribute("stroke");

    if (val === "currentColor") {
      val = "#9B0723";
    } else {
      val = "currentColor";
    }
    document.getElementsByTagName("path")[i].setAttribute("stroke", val);
  });
}


