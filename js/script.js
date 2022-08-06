const m = document.querySelector('body');
const im = document.querySelectorAll('.movement');
const windowWidth = window.innerWidth / 3;
const windowWidth2 = window.innerWidth / 4;
const windowWidth3 = window.innerWidth / 5;
const windowHeight = window.innerHeight / 3;

m.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseX2 = e.clientX / windowWidth2;
  const mouseX3 = e.clientX / windowWidth3;
  const mouseZ = 1 - (e.clientX / 20000);
  const mouseZ2 = 1.2 + (e.clientX / 10000);
  const mouseR1 = (e.clientY / 500);
  const mouseY = e.clientY / windowHeight;
  const mouseY2 = mouseY * 10000;
  im[0].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(-${mouseR1}deg)`;
  im[1].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[2].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(-${mouseR1}deg)`;
  im[3].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[4].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[5].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[6].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[7].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[8].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[9].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
});

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

window.onscroll = function() {stickNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navtitle").style.top = "0";
  } else {
    document.getElementById("navtitle").style.top = "-150px";
  }
}

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - (window.innerHeight))
    );
  },
  false
);

