const nav = document.querySelector("#nav");

function handleMenu() {
  nav.classList.toggle("hidden");
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else document.removeEventListener("scroll", scrollHandler);
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranlate = 0;

    if (isLTR) {
      totalTranlate = translateX + initialTranslateLTR;
    } else {
      totalTranlate = -(translateX + initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranlate}px)`;
  }
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.6);

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("clicked");
    const ddid = element.getAttribute("aria-controls");
    const ddelement = document.getElementById(ddid);
    const arrow = element.querySelector("i");
    ddelement.classList.toggle("hidden");
    arrow.classList.toggle("-rotate-180");
  });
});
