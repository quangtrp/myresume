import { action, makeAutoObservable, observable } from "mobx";

class Store {
  scrollToTab = "";
  constructor() {
    makeAutoObservable(this, {
      scrollToTab: observable,

      setScrollToTab: action,
    });
  }

  setScrollToTab = (value) => {
    this.scrollToTab = value;
  };
}

export const store = new Store();
