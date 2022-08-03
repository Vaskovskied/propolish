import QUESTIONS_ARRAY from "../static/static.js";

class Questions {
  constructor(questionsArray) {
    this.questions = questionsArray;
  }

  getQuestions() {
    return this.questions;
  }

  getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  }
}

export default Questions;
