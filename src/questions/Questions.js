class Questions {
  constructor(questionsArray) {
    this.questions = questionsArray;
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionById(targetId) {
    return this.questions.find((item) => item.id === targetId);
  }

  getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  }

  getQuestionsAmount() {
    return this.questions.length;
  }
}

export default Questions;
