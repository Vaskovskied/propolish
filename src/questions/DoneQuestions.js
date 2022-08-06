class DoneQuestions {
  localStorageAdress = "propolishDoneData";

  setLocalStorageFromArr(arr) {
    const stringified = JSON.stringify(arr);
    localStorage.setItem(this.localStorageAdress, stringified);
  }

  setAndSortLocalStorageFromArr(arr) {
    const sorted = [...arr].sort(this.sortFn);
    this.setLocalStorageFromArr(sorted);
  }

  addToLocalStorage(question) {
    if (question.id === null) return;
    if (this.getAllFromLocalStorage()) {
      if (this.isInLocalStorage(question)) {
        return;
      }
      const stored = this.getAllFromLocalStorageAsArray();
      const withNew = [...stored, question];
      this.setAndSortLocalStorageFromArr(withNew);
    } else {
      const stringified = JSON.stringify([question]);
      localStorage.setItem(this.localStorageAdress, stringified);
    }
  }

  removeFromLocalStorage(question) {
    const targetIndex = this.getAllFromLocalStorageAsArray().findIndex(
      (item) => item.id === question.id
    );

    const stored = this.getAllFromLocalStorageAsArray();
    stored.splice(targetIndex, 1);

    this.setAndSortLocalStorageFromArr(stored);
  }

  isInLocalStorage(question) {
    if (!this.getAllFromLocalStorage()) return;
    return this.getAllFromLocalStorageAsArray().some(
      (item) => item.id === question.id
    );
  }

  getDoneQuestionsAmount() {
    return this.getAllFromLocalStorageAsArray().length;
  }

  getAllFromLocalStorage() {
    return localStorage.getItem(this.localStorageAdress);
  }

  getAllFromLocalStorageAsArray() {
    return JSON.parse(this.getAllFromLocalStorage());
  }

  sortDoneQuestions() {
    return getAllFromLocalStorage().sort(this.sortFn);
  }

  sortFn(a, b) {
    return b.id - a.id;
  }
}

export default DoneQuestions;
