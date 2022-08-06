class PreviousQuestion {
  id = null; // null or number
  text = null; // null or string

  getId() {
    return this.id;
  }

  getText() {
    return this.text;
  }

  getPreviousQuestion() {
    return { id: this.id, text: this.text };
  }

  nullPreviousQuestion() {
    this.id = null;
    this.text = null;
  }

  setPreviousQuestionFromCurrent(currentQuestion) {
    if (currentQuestion.id !== null) {
      this.text = currentQuestion.text;
      this.id = currentQuestion.id;
    }
  }
}

export default PreviousQuestion;
