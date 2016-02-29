'use strict';

class Dispatcher {
  constructor(capabilities, window) {
    this.capabilities = capabilities;
    this.window = window;
  }

  get(name) {
    return this.capabilities[name]
      .get()
      .setWindow(this.window);
  }
}

module.exports = Dispatcher;
