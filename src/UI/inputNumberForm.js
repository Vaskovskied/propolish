class InputNumberForm {
  constructor(onSubmitFn) {
    this.form = document.forms.numberForm;
    this.input = this.form.elements.inputNumber;
    this.addOnSubmitListener = () => {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        onSubmitFn(+this.getInputValue());
        this.emptyInputValue();
      });
    };
  }

  emptyInputValue() {
    this.input.value = "";
  }

  getInputValue() {
    return this.input.value;
  }
}

export default InputNumberForm;
