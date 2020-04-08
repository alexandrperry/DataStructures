export default class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  toString() {
    return this.dataStore;
  }

  length() {
    return this.listSize;
  }

  append(elemnent) {
    this.dataStore[this.listSize++] = elemnent;
  }

  find(elemnent) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === elemnent) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    const id = this.find(element);
    if (id !== -1) {
      this.dataStore.splice(id, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  insert(element, after) {
    const position = this.find(after);
    if (position !== -1) {
      this.dataStore.splice(position + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }
}
