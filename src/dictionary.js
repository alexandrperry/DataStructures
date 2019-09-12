export default class Dictionary {
  constructor() {
    this.dataStore = {};
  }
  add(key, value) {
    this.dataStore[key] = value;
  }
  find(key) {
    return this.dataStore[key];
  }
  remove(key) {
    delete this.dataStore[key];
  }
  showAll() {
    for (const key of Object.keys(this.dataStore)) {
      console.log(key, this.dataStore[key]);
    }
  }
}
