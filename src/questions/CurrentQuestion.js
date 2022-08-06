class CurrentQuestion {
  constructor(questionHTMLelement, numberHTMLelement) {
    this.placeToRender = {
      // for rendering purposes
      question: questionHTMLelement,
      number: numberHTMLelement,
    };
  }
  id = null;
  text = null;

  getId() {
    return this.id;
  }

  getText() {
    return this.text;
  }

  getCurrentQuestion() {
    return { id: this.id, text: this.text };
  }

  setCurrentQuestion(question) {
    // args: question: {id: num, text: string}
    this.text = question.text;
    this.id = question.id;
  }

  renderQuestion() {
    this.placeToRender.question.innerText = this.text;
    this.placeToRender.number.innerText = "#" + this.id + "/313";
  }
}

export default CurrentQuestion;
