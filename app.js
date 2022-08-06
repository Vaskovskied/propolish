import ClickableBtn from "./src/UI/ClickableBtn.js";
import CurrentQuestion from "./src/questions/CurrentQuestion.js";
import PreviousQuestion from "./src/questions/PreviousQuestion.js";
import Questions from "./src/questions/Questions.js";
import QUESTIONS_ARRAY from "./static/QUESTIONS_ARRAY.js";
import DoneQuestions from "./src/questions/DoneQuestions.js";
import InputNumberForm from "./src/UI/inputNumberForm.js";
import DoneQuestionsWindow from "./src/UI/forDoneQuestions/DoneQuestionsWindow.js";

export const questions = new Questions(QUESTIONS_ARRAY),
  currentQuestion = new CurrentQuestion(),
  previousQuestion = new PreviousQuestion(),
  doneQuestions = new DoneQuestions();

class App {
  doneQuestionsWindow = new DoneQuestionsWindow();

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

  DoneQuestionListBtn = new ClickableBtn(
    document.querySelector(".done-list-btn"),
    () => {
      this.doneQuestionsWindow.open();
    }
  );

  inputNumberForm = new InputNumberForm(this.onNumberFormSubmit.bind(this));

  onNumberFormSubmit(inputValue) {
    this.setCurrentQuestionWithPrevious(questions.getQuestionById(inputValue));
    currentQuestion.renderQuestion();
  }

  onRandomBtnClick() {
    const randomQuestion = questions.getRandomQuestion();
    if (!doneQuestions.isInLocalStorage(randomQuestion)) {
      this.setCurrentQuestionWithPrevious(randomQuestion);
      currentQuestion.renderQuestion();
    } else {
      console.log(randomQuestion);
      console.log(currentQuestion.placeToRender.number.innerText);
      return this.onRandomBtnClick();
    }
  }

  onBackBtnClick() {
    if (previousQuestion.getId() !== null) {
      currentQuestion.setCurrentQuestion(
        previousQuestion.getPreviousQuestion()
      );
      previousQuestion.nullPreviousQuestion();
      currentQuestion.renderQuestion();
    }
  }

  onMakeDoneBtnClick() {
    doneQuestions.addToLocalStorage(currentQuestion.getCurrentQuestion());
  }

  setCurrentQuestionWithPrevious(question) {
    previousQuestion.setPreviousQuestionFromCurrent(
      currentQuestion.getCurrentQuestion()
    );
    currentQuestion.setCurrentQuestion(question);
  }

  addEventListeners() {
    this.randomBtn.addOnClickListener();
    this.backBtn.addOnClickListener();
    this.makeDoneBtn.addOnClickListener();
    this.DoneQuestionListBtn.addOnClickListener();
    this.inputNumberForm.addOnSubmitListener();
  }

  start() {
    this.addEventListeners();
    this.doneQuestionsWindow.start();
  }
}

const propolish = new App();

export default propolish;
