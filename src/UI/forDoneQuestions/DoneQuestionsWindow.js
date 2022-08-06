import { doneQuestions } from "../../../app.js";
import DoneQuestionCards from "./DoneQuestionCard.js";

class DoneQuestionsWindow {
  constructor() {
    this.HTMLelements = {
      mainContainer: document.querySelector(".done-container"),
      closeWindowBtn: document.querySelector(".close-done-list-btn"),
      amountDone: document.querySelector(".amount-done"),
    };
  }

  doneQuestionCards = new DoneQuestionCards(
    this.decrementAndRenderAmountDone.bind(this)
  );

  decrementAndRenderAmountDone() {
    this.renderAmountDone(doneQuestions.getDoneQuestionsAmount() - 1);
  }

  renderAmountDone(amount) {
    this.HTMLelements.amountDone.innerText = amount + "/313";
  }

  closeWindow() {
    this.HTMLelements.mainContainer.classList.remove("done-container-clicked");
  }

  openWindow() {
    this.HTMLelements.mainContainer.classList.add("done-container-clicked");
  }

  start() {
    this.HTMLelements.closeWindowBtn.addEventListener(
      "click",
      this.closeWindow.bind(this)
    );
  }

  open() {
    this.openWindow();
    this.doneQuestionCards.deleteAllDoneCards();
    this.doneQuestionCards.renderDoneCardsFromLocalStorage();
    this.renderAmountDone(doneQuestions.getDoneQuestionsAmount());
  }
}

export default DoneQuestionsWindow;
