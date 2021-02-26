var scrollToTopBtn = document.getElementById("scrollToTopBtn");

var rootElement = document.documentElement;
function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}
document.addEventListener("scroll", handleScroll);

// Botão Voltar ao Topo
function backTop() {
  var html = document.documentElement;
  html.scrollTop = 0;
}

// Animação Scroll
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 2) / 3;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 50)
  );
}

// Efeito fade
const pin = document.querySelectorAll("[data-opacity]");
const fadeClass = "fade-opacity";

function fadeUp() {
  const windowTop = window.onscroll + document.documentElement.scrollTop > 75;
  pin.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(fadeClass);
    } else {
      element.classList.remove(fadeClass);
    }
  });
}

fadeUp();

if (pin.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      fadeUp();
    }, 50)
  );
}
