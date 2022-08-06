import { doneQuestions } from "../../../app.js";

class DoneQuestionCards {
  constructor(decrementAmountDoneFn) {
    this.placeToRender = document.querySelector(".for-dones");
    this.decrementAmountDone = decrementAmountDoneFn;
  }

  deleteAllDoneCards() {
    while (this.placeToRender.firstChild) {
      this.placeToRender.removeChild(this.placeToRender.firstChild);
    }
  }

  renderDoneCardsFromLocalStorage() {
    const arr = doneQuestions.getAllFromLocalStorageAsArray();
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      this.renderDoneCardFromQuestion(item);
    }
  }

  renderDoneCardFromQuestion(question) {
    const card = document.createElement("div"),
      numberDiv = document.createElement("div"),
      questionP = document.createElement("p"),
      btnDelete = document.createElement("div");

    numberDiv.appendChild(document.createElement("p"));
    btnDelete.appendChild(document.createElement("p"));

    numberDiv.querySelector("p").innerText = question.id;
    questionP.innerText = question.text;
    btnDelete.querySelector("p").innerText = "×";

    card.classList.add("done-item-div");
    numberDiv.classList.add("done-item-number");
    questionP.classList.add("done-item-question");
    btnDelete.classList.add("done-btn-delete");

    card.appendChild(numberDiv);
    card.appendChild(questionP);
    card.appendChild(btnDelete);

    this.placeToRender.appendChild(card);

    btnDelete.addEventListener("click", () => {
      this.decrementAmountDone();
      doneQuestions.removeFromLocalStorage(question);
      this.placeToRender.removeChild(card);
    });
  }
}

export default DoneQuestionCards;
