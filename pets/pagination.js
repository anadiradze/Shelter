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
      inArrowRight();
      if(innerMiddle.textContent < 6){
        generateRandCards(data) 
      }  
    });

    /*  arrowLeft.addEventListener("click", () => {
        inArrowLeft();
        if(innerMiddle.textContent > 0){
          generateRandCards(data) 
        }  
      });  */

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
function inArrowRight() {
  innerMiddle.textContent < 6
    ? (innerMiddle.textContent = Number(innerMiddle.textContent) + 1)
    : (innerMiddle.textContent = 6);
}
/* function inArrowLeft() {
    arrowLeft.classList.remove("innerArrow")
    arrowLeft.disabled = false;
    console.log(arrowLeft)
    innerMiddle.textContent > 0
      ? (innerMiddle.textContent = Number(innerMiddle.textContent) -1)
      : (innerMiddle.textContent = 0);
  } */
