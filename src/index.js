const formTag = document.querySelector("#form-number");
const maxInput = document.querySelector("#max-number");
const selectInput = document.querySelector("#select-number");

const results = document.querySelector("#results");
let resultInput = document.querySelector("#result-input");
let resultGame = document.querySelector("#result-game");

function onSubmit(event) {
  event.preventDefault();
  results.classList.remove("hidden");
  const maxNum = maxInput.value;
  const machineNum = Math.round(Math.random() * maxNum);
  const selectNum = selectInput.value;
  // console.log(typeof machineNum, typeof selectNum);
  resultInput.innerText = `You chose : ${selectNum}, the machine chose : ${machineNum}`;
  if (Number(selectNum) === machineNum) {
    resultGame.innerText = "You won!";
  } else {
    resultGame.innerText = "You lost!";
  }
}

formTag.addEventListener("submit", onSubmit);
