import createElement from "../pages/createElement/createElement.js";
const burgerIcon = document.querySelector("#burger");
const notOnlySection = document.querySelector("#MainHeaderSection");
const headerinMain = document.querySelector("#headerinPets");

function disableScroll() {
  window.onscroll = function () {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
  };
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
    classList: ["notOnlyH1inPets", "hovered"],
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
    classList: ["notOnlyAnchorinB"],
    parent: Li1,
    text: "About the shelter",
    href: "../pages/index.html",
  });
  const Li2 = createElement({
    tag: "li",
    classList: ["notOnlyLi"],
    parent: Ul,
  });
  const A2 = createElement({
    tag: "a",
    classList: ["notOnlyAnchorinB", "underlined"],
    parent: Li2,
    text: "Our pets",
    href: "./index.html",
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

burgerIcon.addEventListener("click", (e) => {
  const removeEl = (e) => {
    for (let i = 0; i < burgerMenuDiv.length; i++) {
      burgerMenuDiv[i].classList.remove("burgerMenuDiv");
    }
    e.target.parentElement.parentElement.parentElement.remove();
    notOnlySection.classList.remove("notOnlySectionCovered");
    headerinMain.classList.remove("removeHeader");
  };

  notOnlySection.classList.add("notOnlySectionCovered");
  createHeaderAndNav();
  disableScroll();

  headerinMain.classList.add("removeHeader");
  const BurgerIconinB = document.querySelector(".rotate");
  const burgerMenuDiv = document.querySelectorAll("#burgerMenuDiv");
  BurgerIconinB.addEventListener("click", removeEl);

  const Li3 = document.querySelector(".Li3");
  Li3.addEventListener("click", removeEl);
  Li3.addEventListener("click", enableScroll);

  const Li4 = document.querySelector(".Li4");
  Li4.addEventListener("click", removeEl);
  Li4.addEventListener("click", enableScroll);
});
