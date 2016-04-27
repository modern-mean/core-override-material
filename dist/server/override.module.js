'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _logger = require('./config/logger');

var _logger2 = _interopRequireDefault(_logger);

var _connectImageOptimus = require('connect-image-optimus');

var _connectImageOptimus2 = _interopRequireDefault(_connectImageOptimus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(app) {
  return new Promise(function (resolve, reject) {
    _logger2.default.debug('Override::Init::Start');

    //Use new middleware
    app.use((0, _connectImageOptimus2.default)('./public'));

    resolve();
  });
}

let service = { init: init };

exports.default = service;
exports.init = init;