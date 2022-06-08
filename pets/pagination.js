const doubleLeft = document.querySelector(".doubleLeft");
const arrowLeft = document.querySelector(".arrowLeft");
const innerMiddle = document.querySelector(".innerMiddle");
const arrowRight = document.querySelector(".arrowRight");
const doubleRight = document.querySelector(".doubleRight");

fetch("../pets.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    arrowRight.addEventListener("click", () => {
      if (innerMiddle.textContent < 6) {
        inArrowRight_2to6();
        generateRandCards(data);
      } else {
        inArrowRight_6();
      }
    });

    arrowLeft.addEventListener("click", () => {
      if (innerMiddle.textContent > 1 && innerMiddle.textContent < 7) {
        inArrowLeft_2to6();
        generateRandCards(data);
      } else {
        InArrowLeft_1();
      }
    });
  });

// RAND CARDS
function generateRandCards(data) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7];
  let pushRandNumbersInThisArr = [];
  let numsLength = nums.length;
  let randomNumber = 0;

  while (numsLength--) {
    randomNumber = Math.floor(Math.random() * (numsLength + 1));
    pushRandNumbersInThisArr.push(nums[randomNumber]);
    nums.splice(randomNumber, 1);
  }

  const friendsflex = document.querySelectorAll(".friendsflex");

  for (let i = 0; i < 8; i++) {
    friendsflex[pushRandNumbersInThisArr[i]].children[0].setAttribute(
      "src",
      data[i].img
    );
  }
  for (let j = 7; j > -1; j--) {
    if (j < 6) {
      friendsflex[pushRandNumbersInThisArr[j]].children[1].textContent =
        data[j + 1].name;
    } else {
      friendsflex[pushRandNumbersInThisArr[j]].children[1].textContent =
        data[j - 1].name;
    }
  }
}

function inArrowRight_2to6() { // when page = 2,3,4,5,6
  innerMiddle.textContent = Number(innerMiddle.textContent) + 1;

  arrowLeft.disabled = false;
  arrowLeft.classList.add("innerbg");
  arrowLeft.classList.remove("innerArrow");

  arrowRight.disabled = false;
  arrowRight.classList.add("innerbg");
  arrowRight.classList.remove("innerArrow");
}
function inArrowRight_6() { // when page = 6
  innerMiddle.textContent = 6;

  arrowRight.disabled = true;
  arrowRight.classList.add("innerArrow");
  arrowRight.classList.remove("innerbg");

  arrowLeft.disabled = false;
}

function inArrowLeft_2to6() {  // when page = 2,3,4,5,6
  innerMiddle.textContent = Number(innerMiddle.textContent) - 1;

  arrowLeft.disabled = false;
  arrowLeft.classList.add("innerbg");
  arrowLeft.classList.remove("innerArrow");

  arrowRight.disabled = false;
  arrowRight.classList.add("innerbg");
  arrowRight.classList.remove("innerArrow");
}
function InArrowLeft_1() { // when page = 1
  innerMiddle.textContent = 1;

  arrowLeft.disabled = true;
  arrowLeft.classList.add("innerArrow");
  arrowLeft.classList.remove("innerbg");
}
