'use strict';

class AbstractCapability {
  constructor() {
    this.window = null;
  }

  getWindow() {
    return this.window;
  }

  setWindow(window) {
    this.window = window;
    return this;
  }

  test() {
    throw new Error('not_implemented');
  }
}

module.exports = AbstractCapability;
