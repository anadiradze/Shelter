import createElement from "./createElement/createElement.js";
const burgerIcon = document.querySelector("#burger");
const notOnlySection = document.querySelector("#notOnlySection");
const headerinMain = document.querySelector("#headerinMain");

function disableScroll() {
  window.onscroll = function () {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
  };
}
function enableScroll() {
  window.onscroll = function () {};
}
function createHeaderAndNav() {
  const burgerMenuDiv = createElement({
    tag: "div",
    classList: ["burgerMenuDiv"],
    parent: notOnlySection,
    id: "burgerMenuDiv",
  });
  const header = createElement({
    tag: "header",
    classList: ["headerinB"],
    parent: burgerMenuDiv,
  });
  const logoAndBurger = createElement({
    tag: "div",
    classList: ["logoAndBurger"],
    parent: header,
  });
  const notOnlyLogo = createElement({
    tag: "div",
    classList: ["notOnlyLogoinB"],
    parent: logoAndBurger,
  });
  const notOnlyLogoA = createElement({
    tag: "a",
    classList: ["none"],
    parent: notOnlyLogo,
  });
  const notOnlyH1 = createElement({
    tag: "h1",
    classList: ["notOnlyH1", "hovered"],
    text: "Cozy House",
    parent: notOnlyLogoA,
  });
  const notOnlySubtitleH6 = createElement({
    tag: "h6",
    classList: ["notOnlySubtitleH6"],
    text: "Shelter for pets in Boston",
    parent: notOnlyLogo,
  });

  const burgerIconDiv = createElement({
    tag: "div",
    classList: ["burger"],
    parent: logoAndBurger,
  });
  const burgerImg = createElement({
    tag: "img",
    classList: ["burgerImginB", "rotate"],
    src: "../assets/images/Burger.png",
    parent: burgerIconDiv,
  });
  const nav = createElement({
    tag: "nav",
    classList: ["navInB"],
    parent: header,
  });
  const Ul = createElement({
    tag: "ul",
    classList: ["notOnlyUlinB"],
    parent: nav,
  });
  const Li1 = createElement({
    tag: "li",
    classList: ["notOnlyLi"],
    parent: Ul,
  });
  const A1 = createElement({
    tag: "a",
    classList: ["notOnlyAnchorinB", "underlined"],
    parent: Li1,
    text: "About the shelter",
    href: "#",
  });
  const Li2 = createElement({
    tag: "li",
    classList: ["notOnlyLi"],
    parent: Ul,
  });
  const A2 = createElement({
    tag: "a",
    classList: ["notOnlyAnchorinB"],
    parent: Li2,
    text: "Our pets",
    href: "../pets/index.html",
  });
  const Li3 = createElement({
    tag: "li",
    classList: ["notOnlyLi", "Li3"],
    parent: Ul,
  });
  const A3 = createElement({
    tag: "a",
    classList: ["notOnlyAnchorinB"],
    parent: Li3,
    text: "Help the shelter",
    href: "../pages/index.html#helpSection",
  });
  const Li4 = createElement({
    tag: "li",
    classList: ["notOnlyLi", "Li4"],
    parent: Ul,
  });
  const A4 = createElement({
    tag: "a",
    classList: ["notOnlyAnchorinB"],
    parent: Li4,
    text: "Contacts",
    href: "#footer",
  });
}
const notOnlyContentWrapper = document.querySelector(".notOnlyContentWrapper");
burgerIcon.addEventListener("click", (e) => {
  const removeEl = (e) => {
    for (let i = 0; i < burgerMenuDiv.length; i++) {
      burgerMenuDiv[i].classList.remove("burgerMenuDiv");
    }
    e.target.parentElement.parentElement.parentElement.remove();
    headerinMain.classList.remove("removeHeader");
  };

  notOnlySection.classList.add("notOnlySectionCovered");
  createHeaderAndNav();
  disableScroll();

  headerinMain.classList.add("removeHeader");
  const BurgerIconinB = document.querySelector(".rotate");
  const burgerMenuDiv = document.querySelectorAll("#burgerMenuDiv");
  BurgerIconinB.addEventListener("click", removeEl);
  BurgerIconinB.addEventListener("click", () => {
    notOnlySection.classList.remove("notOnlySectionCovered");
    enableScroll();
  });

  const Li3 = document.querySelector(".Li3");
  Li3.addEventListener("click", (e) => {
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    );
    headerinMain.classList.remove("removeHeader");
    notOnlySection.classList.remove("notOnlySectionCovered");
    enableScroll();
  });

  const Li4 = document.querySelector(".Li4");
  Li4.addEventListener("click", (e) => {
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    );
    headerinMain.classList.remove("removeHeader");
    notOnlySection.classList.remove("notOnlySectionCovered");
    enableScroll();
  });
});


fetch("../pets.json") 
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  console.log(document.querySelectorAll(".friendsflex"))