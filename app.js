"use strict";
import QUESTIONS_ARRAY from "./static";

const randomBtn = document.querySelector(".random");
const backBtn = document.querySelector(".back");
const doneBtn = document.querySelector(".done");
const doneListBtn = document.querySelector(".done-list-btn");
const closeDoneListBtn = document.querySelector(".close-done-list-btn");
const amountDone = document.querySelector(".amount-done");
const forDones = document.querySelector(".for-dones");
let deleteDoneButtons;

const question = document.querySelector(".question");
const questionNumber = document.querySelector(".question-number");
const doneContainer = document.querySelector(".done-container");

const numberForm = document.forms.numberForm;
const inputNumber = numberForm.elements.inputNumber;

class previousQuestion {
  text,
  number
  previousNumberValue,
}

numberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (questionNumber.innerText !== "") {
    previousQuestion = question.innerText;
    previousNumber = questionNumber.innerText;
    previousNumberValue = previousNumber.match(/#\d*/).toString().slice(1);
  }
  if (inputNumber.value) {
    questionNumber.innerText = `#${inputNumber.value}/313`;
    question.innerText = QUESTIONS_ARRAY[inputNumber.value - 1];
  }
});

backBtn.addEventListener("click", () => {
  if (previousNumber) {
    question.innerText = previousQuestion;
    questionNumber.innerText = previousNumber;
    inputNumber.value = previousNumberValue;
  }
});

randomBtn.addEventListener("click", () => {
  getRandomQuestion();
});

doneBtn.addEventListener("click", () => {
  if (questionNumber.innerText !== "") {
    localStorage.setItem(
      `${questionNumber.innerText.match(/#\d*/).toString()}`,
      question.innerText
    );
  }
});

doneListBtn.addEventListener("click", () => {
  doneContainer.classList.toggle("done-container-clicked");
  amountDone.innerText = `${localStorage.length}/313`;
  createDoneList();
  deleteDoneButtons = document.querySelectorAll(".done-btn-delete");

  Array.from(deleteDoneButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      const number = btn.parentNode.firstChild.firstChild.innerText;
      btn.parentNode.parentNode.removeChild(btn.parentNode);
      localStorage.removeItem(number);
      amountDone.innerText = `${localStorage.length}/313`;
    });
  });
});

closeDoneListBtn.addEventListener("click", () => {
  doneContainer.classList.toggle("done-container-clicked");
});

function createDoneList() {
  const keys = Object.keys(localStorage);
  if (forDones.hasChildNodes() === true) {
    while (forDones.firstChild) {
      forDones.removeChild(forDones.firstChild);
    }
  }
  for (let key of keys) {
    const itemDiv = document.createElement("div");
    const number = document.createElement("div");
    const question = document.createElement("p");
    const btnDelete = document.createElement("div");

    number.appendChild(document.createElement("p"));
    question.appendChild(document.createElement("p"));
    btnDelete.appendChild(document.createElement("p"));

    number.querySelector("p").innerText = key;
    question.querySelector("p").innerText = localStorage.getItem(key);
    btnDelete.querySelector("p").innerText = "×";

    itemDiv.classList.add("done-item-div");
    number.classList.add("done-item-number");
    question.classList.add("done-item-question");
    btnDelete.classList.add("done-btn-delete");

    itemDiv.appendChild(number);
    itemDiv.appendChild(question);
    itemDiv.appendChild(btnDelete);

    forDones.appendChild(itemDiv);
  }
}

function getRandomQuestion() {
  let random = Math.floor(Math.random() * QUESTIONS_ARRAY.length);
  if (!localStorage.hasOwnProperty(`#${random + 1}`)) {
    questionNumber.innerText = `#${random + 1}/313`;
    question.innerText = QUESTIONS_ARRAY[random];
    inputNumber.value = random + 1;
  } else {
    return getRandomQuestion();
  }
}
