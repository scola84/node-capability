'use strict';

const DI = require('@scola/di');
const Abstract = require('./lib/abstract.js');
const Dispatcher = require('./lib/dispatcher.js');

class Module extends DI.Module {
  configure() {
    if (typeof window !== 'undefined') {
      this.inject(Dispatcher)
        .insertArgument(1, this.value(window));
    }
  }
}

module.exports = {
  Abstract,
  Dispatcher,
  Module
};
