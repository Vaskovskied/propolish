class DoneQuestionCards {
  placeToRender;
  renderDoneCardFromQuestion(
    question,
    removeFromLocalStorageFn,
    placeToRender
  ) {
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

    this.placeToRender = placeToRender;
    this.placeToRender.appendChild(card);

    btnDelete.addEventListener("click", () => {
      removeFromLocalStorageFn(question);
      this.placeToRender.removeChild(card);
    });
  }
}

export default DoneQuestionCards;
