import ClickableBtn from "./src/components/ClickableBtn.js";
import RandomBtn from "./src/components/RandomBtn.js";
import CurrentQuestion from "./src/CurrentQuestion.js";
import PreviousQuestion from "./src/previousQuestion.js";
import Questions from "./src/Questions.js";
import QUESTIONS_ARRAY from "./static/static.js";

export class App {
  questions = new Questions(QUESTIONS_ARRAY);
  currentQuestion = new CurrentQuestion(
    document.querySelector(".question"),
    document.querySelector(".question-number")
  );
  previousQuestion = new PreviousQuestion();

  randomBtn = new ClickableBtn(document.querySelector(".random"), () => {
    this.onRandomBtnClick();
  });

  backBtn = new ClickableBtn(document.querySelector(".back"), () => {
    this.onBackBtnClick;
  });

  onRandomBtnClick() {
    this.setRandomQuestion();
    this.currentQuestion.renderQuestion();
  }

  onBackBtnClick() {
    if (this.previousQuestion.getId() !== null) {
      this.currentQuestion.setCurrentQuestion(
        this.previousQuestion.getPreviousQuestion()
      );
      this.currentQuestion.renderQuestion();
    }
  }

  setCurrentQuestionWithPrevious(question) {
    this.previousQuestion.setPreviousQuestionFromCurrent(
      this.currentQuestion.getCurrentQuestion()
    );
    this.currentQuestion.setCurrentQuestion(question);
  }

  setRandomQuestion() {
    const randomQuestion = this.questions.getRandomQuestion();
    this.setCurrentQuestionWithPrevious(randomQuestion);
  }

  start() {
    this.randomBtn.addOnClickListener();
    this.backBtn.addOnClickListener();
  }
}

const myApp = new App();

export default myApp;
