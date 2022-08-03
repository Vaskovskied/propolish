class RandomBtn {
  constructor(HTMLelement, onClickFn) {
    this.btn = HTMLelement;
    this.onClickHandler = onClickFn;
  }

  addOnClickListener() {
    this.btn.addEventListener("click", this.onClickHandler);
  }
}

export default RandomBtn;
