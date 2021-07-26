(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.performVisitor = factory());
}(this, (function () { 'use strict';

  var a = '11111';

  var fn = function fn() {
    return {
      b: a
    };
  };

  var vistior = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fn: fn,
    a: a
  });

  return vistior;

})));
//# sourceMappingURL=bundle.js.map
