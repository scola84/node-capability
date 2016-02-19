'use strict';

class Tester {
  constructor(capabilities, window) {
    this.capabilities = capabilities;
    this.window = window;
  }

  test(name) {
    return this.capabilities[name]
      .get()
      .setWindow(this.window)
      .test();
  }
}

module.exports = Tester;
