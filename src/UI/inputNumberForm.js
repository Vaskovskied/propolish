class InputNumberForm {
  constructor(formHTMLelement, onSubmitFn) {
    this.form = formHTMLelement;
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
