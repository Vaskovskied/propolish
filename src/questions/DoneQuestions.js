class DoneQuestions {
  localStorageAdress = "propolishDoneData";

  addToLocalStorage(question) {
    if (question.id === null) return;
    if (this.getAllFromLocalStorage()) {
      if (this.isInLocalStorage(question)) {
        return;
      }
      const stored = this.getAllFromLocalStorageAsObject();
      const withNew = [...stored, question];
      const stringified = JSON.stringify(withNew);
      window.localStorage.setItem(this.localStorageAdress, stringified);
    } else {
      const stringified = JSON.stringify([question]);
      window.localStorage.setItem(this.localStorageAdress, stringified);
    }
  }

  isInLocalStorage(question) {
    return this.getAllFromLocalStorageAsObject().some(
      (item) => item.id === question.id
    );
  }

  getAllFromLocalStorage() {
    return localStorage.getItem(this.localStorageAdress);
  }

  getAllFromLocalStorageAsObject() {
    return JSON.parse(this.getAllFromLocalStorage());
  }

  sortDoneQuestions() {
    return getAllFromLocalStorage().sort((a, b) => a.id - b.id);
  }
}

export default DoneQuestions;
