'use strict';

import logger from './config/logger';
import optimus from 'connect-image-optimus';

function init(app) {
  return new Promise(function(resolve, reject) {
    logger.debug('Override::Init::Start');
    
    //Use new middleware
    app.use(optimus('./public'));

    resolve();
  });
}

let service = { init: init };

export default service;
export { init };
