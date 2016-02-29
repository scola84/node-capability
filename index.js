'use strict';

const DI = require('@scola/di');
const Dispatcher = require('./lib/dispatcher.js');

class Module extends DI.Module {
  configure() {
    this.inject(Dispatcher).with(
      this.object({
        hairline: this.singleton(require('./lib/capabilities/hairline'))
      }),
      this.value(window)
    );
  }
}

module.exports = {
  Module,
  Dispatcher
};
