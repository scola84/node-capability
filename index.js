'use strict';

const DI = require('@scola/di');
const Tester = require('./lib/tester.js');

class Module extends DI.Module {
  configure() {
    this.inject(Tester).with(
      this.object({
        hairline: this.singleton(require('./lib/capabilities/hairline'))
      }),
      this.value(window)
    );
  }
}

module.exports = {
  Module,
  Tester
};
