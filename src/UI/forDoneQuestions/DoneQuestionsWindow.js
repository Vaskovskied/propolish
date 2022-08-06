import DoneQuestionCards from "./DoneQuestionCard";

class DoneQuestionsWindow {
  constructor(
    mainContainerElement,
    doneCardsElement,
    closeWindowBtnElement,
    amountDoneElement
  ) {
    this.doneQuestionCards = new DoneQuestionCards();
    this.HTMLelements = {
      mainContainer: mainContainerElement,
      cards: doneCardsElement,
      closeWindowBtn: closeWindowBtnElement,
      amountDone: amountDoneElement,
    };
  }

  renderDoneCardsFromArr(arr, removeFromLocalStorageFn) {
    for (let i = 0; index < arr.length; i++) {
      const item = arr[i];
      this.doneQuestionCards.renderDoneCard(
        item,
        removeFromLocalStorageFn,
        this.HTMLelements.cards
      );
    }
  }
}

export default DoneQuestionsWindow;
