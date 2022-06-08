const friendsflex = document.querySelectorAll(".friendsflex");
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
    addEvents(data);
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

// UNIVERSAL DISABLE/ENABLE
function disabled(arrow) {
  arrow.disabled = true;
  arrow.classList.add("innerArrow");
  arrow.classList.remove("innerbg");
}
function enabled(arrow) {
  arrow.disabled = false;
  arrow.classList.remove("innerArrow");
  arrow.classList.add("innerbg");
}

// DISABLE/ENABLE ARROWS
function inArrowRight_2to6() {
  // when page = 2,3,4,5,6
  innerMiddle.textContent = Number(innerMiddle.textContent) + 1;
  enabled(arrowLeft);
  enabled(arrowRight);
  enabled(doubleLeft);
}
function inArrowRight_6() {
  // when page = 6
  innerMiddle.textContent = 6;
  disabled(arrowRight);
  enabled(arrowLeft);
  disabled(doubleRight);
}
function inArrowLeft_2to6() {
  // when page = 2,3,4,5,6
  innerMiddle.textContent = Number(innerMiddle.textContent) - 1;
  enabled(arrowLeft);
  enabled(arrowRight);
  enabled(doubleRight);
}
function InArrowLeft_1() {
  // when page = 1
  innerMiddle.textContent = 1;
  disabled(arrowLeft);
  disabled(doubleLeft);
}
function indoubleRight_1to6() {
  innerMiddle.textContent = 6;
  disabled(doubleRight);
  disabled(arrowRight);
  enabled(arrowLeft);
  enabled(doubleLeft);
}
function indoubleLeft_1to6() {
  innerMiddle.textContent = 1;
  disabled(doubleLeft);
  disabled(arrowLeft);
  enabled(arrowRight);
  enabled(doubleRight);
}

// EVENTS
function addEvents(data) {
  arrowRight.addEventListener("click", () => {
    if (innerMiddle.textContent > 0 && innerMiddle.textContent < 5) {
      inArrowRight_2to6();
      generateRandCards(data);
    } else {
      inArrowRight_6();
      generateRandCards(data);
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (innerMiddle.textContent > 2 && innerMiddle.textContent < 7) {
      inArrowLeft_2to6();
      generateRandCards(data);
    } else {
      InArrowLeft_1();
      generateRandCards(data);
    }
  });

  doubleRight.addEventListener("click", () => {
    if (innerMiddle.textContent !== 6) {
      indoubleRight_1to6();
      generateRandCards(data);
    }
  });
  
  doubleLeft.addEventListener("click", () => {
    if (innerMiddle.textContent !== 1) {
      indoubleLeft_1to6();
      generateRandCards(data);
    }
  });
}
