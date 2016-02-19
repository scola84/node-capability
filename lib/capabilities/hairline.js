'use strict';

class HairlineTester {
  constructor() {
    this.window = null;
    this.isCapable = null;
  }

  setWindow(window) {
    this.window = window;
    return this;
  }

  getWindow() {
    return this.window;
  }

  test() {
    if (this.isCapable === null) {
      const element = this.window.document.createElement('div');
      element.style.border = '0.5px solid transparent';

      this.window.document.body.appendChild(element);
      this.isCapable = element.offsetHeight === 1;

      element.remove();
    }

    return this.isCapable;
  }
}

module.exports = HairlineTester;
