"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProviders;

var _merge = require("../../lib/merge");

function parseProviders(params) {
  const {
    providers = [],
    base
  } = params;
  return providers.map(({
    options,
    ...defaultOptions
  }) => {
    var _options$id, _options$id2;

    return (0, _merge.merge)(defaultOptions, {
      signinUrl: `${base}/signin/${(_options$id = options === null || options === void 0 ? void 0 : options.id) !== null && _options$id !== void 0 ? _options$id : defaultOptions.id}`,
      callbackUrl: `${base}/callback/${(_options$id2 = options === null || options === void 0 ? void 0 : options.id) !== null && _options$id2 !== void 0 ? _options$id2 : defaultOptions.id}`,
      ...options
    });
  });
}