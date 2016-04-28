'use strict';

let config;

function load() {
  return config = {
    logs: {
      //https://github.com/winstonjs/winston
      winston: {
        level:  process.env.MEAN_OVERRIDE_WINSTON_LEVEL || process.env.MEAN_WINSTON_LEVEL || 'silly', //{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
        file: process.env.MEAN_OVERRIDE_WINSTON_FILE || process.env.MEAN_WINSTON_FILE || './logs/override.log',
        console: process.env.MEAN_OVERRIDE_WINSTON_CONSOLE || process.env.MEAN_WINSTON_CONSOLE || 'true'
      }
    }
  };
}

load();



export { load, config };
