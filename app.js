import ClickableBtn from "./src/UI/ClickableBtn.js";
import CurrentQuestion from "./src/questions/CurrentQuestion.js";
import PreviousQuestion from "./src/questions/PreviousQuestion.js";
import Questions from "./src/questions/Questions.js";
import QUESTIONS_ARRAY from "./static/QUESTIONS_ARRAY.js";
import DoneQuestions from "./src/questions/DoneQuestions.js";
import InputNumberForm from "./src/UI/inputNumberForm.js";

export class App {
  questions = new Questions(QUESTIONS_ARRAY);
  currentQuestion = new CurrentQuestion(
    document.querySelector(".question"),
    document.querySelector(".question-number")
  );
  previousQuestion = new PreviousQuestion();
  doneQuestions = new DoneQuestions();

  randomBtn = new ClickableBtn(
    document.querySelector(".random"),
    this.onRandomBtnClick.bind(this)
  );

  backBtn = new ClickableBtn(
    document.querySelector(".back"),
    this.onBackBtnClick.bind(this)
  );

  makeDoneBtn = new ClickableBtn(
    document.querySelector(".done"),
    this.onMakeDoneBtnClick.bind(this)
  );

  inputNumberForm = new InputNumberForm(
    document.forms.numberForm,
    this.onNumberFormSubmit.bind(this)
  );

  onNumberFormSubmit(inputValue) {
    this.setCurrentQuestionWithPrevious(
      this.questions.getQuestionById(inputValue)
    );
    this.currentQuestion.renderQuestion();
  }

  onRandomBtnClick() {
    const randomQuestion = this.questions.getRandomQuestion();
    if (!this.doneQuestions.isInLocalStorage(randomQuestion)) {
      this.setCurrentQuestionWithPrevious(randomQuestion);
      this.currentQuestion.renderQuestion();
    } else {
      console.log(randomQuestion);
      console.log(this.currentQuestion.placeToRender.number.innerText);
      return this.onRandomBtnClick();
    }
  }

  onBackBtnClick() {
    if (this.previousQuestion.getId() !== null) {
      this.currentQuestion.setCurrentQuestion(
        this.previousQuestion.getPreviousQuestion()
      );
      this.previousQuestion.nullPreviousQuestion();
      this.currentQuestion.renderQuestion();
    }
  }

  onMakeDoneBtnClick() {
    this.doneQuestions.addToLocalStorage(
      this.currentQuestion.getCurrentQuestion()
    );
  }

  setCurrentQuestionWithPrevious(question) {
    this.previousQuestion.setPreviousQuestionFromCurrent(
      this.currentQuestion.getCurrentQuestion()
    );
    this.currentQuestion.setCurrentQuestion(question);
  }

  addEventListeners() {
    this.randomBtn.addOnClickListener();
    this.backBtn.addOnClickListener();
    this.makeDoneBtn.addOnClickListener();
    this.inputNumberForm.addOnSubmitListener();
  }

  start() {
    this.addEventListeners();
  }
}

const myApp = new App();

export default myApp;
