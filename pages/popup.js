import createElement from "./createElement/createElement.js";
import { enableScroll } from "./main.js";
const friendElements = document.querySelectorAll(".friendsflex");
const friendsSection = document.querySelector("#friendsSection");

function createPopupEl({
  name,
  image,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites,
}) {
  const section = createElement({
    tag: "section",
    classList: ["popupSection"],
    parent: friendsSection,
    id: "popupSection",
  });
  const popupContainer = createElement({
    tag: "div",
    classList: ["popupContainer"],
    parent: section,
  });
  const x = createElement({
    tag: "img",
    classList: ["popupCloseBtn"],
    parent: popupContainer,
    src: "../assets/images/modal_close_button.png",
  });
  const main = createElement({
    tag: "main",
    classList: ["popupMain"],
    parent: popupContainer,
    id: "popupMain",
  });
  const img = createElement({
    tag: "img",
    classList: ["popupImg"],
    parent: main,
    src: `${image}`,
  });
  const article = createElement({
    tag: "article",
    classList: ["popupArticle"],
    parent: main,
  });
  const parentHeadings = createElement({
    tag: "div",
    classList: ["parentHeadings"],
    parent: article,
  });
  const h3 = createElement({
    tag: "h3",
    classList: ["popupH3"],
    parent: parentHeadings,
    text: `${name}`,
  });
  const h4 = createElement({
    tag: "h4",
    classList: ["popupH4"],
    parent: parentHeadings,
    text: `${type} - ${breed}`,
  });
  const h5 = createElement({
    tag: "h5",
    classList: ["popupH5"],
    parent: article,
    text: `${description}`,
  });
  const articleH6 = createElement({
    tag: "article",
    classList: ["articleH6"],
    parent: article,
  });
  const parent1 = createElement({
    tag: "div",
    classList: ["parent1"],
    parent: articleH6,
  });
  const h6_1 = createElement({
    tag: "h6",
    classList: ["popupH6", "h6_1"],
    parent: parent1,
    text: `Age:`,
  });
  const h6_1span = createElement({
    tag: "span",
    classList: ["h6_1span"],
    parent: parent1,
    text: `${age}`,
  });
  const parent2 = createElement({
    tag: "div",
    classList: ["parent2"],
    parent: articleH6,
  });
  const h6_2 = createElement({
    tag: "h6",
    classList: ["popupH6", "h6_2"],
    parent: parent2,
    text: `inoculations:`,
  });
  const h6_2span = createElement({
    tag: "span",
    classList: ["h6_2span"],
    parent: parent2,
    text: ` ${inoculations}`,
  });
  const parent3 = createElement({
    tag: "div",
    classList: ["parent3"],
    parent: articleH6,
  });
  const h6_3 = createElement({
    tag: "h6",
    classList: ["popupH6", "h6_3"],
    parent: parent3,
    text: `Deseases:`,
  });
  const h6_3span = createElement({
    tag: "span",
    classList: ["h6_3span"],
    parent: parent3,
    text: `${diseases}`,
  });
  const parent4 = createElement({
    tag: "div",
    classList: ["parent4"],
    parent: articleH6,
  });
  const h6_4 = createElement({
    tag: "h6",
    classList: ["popupH6", "h6_4"],
    parent: parent4,
    text: `Parasites:`,
  });
  const h6_4span = createElement({
    tag: "span",
    classList: ["h6_4span"],
    parent: parent4,
    text: `${parasites}`,
  });
}
fetch("../pets.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < friendElements.length; i++) {
      friendElements[i].addEventListener("click", (e) => {
        //disableScrollAccordingToWidth();
        function isName(obj) {
          return obj.name === `${friendElements[i].children[1].textContent}`;
        }
        function isImg(obj) {
          return obj.img === `${friendElements[i].children[0].attributes.src.nodeValue}`;
        }
        let targetObjByName = data.find(isName);

        let targetObjByImg = data.find(isImg);
        let name = targetObjByName.name;
        let image = targetObjByImg.img
        let type = targetObjByImg.type;
        let breed = targetObjByName.breed;
        let description = targetObjByName.description;
        let age = targetObjByName.age;
        let inoculations = targetObjByName.inoculations;
        let diseases = targetObjByName.diseases;
        let parasites = targetObjByName.parasites;
        createPopupEl({
          name,
          image,
          type,
          breed,
          description,
          age,
          inoculations,
          diseases,
          parasites,
        });
        removeDivWhenPressingX();
        removeDivWhenonDarkenedArea();
      });
    }
  });

function removeDivWhenPressingX() {
  const popupCloseBtn = document.querySelector(".popupCloseBtn");
  const popupSection = document.querySelector("#popupSection");
  popupCloseBtn.addEventListener("click", removeSection);
  function removeSection() {
    popupSection.remove();
    enableScroll();
  }
}

function removeDivWhenonDarkenedArea() {
  window.addEventListener("mouseup", function (event) {
    let box = document.querySelector("#popupMain");
    const popupSection = document.getElementById("popupSection");
    if (popupSection != null) {
      if (event.target != box && event.target.parentNode != box) {
        popupSection.remove();
        enableScroll();
      }
    }
  });
}

/* function disableScrollAccordingToWidth() {
  if (window.screen.availWidth >= 1280) {
    window.onscroll = function () {
      window.scrollTo(0, 1450);
    };
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    window.onscroll = function () {
      window.scrollTo(0, 2300);
    };
  }
  if (window.screen.availWidth < 768 && window.screen.availWidth >= 320) {
    window.onscroll = function () {
      window.scrollTo(0, 1880);
    };
  }
} */
