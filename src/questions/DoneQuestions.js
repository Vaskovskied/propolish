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
      const stored = this.getAllFromLocalStorageAsObject();
      const withNew = [...stored, question];
      this.setAndSortLocalStorageFromArr(withNew);
    } else {
      const stringified = JSON.stringify([question]);
      localStorage.setItem(this.localStorageAdress, stringified);
    }
  }

  removeFromLocalStorage(question) {
    const targetIndex = this.getAllFromLocalStorageAsObject().findIndex(
      (item) => item.id === question.id
    );

    const stored = this.getAllFromLocalStorageAsObject();
    stored.splice(targetIndex, 1);

    this.setAndSortLocalStorageFromArr(stored);
  }

  isInLocalStorage(question) {
    if (!this.getAllFromLocalStorage()) return;
    return this.getAllFromLocalStorageAsObject().some(
      (item) => item.id === question.id
    );
  }

  getDoneQuestionsAmount() {
    return getAllFromLocalStorageAsObject().length;
  }

  getAllFromLocalStorage() {
    return localStorage.getItem(this.localStorageAdress);
  }

  getAllFromLocalStorageAsObject() {
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
