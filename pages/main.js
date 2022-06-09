import createElement from "./createElement/createElement.js";
//alert("in process, please check my task in several hours")
const burgerIcon = document.querySelector("#burger");
const notOnlySection = document.querySelector("#notOnlySection");
const headerinMain = document.querySelector("#headerinMain");
function disableScroll() {
  window.onscroll = function () {
    window.scrollTo(window.scrollX, window.scrollY);
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
  BurgerIconinB.addEventListener("click", removeEl);
  BurgerIconinB.addEventListener("click", () => {
    notOnlySection.classList.remove("notOnlySectionCovered");
    enableScroll();
  });
  const burgerMenuDiv = document.querySelector("#burgerMenuDiv");

  function removeDivWhenonDarkenedArea() {
    window.addEventListener("mouseup", function (event) {
      if (burgerMenuDiv != null) {
        if (
          event.target != burgerMenuDiv &&
          event.target.parentNode != burgerMenuDiv
        ) {
          burgerMenuDiv.remove();
          headerinMain.classList.remove("removeHeader");
          notOnlySection.classList.remove("notOnlySectionCovered");
          enableScroll();
        }
      }
    });
  }
  removeDivWhenonDarkenedArea();

  const Li3 = document.querySelector(".Li3");
  Li3.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    headerinMain.classList.remove("removeHeader");
    notOnlySection.classList.remove("notOnlySectionCovered");
    enableScroll();
  });

  const Li4 = document.querySelector(".Li4");
  Li4.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
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
    createSlider(data);
  });


const arrowRightM = document.querySelector(".arrowRightMain");
const arrowLeftM = document.querySelector(".arrowLeftMain");

function createSlider(data) {
  const friendsImage = document.querySelectorAll("#friendsImage");
  const friendsName = document.querySelectorAll("#friendsName");
  const LearnMore = document.querySelectorAll("#LearnMore");
  if(arrowRightM !== null || arrowLeftM!==null){

  if (window.screen.availWidth >= 1280) {
    //ARROW RIGHT 1280
    let count = 0;
    arrowRightM.addEventListener("click", () => {
      for (let i = 0; i < 2; i++) { //0,1
        friendsName[i].textContent = friendsName[i + 1].textContent;
        friendsImage[i].setAttribute(
          "src",
          friendsImage[i + 1].attributes.src.nodeValue
        );
      }
      friendsName[2].textContent = data[count].name;
      friendsImage[2].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });

    //ARROW LEFT 1280
    arrowLeftM.addEventListener("click", () => {
      for (let i = 2; i >= 1; i--) {
        friendsName[i].textContent = friendsName[i - 1].textContent;
        friendsImage[i].setAttribute(
          "src",
          friendsImage[i - 1].attributes.src.nodeValue
        );
      }
      friendsName[0].textContent = data[count].name;
      friendsImage[0].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    //ARROW RIGHT >= 768
    let count = 0;
    arrowRightM.addEventListener("click", () => {
      for (let i = 0; i <= 1; i++) {
        friendsName[i].textContent = friendsName[i + 1].textContent;
        friendsImage[i].setAttribute(
          "src",
          friendsImage[i + 1].attributes.src.nodeValue
        );
      }
      friendsName[1].textContent = data[count].name;
      friendsImage[1].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });

    //ARROW LEFT >= 768
    arrowLeftM.addEventListener("click", () => {
      for (let i = 1; i > 0; i--) {        friendsName[i].textContent = friendsName[i - 1].textContent;
        friendsImage[i].setAttribute(
          "src",
          friendsImage[i - 1].attributes.src.nodeValue
        );
      }
      friendsName[0].textContent = data[count].name;
      friendsImage[0].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });
  }
  if (window.screen.availWidth < 768 && window.screen.availWidth >= 320) {
    let count = 0;
    // ARROW RIGHT  >= 320
    arrowRightM.addEventListener("click", () => {
      friendsName[0].textContent = data[count].name;
      friendsImage[0].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });
    // ARROW LEFT  >= 320
    arrowLeftM.addEventListener("click", () => {
      friendsName[0].textContent = data[count].name;
      friendsImage[0].setAttribute("src", data[count].img);
      count++;
      if (count > 7) {
        count = 0;
      }
    });
  }
}
}

export { disableScroll, enableScroll };
