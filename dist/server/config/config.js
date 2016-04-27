'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let config;

function load() {
  return exports.config = config = {
    logs: {
      //https://github.com/winstonjs/winston
      winston: {
        level: process.env.MEAN_OVERRIDE_WINSTON_LEVEL || 'silly', //{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
        file: process.env.MEAN_OVERRIDE_WINSTON_FILE || './logs/override.log',
        console: process.env.MEAN_OVERRIDE_WINSTON_CONSOLE || 'true'
      }
    }
  };
}

load();

exports.load = load;
exports.config = config;