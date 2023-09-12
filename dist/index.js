'use strict';

var React = require('react');

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;
  function z(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function () {

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === 'production') {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && _typeof(data) === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (_typeof(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = _typeof(propValue);
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".DatePicker-module_container__SL2Dw {\r\n  position: relative;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  /* position: relative; */\r\n}\r\n\r\n.DatePicker-module_containerInput__pZeTd {\r\n  display: flex;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.DatePicker-module_inputContainer__i2kk5 {\r\n  display: flex;\r\n  gap: 5px;\r\n\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA {\r\n  cursor: pointer;\r\n}\r\n\r\nselect {\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA {\r\n  background: transparent;\r\n  border: none;\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s ease-in-out;\r\n  position: absolute;\r\n  right: -25px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA:hover {\r\n  opacity: .8;\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA[disabled] {\r\n  opacity: 0.5;\r\n  pointer-events: none;\r\n}\r\n\r\n.DatePicker-module_invisibleButton__nLatP {\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.DatePicker-module_errorMessage__S9vAC {\r\n  color: red;\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n}";
var styles$2 = {"container":"DatePicker-module_container__SL2Dw","containerInput":"DatePicker-module_containerInput__pZeTd","inputContainer":"DatePicker-module_inputContainer__i2kk5","calendarButton":"DatePicker-module_calendarButton__Qy0dA","invisibleButton":"DatePicker-module_invisibleButton__nLatP","errorMessage":"DatePicker-module_errorMessage__S9vAC"};
styleInject(css_248z$3);

var css_248z$2 = ".Calendar-module_calendar__ma2nx {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 10px 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n    transition: width 0.2s ease-in-out;\r\n}\r\n\r\n.Calendar-module_calendarNav__cJtpj {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.Calendar-module_header__Wv-LD {\r\n    text-transform: lowercase;\r\n    text-align: center;\r\n    padding: 8px 8px;\r\n    font-size: 14px;\r\n}\r\n\r\n.Calendar-module_NavSelector__yDN-3 {\r\n    display: flex;\r\n    width: 100px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-left: 8px;\r\n\r\n\r\n}\r\n\r\n.Calendar-module_navButton__Xive6 {\r\n    background: transparent;\r\n    border: none;\r\n    cursor: default;\r\n    opacity: 0.5;\r\n    transition: opacity 0.2s ease-in-out;\r\n    text-transform: lowercase;\r\n    font-size: 18px;\r\n    color: black;\r\n    padding: 0;\r\n}\r\n\r\n.Calendar-module_chevronButton__ezSD3 {\r\n    background: transparent;\r\n    border: none;\r\n    opacity: 0.2;\r\n    transition: opacity 0.2s ease-in-out;\r\n    padding: 0;\r\n}\r\n\r\n.Calendar-module_chevronButton__ezSD3:hover {\r\n    opacity: .8;\r\n}\r\n\r\n.Calendar-module_chevronContainer__005Ps {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.Calendar-module_daysContainer__wdHk0 {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n}\r\n\r\n.Calendar-module_day__tOkN8,\r\n.Calendar-module_grayedDay__cHUGy {\r\n    cursor: default;\r\n    text-align: center;\r\n    padding: 8px 4px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.Calendar-module_day__tOkN8:hover,\r\n.Calendar-module_month__AkgBU:hover,\r\n.Calendar-module_year__ZVvxR:hover {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.Calendar-module_active__TPscG {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.Calendar-module_navButton__Xive6:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.Calendar-module_grayedDay__cHUGy {\r\n    color: #0000003b;\r\n}\r\n\r\n.Calendar-module_month__AkgBU,\r\n.Calendar-module_year__ZVvxR {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: background-color 0.3s ease;\r\n    cursor: default;\r\n}\r\n\r\n.Calendar-module_month__AkgBU {\r\n    text-transform: lowercase;\r\n    height: 50px;\r\n}\r\n\r\n.Calendar-module_year__ZVvxR {\r\n    font-size: 16px;\r\n    height: 40px;\r\n}\r\n\r\n.Calendar-module_monthsContainer__euXeK,\r\n.Calendar-module_yearsContainer__SXYwp {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 0;\r\n}\r\n\r\n@keyframes Calendar-module_slide__obRYY {\r\n    from {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.Calendar-module_monthsContainer__euXeK {\r\n    animation: Calendar-module_slide__obRYY 0.6s forwards;\r\n}\r\n\r\n.Calendar-module_today__biHUW {\r\n    background-color: #4646467d;\r\n    color: #ffffff;\r\n}\r\n\r\n@media (max-width: 410px) {\r\n    .Calendar-module_calendar__ma2nx {\r\n        /* font-size: 22px; */\r\n        width: 270px;\r\n    }\r\n}";
var styles$1 = {"calendar":"Calendar-module_calendar__ma2nx","calendarNav":"Calendar-module_calendarNav__cJtpj","header":"Calendar-module_header__Wv-LD","NavSelector":"Calendar-module_NavSelector__yDN-3","navButton":"Calendar-module_navButton__Xive6","chevronButton":"Calendar-module_chevronButton__ezSD3","chevronContainer":"Calendar-module_chevronContainer__005Ps","daysContainer":"Calendar-module_daysContainer__wdHk0","day":"Calendar-module_day__tOkN8","grayedDay":"Calendar-module_grayedDay__cHUGy","month":"Calendar-module_month__AkgBU","year":"Calendar-module_year__ZVvxR","active":"Calendar-module_active__TPscG","monthsContainer":"Calendar-module_monthsContainer__euXeK","yearsContainer":"Calendar-module_yearsContainer__SXYwp","slide":"Calendar-module_slide__obRYY","today":"Calendar-module_today__biHUW"};
styleInject(css_248z$2);

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='800' height='800' viewBox='0 0 32 32'%3e%3cpath d='M30.854 16.548A2.216 2.216 0 0 1 28.764 18H28v11a1 1 0 0 1-1 1h-6v-7c0-2.757-2.243-5-5-5s-5 2.243-5 5v7H5a1 1 0 0 1-1-1V18h-.765a2.215 2.215 0 0 1-2.09-1.451 2.218 2.218 0 0 1 .62-2.47l11.679-11.06a3.718 3.718 0 0 1 5.112 0l11.707 11.086c.678.591.922 1.561.591 2.443z'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55229 1 7 1ZM16 6V5H8V6C8 6.55228 7.55229 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM4 15V11H8V15H4ZM4 17V20C4 20.5523 4.44772 21 5 21H8V17H4ZM10 17V21H14V17H10ZM16 17V21H19C19.5523 21 20 20.5523 20 20V17H16ZM20 15H16V11H20V15ZM14 15H10V11H14V15Z' fill='%230F0F0F'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' fill='none' viewBox='0 0 24 24'%3e%3cpath stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9 6 6 6-6'/%3e%3c/svg%3e";

/**
 * Icône de la maison.
 *
 * @returns {React.Element} - Renvoie l'icône de la maison.
 */
function HomeIcon() {
  return /*#__PURE__*/React.createElement("img", {
    src: img$2,
    alt: "Ic\xF4ne de la maison",
    width: "18",
    height: "18"
  });
}

/**
 * Icône du calendrier.
 *
 * @returns {React.Element} - Renvoie l'icône du calendrier.
 */
function CalendarIcon() {
  return /*#__PURE__*/React.createElement("img", {
    src: img$1,
    alt: "Ic\xF4ne du calendrier",
    width: "18",
    height: "18"
  });
}

/**
 * Icône de la flèche (chevron).
 *
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.direction - Direction de la flèche (peut être 'up', 'right', 'down' ou 'left').
 * @returns {React.Element} - Renvoie l'icône de la flèche.
 */
function ChevronIcon(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'down' : _ref$direction;
  var rotationMap = {
    up: '0',
    right: '90',
    down: '180',
    left: '270'
  };
  var rotation = rotationMap[direction] || '0';
  return /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "Ic\xF4ne de la fl\xE8che",
    width: "30",
    height: "30",
    style: {
      transform: "rotate(".concat(rotation, "deg)")
    }
  });
}

// PropTypes pour ChevronIcon
ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

var css_248z$1 = ".Button-module_button__dg3cB {\r\n    background: transparent;\r\n    border: none;\r\n    padding: 0;\r\n}";
var styles = {"button":"Button-module_button__dg3cB"};
styleInject(css_248z$1);

var _excluded$5 = ["onClick", "children", "icon", "className"];

/**
 * Un composant bouton personnalisé qui prend en charge un icône et du contenu pour enfants.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} [props.onClick] - La fonction à appeler lors du clic sur le bouton.
 * @param {ReactNode} props.children - Le contenu du bouton.
 * @param {ReactComponent} [props.icon] - Le composant icône à afficher dans le bouton.
 * @param {string} [props.className] - Les classes CSS supplémentaires à ajouter au bouton.
 * @param {Ref} ref - La référence vers l'élément du bouton.
 * @returns {ReactElement} - Le composant bouton.
 */
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
    children = _ref.children,
    Icon = _ref.icon,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var handleClick = function handleClick(e) {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    onClick: handleClick,
    className: "".concat(styles.button, " ").concat(className ? className : '')
  }, props), Icon && /*#__PURE__*/React.createElement(Icon, null), children);
});
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.elementType,
  className: PropTypes.string
};

/**
 * Configuration par défaut du composant DatePicker.
 * @constant {Object} DEFAULT_CONFIG
 */
var DEFAULT_CONFIG = {
  YEAR_BLOCK_SIZE: 16,
  USE_ICONS: true,
  DESIGN_TYPE: 'default',
  LANGUAGE: 'fr',
  DATE_FORMAT: 'DEFAULT',
  CUSTOM_STYLES: {},
  START_OF_WEEK: 0,
  // 0 pour Dimanche...
  MANUAL_INPUT_ENABLED: true,
  MIN_YEAR: 1930,
  MAX_YEAR: 2025,
  DATE_FORMATS: {
    DEFAULT: 'DD-MM-YYYY',
    US: 'MM-DD-YYYY',
    ISO: 'YYYY-MM-DD'
  }
};
var currentYear = new Date().getFullYear();

/**
 * Règles de validation pour la configuration du DatePicker.
 * @constant {Object} CONFIG_VALIDATION_RULES
 */
var CONFIG_VALIDATION_RULES = {
  LANGUAGE: ['en', 'fr'],
  START_OF_WEEK: [0, 1, 2, 3, 4, 5, 6],
  DESIGN_TYPE: ['default', 'neuro', 'glass'],
  USE_ICONS: [true, false],
  MANUAL_INPUT_ENABLED: [true, false],
  DATE_FORMAT: Object.keys(DEFAULT_CONFIG.DATE_FORMATS),
  MIN_YEAR: {
    min: 1900,
    max: currentYear
  },
  MAX_YEAR: {
    min: 1900,
    max: currentYear + 50
  }
};

/**
 * Traite la configuration de l'année. Si elle est définie comme une chaîne, elle essaie de la résoudre en une valeur numérique.
 *
 * @function
 * @param {(string|number)} yearConfig - La configuration de l'année, qui peut être une chaîne ou un nombre.
 * @param {number} currentYear - L'année actuelle.
 * @returns {(number|null)} - L'année traitée ou `null` si la configuration est invalide.
 */
var processYearConfig = function processYearConfig(yearConfig, currentYear) {
  if (typeof yearConfig === 'number') return yearConfig;
  if (typeof yearConfig === 'string') {
    var match = yearConfig.match(/(auto|actual)([+-]\d+)?/);
    if (match) {
      var base = currentYear;
      var offset = parseInt(match[2], 10) || 0;
      return base + offset;
    }
  }

  // retourner null si la configuration de l'année n'est pas valide
  return null;
};
var adjustDate = function adjustDate(currentDate, yearAdjustment, monthAdjustment) {
  var year = currentDate.getFullYear() + yearAdjustment;
  var month = (currentDate.getMonth() + monthAdjustment + 12) % 12;
  return new Date(year, month);
};

/**
 * Applique la configuration de l'année et la traite.
 *
 * @function
 * @param {(string|number)} yearConfig - La configuration de l'année.
 * @param {number} currentYear - L'année actuelle.
 * @returns {(number|null)} - L'année traitée ou `null`.
 */
var applyYearConfig = function applyYearConfig(yearConfig, currentYear) {
  return processYearConfig(yearConfig, currentYear);
};

/**
 * Navigue vers le mois suivant.
 *
 * @function
 * @param {Date} currentDate - La date actuelle.
 * @param {number} minYear - L'année minimale autorisée.
 * @param {number} maxYear - L'année maximale autorisée.
 * @returns {Date} - La date du mois suivant.
 */
var goToNextMonth = function goToNextMonth(currentDate, minYear, maxYear) {
  var nextDate = adjustDate(currentDate, currentDate.getMonth() === 11 ? 1 : 0, 1);
  if (nextDate.getFullYear() > applyYearConfig(maxYear)) {
    return new Date(applyYearConfig(maxYear), 11);
  }
  return nextDate;
};
var goToPreviousMonth = function goToPreviousMonth(currentDate, minYear, maxYear) {
  var prevDate = adjustDate(currentDate, currentDate.getMonth() === 0 ? -1 : 0, -1);
  if (prevDate.getFullYear() < applyYearConfig(minYear)) {
    return new Date(applyYearConfig(minYear), 0);
  }
  return prevDate;
};
var goToNextYear = function goToNextYear(currentDate, minYear, maxYear) {
  var nextDate = adjustDate(currentDate, 1, 0);
  if (nextDate.getFullYear() > applyYearConfig(maxYear)) {
    return new Date(applyYearConfig(maxYear), currentDate.getMonth());
  }
  return nextDate;
};
var goToPreviousYear = function goToPreviousYear(currentDate, minYear, maxYear) {
  var prevDate = adjustDate(currentDate, -1, 0);
  if (prevDate.getFullYear() < applyYearConfig(minYear)) {
    return new Date(applyYearConfig(minYear), currentDate.getMonth());
  }
  return prevDate;
};
var goToPreviousYearBlock = function goToPreviousYearBlock(yearsBlock, minYear, maxYear, yearBlockSize) {
  var blockSize = yearBlockSize || DEFAULT_CONFIG.YEAR_BLOCK_SIZE;
  var minProcessedYear = applyYearConfig(minYear, new Date().getFullYear());
  var maxProcessedYear = applyYearConfig(maxYear, new Date().getFullYear());
  var newStartYear = yearsBlock[0] - blockSize;

  // Si nous sommes en dessous de minYear
  if (newStartYear < minProcessedYear) {
    // Si le premier élément du bloc actuel est déjà minYear, affichez les deux dernières années avant maxYear
    if (yearsBlock[0] === minProcessedYear) {
      newStartYear = maxProcessedYear - 1; // Affichez les 2 dernières années avant maxYear
    } else {
      newStartYear = maxProcessedYear - blockSize + 1; // Commencez par maxYear - blockSize + 1
    }
  }

  return Array.from({
    length: blockSize
  }, function (_, i) {
    return newStartYear + i;
  }).filter(function (year) {
    return year >= minProcessedYear && year <= maxProcessedYear;
  });
};
var goToNextYearBlock = function goToNextYearBlock(yearsBlock, minYear, maxYear, yearBlockSize) {
  var blockSize = yearBlockSize || DEFAULT_CONFIG.YEAR_BLOCK_SIZE;
  var minProcessedYear = applyYearConfig(minYear, new Date().getFullYear());
  var maxProcessedYear = applyYearConfig(maxYear, new Date().getFullYear());
  var newStartYear = yearsBlock[0] + blockSize;
  if (newStartYear > maxProcessedYear) {
    newStartYear = minProcessedYear;
  }
  return Array.from({
    length: blockSize
  }, function (_, i) {
    return newStartYear + i;
  }).filter(function (year) {
    return year >= minProcessedYear && year <= maxProcessedYear;
  });
};

/**
 * Calcule la nouvelle date basée sur la vue et la direction actuelles.
 *
 * @function
 * @param {string} view - La vue actuelle (jours, mois ou années).
 * @param {string} direction - La direction de navigation (précédente ou suivante).
 * @param {Array<number>} yearsBlock - Le bloc d'années actuel.
 * @param {Date} prev - La date précédente.
 * @param {number} minYear - L'année minimale autorisée.
 * @param {number} maxYear - L'année maximale autorisée.
 * @param {number} yearBlockSize - La taille du bloc d'années.
 * @returns {object} - Un objet contenant la nouvelle date et le nouveau bloc d'années.
 */
var calculateNewDate = function calculateNewDate(view, direction, yearsBlock, prev, minYear, maxYear, yearBlockSize) {
  var currentYear = new Date().getFullYear();
  var minProcessedYear = applyYearConfig(minYear, currentYear);
  var maxProcessedYear = applyYearConfig(maxYear, currentYear);
  var newDate = prev;
  var newYearBlock = yearsBlock;
  switch (view) {
    case 'months':
      newDate = direction === 'prev' ? goToPreviousYear(prev, minProcessedYear) : goToNextYear(prev, minProcessedYear, maxProcessedYear);
      break;
    case 'days':
      newDate = direction === 'prev' ? goToPreviousMonth(prev, minProcessedYear) : goToNextMonth(prev, minProcessedYear, maxProcessedYear);
      break;
    case 'years':
      newYearBlock = direction === 'prev' ? goToPreviousYearBlock(yearsBlock, minProcessedYear, maxProcessedYear, yearBlockSize) : goToNextYearBlock(yearsBlock, minProcessedYear, maxProcessedYear, yearBlockSize);
      break;
  }
  return {
    newDate: newDate,
    newYearBlock: newYearBlock
  };
};

/**
 * Gère les touches de navigation pour faciliter la navigation dans le calendrier.
 *
 * @function
 * @param {Event} e - L'événement clavier.
 * @param {number} index - L'index actuel.
 * @param {number} maxIndex - L'index maximum.
 * @param {function} action - L'action à exécuter lors de la sélection d'un élément.
 * @param {Array<HTMLElement>} refsArray - Le tableau de références des éléments interactifs.
 * @param {function} getItem - Une fonction pour obtenir un élément basé sur un index.
 * @param {function} closeCalendar - Une fonction pour fermer le calendrier.
 */
function handleNavigationKeys(e, index, maxIndex, action, refsArray, getItem, closeCalendar) {
  switch (e.key) {
    case 'ArrowRight':
      if (index < maxIndex) {
        refsArray[index + 1].focus();
      }
      break;
    case 'ArrowLeft':
      if (index > 0) {
        refsArray[index - 1].focus();
      }
      break;
    case 'Escape':
      if (typeof closeCalendar === 'function') {
        closeCalendar();
      }
      break;
    case 'Enter':
    case 'Space':
      var item = getItem ? getItem(index) : index;
      action(item);
      e.preventDefault();
      break;
    case 'Tab':
      if (index < maxIndex) {
        refsArray[index + 1].focus();
      }
      break;
  }
}

/**
 * Hook personnalisé pour faciliter l'accessibilité au clavier.
 *
 * Ce hook ajoute des écouteurs d'événements pour les touches "Enter" et "Space"
 * à un élément référencé. Lorsque l'une de ces touches est pressée,
 * une fonction de rappel spécifiée est exécutée. Cela facilite l'interaction
 * avec des éléments tels que les boutons ou d'autres éléments interactifs pour les
 * utilisateurs qui naviguent principalement au clavier.
 *
 * @function
 * @param {Function} onAction - La fonction de rappel à exécuter lorsque les touches "Enter" ou "Space" sont pressées.
 * @returns {React.RefObject} - Une référence à l'élément sur lequel les écouteurs d'événements ont été ajoutés.
 */
function useKeyboardAccessibility(onAction) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        onAction();
      }
    };
    var handleKeyUp = function handleKeyUp(e) {
      if (e.key === 'Space') {
        onAction();
      }
    };
    var currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
      currentRef.addEventListener('keyup', handleKeyUp);
    }
    return function () {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyDown);
        currentRef.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [onAction]);
  return ref;
}

var _excluded$4 = ["direction", "onClick", "useIcons", "label"];

/**
 * Composant ChevronButton pour afficher un bouton avec une icône de chevron.
 *
 * @component
 * @param {string} direction - Direction du chevron ("up" ou "down").
 * @param {function} onClick - Fonction appelée lors du clic sur le bouton.
 * @param {boolean} useIcons - Détermine si l'icône doit être utilisée ou non.
 * @param {string} label - Texte alternatif à afficher si useIcons est false.
 * @returns {React.Element} - Renvoie le composant ChevronButton.
 */
var ChevronButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var direction = _ref.direction,
    onClick = _ref.onClick,
    useIcons = _ref.useIcons,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    onClick: onClick,
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    },
    className: styles$1.chevronButton,
    icon: function icon() {
      return useIcons && /*#__PURE__*/React.createElement(ChevronIcon, {
        direction: direction
      });
    }
  }, props), !useIcons && label);
});

/**
 * Composant ChevronButtons pour afficher les boutons de navigation (précédent/suivant).
 *
 * @component
 * @param {function} setViewedDate - Fonction pour définir la date actuellement affichée.
 * @param {boolean} useIcons - Détermine si les icônes doivent être utilisées pour les boutons.
 * @param {string} view - Vue actuelle ("days", "months" ou "years").
 * @param {function} setYearsBlock - Fonction pour définir le bloc d'années.
 * @param {Array<number>} yearsBlock - Bloc d'années actuel.
 * @param {function} setAnimationKey - Fonction pour définir la clé d'animation.
 * @param {number} minYear - Année minimum.
 * @param {number} maxYear - Année maximum.
 * @param {number} yearBlockSize - Taille du bloc d'années.
 * @returns {React.Element} - Renvoie le composant ChevronButtons.
 */
function ChevronButtons(_ref2) {
  var setViewedDate = _ref2.setViewedDate,
    useIcons = _ref2.useIcons,
    view = _ref2.view,
    setYearsBlock = _ref2.setYearsBlock,
    yearsBlock = _ref2.yearsBlock,
    setAnimationKey = _ref2.setAnimationKey,
    minYear = _ref2.minYear,
    maxYear = _ref2.maxYear,
    yearBlockSize = _ref2.yearBlockSize;
  var handleDateChange = function handleDateChange(direction) {
    setViewedDate(function (prev) {
      var _calculateNewDate = calculateNewDate(view, direction, yearsBlock, prev, minYear, maxYear, yearBlockSize),
        newDate = _calculateNewDate.newDate,
        newYearBlock = _calculateNewDate.newYearBlock;
      if (newYearBlock) {
        setYearsBlock(newYearBlock);
      }
      if (newDate) {
        setAnimationKey(function (prevKey) {
          return prevKey + 1;
        });
        return newDate;
      }
      setYearsBlock(newYearBlock);
      setAnimationKey(function (prevKey) {
        return prevKey + 1;
      });
      return newDate;
    });
  };
  var prevButtonRef = useKeyboardAccessibility(function (direction) {
    handleDateChange(direction === 'down' ? 'prev' : 'next');
  });
  var nextButtonRef = useKeyboardAccessibility(function (direction) {
    handleDateChange(direction === 'down' ? 'prev' : 'next');
  });
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.chevronContainer
  }, /*#__PURE__*/React.createElement(ChevronButton, {
    direction: "down",
    onClick: function onClick() {
      return handleDateChange('prev');
    },
    useIcons: useIcons,
    label: "Previous",
    ref: prevButtonRef,
    tabIndex: 0
  }), /*#__PURE__*/React.createElement(ChevronButton, {
    direction: "up",
    onClick: function onClick() {
      return handleDateChange('next');
    },
    useIcons: useIcons,
    label: "Next",
    ref: nextButtonRef,
    tabIndex: 0
  }));
}

var _MASK_FORMATS;
// ========== DATE UTILITIES ==========

var DAYS_IN_A_WEEK = 7;

/**
 * Ajuste l'index du jour de départ en fonction de la configuration du jour de début de semaine.
 *
 * @function
 * @param {number} dayIndex - Index du jour de la semaine (0 pour Dimanche, 1 pour Lundi, etc.).
 * @param {number} startOfWeek - Index du premier jour de la semaine selon la configuration.
 * @returns {number} - Index ajusté du jour.
 */
var adjustStartOfWeek = function adjustStartOfWeek(dayIndex, startOfWeek) {
  var adjustedIndex = dayIndex - startOfWeek;
  return adjustedIndex < 0 ? adjustedIndex + DAYS_IN_A_WEEK : adjustedIndex;
};

/**
 * Génère une liste de jours.
 *
 * @function
 * @param {number} start - Jour de début.
 * @param {number} end - Jour de fin.
 * @param {boolean} isGrayed - Indique si les jours doivent être grisés.
 * @returns {Array} - Liste des jours.
 */
var generateDays = function generateDays(start, end) {
  var isGrayed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return new Array(end - start + 1).fill(null).map(function (_, index) {
    return {
      number: start + index,
      isGrayed: isGrayed
    };
  });
};

/**
 * Génère la liste complète des emplacements de jour pour un mois donné.
 *
 * @function
 * @param {Date} currentMonth - Date représentant le mois actuel.
 * @param {number} startOfWeek - Index du premier jour de la semaine.
 * @returns {Array} - Liste des emplacements de jour.
 */
function generateTotalSlots(currentMonth) {
  var startOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentYear = currentMonth.getFullYear();
  var currentMonthIndex = currentMonth.getMonth();
  var daysInCurrentMonth = getDaysInMonth(currentYear, currentMonthIndex);
  var daysInPreviousMonth = getDaysInMonth(currentYear, currentMonthIndex - 1);
  var firstDayOfCurrentMonth = adjustStartOfWeek(new Date(currentYear, currentMonthIndex, 1).getDay(), startOfWeek);
  var leadingDaysCount = firstDayOfCurrentMonth;
  var trailingDaysCount = (DAYS_IN_A_WEEK - (leadingDaysCount + daysInCurrentMonth) % DAYS_IN_A_WEEK) % DAYS_IN_A_WEEK;
  var leadingDaysFromPreviousMonth = generateDays(daysInPreviousMonth - leadingDaysCount + 1, daysInPreviousMonth, true);
  var daysOfCurrentMonth = generateDays(1, daysInCurrentMonth);
  var trailingDaysForNextMonth = generateDays(1, trailingDaysCount, true);
  return [].concat(_toConsumableArray(leadingDaysFromPreviousMonth), _toConsumableArray(daysOfCurrentMonth), _toConsumableArray(trailingDaysForNextMonth));
}

/**
 * Abbrège le nom du mois si sa longueur dépasse 5 caractères.
 *
 * @function
 * @param {string} month - Nom complet du mois.
 * @returns {string} - Nom du mois abrégé.
 */
function abbreviateMonth(month) {
  return month.length > 5 ? month.substring(0, 4) + '.' : month;
}

/**
 * Obtient le nombre de jours dans un mois donné.
 *
 * @function
 * @param {number} year - L'année.
 * @param {number} month - Le mois (0 pour Janvier, 1 pour Février, etc.).
 * @returns {number} - Nombre de jours dans le mois.
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Formate une date en fonction du format souhaité.
 *
 * @function
 * @param {Date|string} value - Date à formater.
 * @param {string} dateFormat - Format de date souhaité.
 * @returns {string} - Date formatée.
 */
function formatDatePickerDate(value) {
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.DATE_FORMATS.DEFAULT;
  if (!(value instanceof Date)) {
    return value;
  }
  var day = value.getDate();
  var month = value.getMonth() + 1;
  var year = value.getFullYear();
  switch (dateFormat) {
    case 'YYYY-MM-DD':
      return "".concat(year, "/").concat(month.toString().padStart(2, '0'), "/").concat(day.toString().padStart(2, '0'));
    case 'MM-DD-YYYY':
      return "".concat(month.toString().padStart(2, '0'), "/").concat(day.toString().padStart(2, '0'), "/").concat(year);
    case 'DD-MM-YYYY':
      return "".concat(day.toString().padStart(2, '0'), "/").concat(month.toString().padStart(2, '0'), "/").concat(year);
    default:
      return value;
  }
}

/**
 * Convertit une date formatée en chaîne de caractères en un objet Date.
 *
 * @function
 * @param {string} dateString - Date sous forme de chaîne de caractères.
 * @param {string} format - Format de date utilisé.
 * @returns {Date} - Objet Date correspondant.
 */
function convertFormattedStringToDate(dateString) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.DATE_FORMATS.DEFAULT;
  var parts = dateString.split('/');
  switch (format) {
    case 'DD-MM-YYYY':
      return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])));
    case 'MM-DD-YYYY':
      return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1])));
    case 'YYYY-MM-DD':
      return new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
    default:
      throw new Error("Invalid date format: ".concat(format));
  }
}

/**
 * Détermine si une année donnée est une année bissextile ou non.
 *
 * @function
 * @param {number} year - L'année à vérifier.
 * @returns {boolean} - Retourne `true` si l'année est bissextile, sinon `false`.
 */
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function generateRegex(formatKey, separator) {
  var formatMapping = {
    DEFAULT: "^(\\d{2})".concat(separator, "(\\d{2})").concat(separator, "(\\d{4})$"),
    US: "^(\\d{2})".concat(separator, "(\\d{2})").concat(separator, "(\\d{4})$"),
    ISO: "^(\\d{4})".concat(separator, "(\\d{2})").concat(separator, "(\\d{2})$")
  };
  return formatMapping[formatKey];
}

/**
 * Vérifie si une date est valide.
 *
 * @function
 * @param {string} dateString - Date sous forme de chaîne de caractères.
 * @param {string} formatKey - Clé de format de date à utiliser.
 * @param {number} minYear - Année minimale autorisée.
 * @param {number} maxYear - Année maximale autorisée.
 * @returns {object} - Un objet avec `isValid` indiquant si la date est valide et `errorType` indiquant le type d'erreur.
 */
function isValidDate(dateString) {
  var formatKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.DATE_FORMAT;
  var minYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG.MIN_YEAR;
  var maxYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_CONFIG.MAX_YEAR;
  var day, month, year;
  var separator = dateString.includes('/') ? '/' : '-';
  var format = DEFAULT_CONFIG.DATE_FORMATS[formatKey];
  var regex = generateRegex(formatKey, separator);
  if (!new RegExp(regex).test(dateString)) return {
    isValid: false,
    errorType: 'invalidDate'
  };
  switch (format) {
    case DEFAULT_CONFIG.DATE_FORMATS.DEFAULT:
      var _dateString$split$map = dateString.split(separator).map(Number);
      var _dateString$split$map2 = _slicedToArray(_dateString$split$map, 3);
      day = _dateString$split$map2[0];
      month = _dateString$split$map2[1];
      year = _dateString$split$map2[2];
      break;
    case DEFAULT_CONFIG.DATE_FORMATS.US:
      var _dateString$split$map3 = dateString.split(separator).map(Number);
      var _dateString$split$map4 = _slicedToArray(_dateString$split$map3, 3);
      month = _dateString$split$map4[0];
      day = _dateString$split$map4[1];
      year = _dateString$split$map4[2];
      break;
    case DEFAULT_CONFIG.DATE_FORMATS.ISO:
      var _dateString$split$map5 = dateString.split(separator).map(Number);
      var _dateString$split$map6 = _slicedToArray(_dateString$split$map5, 3);
      year = _dateString$split$map6[0];
      month = _dateString$split$map6[1];
      day = _dateString$split$map6[2];
      break;
    default:
      return {
        isValid: false,
        errorType: 'unsupportedFormat'
      };
  }
  if (isNaN(day) || isNaN(month) || isNaN(year)) return {
    isValid: false,
    errorType: 'invalidDate'
  };
  if (day < 1 || day > 31 || month < 1 || month > 12) return {
    isValid: false,
    errorType: 'invalidDate'
  };
  if (year < minYear || year > maxYear) return {
    isValid: false,
    errorType: 'outOfRange'
  };
  if (month === 2) {
    if (isLeapYear(year) && day > 29) return {
      isValid: false,
      errorType: 'invalidDate'
    };
    if (!isLeapYear(year) && day > 28) return {
      isValid: false,
      errorType: 'invalidDate'
    };
  } else {
    var daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) return {
      isValid: false,
      errorType: 'invalidDate'
    };
  }
  return {
    isValid: true,
    errorType: null
  };
}
var MASK_FORMATS = (_MASK_FORMATS = {}, _defineProperty(_MASK_FORMATS, DEFAULT_CONFIG.DATE_FORMATS.DEFAULT, [2, 5]), _defineProperty(_MASK_FORMATS, DEFAULT_CONFIG.DATE_FORMATS.US, [2, 5]), _defineProperty(_MASK_FORMATS, DEFAULT_CONFIG.DATE_FORMATS.ISO, [4, 7]), _MASK_FORMATS);

/**
 * Formate une date pour correspondre à un masque donné.
 *
 * @function
 * @param {string} value - Date sous forme de chaîne de caractères.
 * @param {string} format - Format souhaité pour le masque.
 * @param {string} separator - Séparateur à utiliser dans la date (par défaut '/').
 * @returns {string} - Date formatée selon le masque.
 */
function formatToMask(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.DATE_FORMATS.DEFAULT;
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
    var _value$split = value.split('-'),
      _value$split2 = _slicedToArray(_value$split, 3),
      year = _value$split2[0],
      month = _value$split2[1],
      day = _value$split2[2];
    switch (format) {
      case DEFAULT_CONFIG.DATE_FORMATS.US:
        value = "".concat(month).concat(day).concat(year);
        break;
      case DEFAULT_CONFIG.DATE_FORMATS.DEFAULT:
        value = "".concat(day).concat(month).concat(year);
        break;
      case DEFAULT_CONFIG.DATE_FORMATS.ISO:
        // Do nothing as the format is already correct.
        break;
      default:
        throw new Error("Invalid format: ".concat(format));
    }
  }
  var positions = MASK_FORMATS[format] || [];
  if (!positions.length) {
    throw new Error("Invalid format: ".concat(format));
  }
  var maskedValue = value.replace(/\D/g, '');
  positions.forEach(function (position) {
    if (maskedValue.length > position) {
      maskedValue = "".concat(maskedValue.substring(0, position)).concat(separator).concat(maskedValue.substring(position));
    }
  });
  return maskedValue;
}

/**
 * Sélectionne une date.
 *
 * Cette fonction met à jour la date sélectionnée et ferme le calendrier.
 *
 * @function
 * @param {function} selectDate - Fonction pour sélectionner une date.
 * @param {function} closeCalendar - Fonction pour fermer le calendrier.
 * @param {Date} currentMonth - Mois actuellement affiché.
 * @param {object} day - Jour sélectionné.
 */
function chooseDate(selectDate, closeCalendar, currentMonth, day) {
  selectDate("".concat(currentMonth.getFullYear(), "-").concat(String(currentMonth.getMonth() + 1).padStart(2, '0'), "-").concat(String(day).padStart(2, '0')));
  closeCalendar();
}

/**
 * Constantes représentant les différentes vues du sélecteur de date.
 */
var DAYS = 'days';
var MONTHS = 'months';
var YEARS = 'years';

/**
 * Passe à la vue du mois.
 *
 * @function
 * @param {string} view - La vue actuelle (jours, mois ou années).
 * @returns {string} - Retourne la vue "mois" si la vue actuelle est "jours", sinon retourne la vue actuelle.
 */
function switchToMonthView(view) {
  return view === DAYS ? MONTHS : view;
}

/**
 * Basculer entre la vue des années et la vue des mois.
 *
 * @function
 * @param {string} view - La vue actuelle (mois ou années).
 * @returns {string} - Retourne la vue "années" si la vue actuelle est "mois", sinon retourne la vue "mois".
 */
function toggleYearView(view) {
  return view === YEARS ? MONTHS : YEARS;
}

/**
 * Réinitialise la date à la date actuelle.
 *
 * @function
 * @returns {Date} - La date actuelle sans l'heure, les minutes et les secondes.
 */
function resetToCurrentDate() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/**
 * Réorganise les jours de la semaine en fonction de l'index du jour de départ.
 *
 * @function
 * @param {string[]} days - Tableau des jours de la semaine.
 * @param {number} startDayIndex - Index du jour de départ (0 pour dimanche, 6 pour samedi).
 * @returns {string[]} - Tableau des jours de la semaine réorganisé.
 */
function reorderDays(days, startDayIndex) {
  if (startDayIndex < 0 || startDayIndex > 6) return days;
  return [].concat(_toConsumableArray(days.slice(startDayIndex)), _toConsumableArray(days.slice(0, startDayIndex)));
}

/**
 * Constantes représentant les directions pour naviguer entre les mois.
 */
var FORWARD = 'forward';
var BACKWARD = 'backward';

/**
 * Met à jour le mois actuel en fonction de la direction spécifiée.
 *
 * @function
 * @param {Date} currentMonth - Le mois actuel.
 * @param {string} direction - Direction pour la mise à jour ("forward" ou "backward").
 * @returns {Date} - Nouveau mois après mise à jour.
 */
var updateMonth = function updateMonth(currentMonth, direction) {
  var newMonth = new Date(currentMonth);
  var increment = direction === FORWARD ? 1 : -1;
  newMonth.setMonth(currentMonth.getMonth() + increment);
  return newMonth;
};

/**
 * Gère la navigation entre les jours en utilisant la touche Tab.
 *
 * @function
 * @param {Event} e - L'événement de pression de touche.
 * @param {Object} day - L'objet jour actuel.
 * @param {number} index - Index du jour actuel.
 * @param {Date} currentMonth - Le mois actuel.
 * @returns {Object} - Un objet contenant la direction pour la navigation, s'il y en a une.
 */
var handleTabKey = function handleTabKey(e, day, index, currentMonth) {
  var daysInCurrentMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  var isLastDayOfCurrentMonth = day.number === daysInCurrentMonth && !day.isGrayed;
  var isFirstDayOfCurrentMonth = day.number === 1 && !day.isGrayed;
  if (!e.shiftKey && isLastDayOfCurrentMonth) {
    e.preventDefault();
    return {
      direction: FORWARD
    };
  } else if (e.shiftKey && isFirstDayOfCurrentMonth) {
    e.preventDefault();
    return {
      direction: BACKWARD
    };
  }
  return {};
};

/**
 * Sélecteur de mois.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {Date} props.currentMonth - Mois actuellement affiché.
 * @param {Array<string>} props.months - Liste des mois traduits.
 * @param {string} props.view - Vue actuelle ('days', 'months', 'years').
 * @param {Function} props.setView - Fonction pour changer la vue.
 */
function MonthSelector(_ref) {
  var currentMonth = _ref.currentMonth,
    months = _ref.months,
    view = _ref.view,
    setView = _ref.setView;
  var handleMonthSelect = function handleMonthSelect() {
    setView(switchToMonthView(view));
  };
  var ref = useKeyboardAccessibility(handleMonthSelect);
  if (view === YEARS) return null;
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleMonthSelect,
    className: styles$1.navButton,
    tabIndex: 0
  }, months[currentMonth.getMonth()]);
}
MonthSelector.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired
};

/**
 * Sélecteur d'année.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {Date} props.currentMonth - Mois actuellement affiché.
 * @param {string} props.view - Vue actuelle ('days', 'months', 'years').
 * @param {Function} props.setView - Fonction pour changer la vue.
 * @param {Array<number>} props.yearsBlock - Bloc d'années actuel.
 */
function YearSelector(_ref2) {
  var currentMonth = _ref2.currentMonth,
    view = _ref2.view,
    setView = _ref2.setView,
    yearsBlock = _ref2.yearsBlock;
  var handleYearSelect = function handleYearSelect() {
    setView(toggleYearView(view));
  };
  var ref = useKeyboardAccessibility(handleYearSelect);
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleYearSelect,
    className: styles$1.navButton,
    tabIndex: 0
  }, view === YEARS ? "".concat(yearsBlock[0], "-").concat(yearsBlock[yearsBlock.length - 1]) : currentMonth.getFullYear());
}
YearSelector.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  yearsBlock: PropTypes.arrayOf(PropTypes.number).isRequired
};

/**
 * Bouton pour revenir à la date actuelle.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {Function} props.setViewedDate - Fonction pour mettre à jour la date affichée.
 * @param {Function} props.setView - Fonction pour changer la vue.
 * @param {Function} props.setCurrentDate - Fonction pour mettre à jour la date actuelle.
 */
function HomeButton(_ref3) {
  var setViewedDate = _ref3.setViewedDate,
    setView = _ref3.setView,
    setCurrentDate = _ref3.setCurrentDate;
  var handleHomeClick = function handleHomeClick() {
    var dateToday = resetToCurrentDate();
    setViewedDate(dateToday);
    setCurrentDate(dateToday);
    setView(DAYS);
  };
  var ref = useKeyboardAccessibility(handleHomeClick);
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleHomeClick,
    icon: HomeIcon,
    className: styles$1.navButton,
    tabIndex: 0
  });
}
HomeButton.propTypes = {
  setViewedDate: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
  setCurrentDate: PropTypes.func.isRequired
};
function NavSelector(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles$1.NavSelector
  }, /*#__PURE__*/React.createElement(MonthSelector, props), /*#__PURE__*/React.createElement(YearSelector, props)), /*#__PURE__*/React.createElement("div", {
    className: styles$1.homeSelector
  }, /*#__PURE__*/React.createElement(HomeButton, props)), /*#__PURE__*/React.createElement(ChevronButtons, props));
}

var css_248z = "/* Glass */\r\n.AlternativeCalendar-module_glass__42Ilj.AlternativeCalendar-module_calendar__xJfkY {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 10px 10px;\r\n    background: rgba(108, 172, 227, 0.3);\r\n    box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(255, 255, 255, 0.18);\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n    color: rgba(0, 0, 0, 0.867);\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_active__eqq7e {\r\n    background-color: #761b1b;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_daysContainer__a371R {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n    box-shadow: none\r\n}\r\n\r\n.AlternativeCalendar-module_glassHeadersContainer__MHHPb {\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\n.AlternativeCalendar-module_glassHeader__z1PV8 {\r\n    text-transform: lowercase;\r\n    text-align: center;\r\n    padding: 8px 8px;\r\n    font-size: 16px;\r\n    background: rgba(118, 170, 213, 0.156);\r\n    box-shadow: 0 4px 16px 0 rgba(20, 20, 20, 0.10);\r\n    backdrop-filter: blur(8px);\r\n    color: rgba(9, 9, 9, 0.623);\r\n    cursor: default;\r\n    position: relative;\r\n\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_day__FgpKU {\r\n    cursor: default;\r\n    text-align: center;\r\n    padding: 8px 4px;\r\n    transition: all 0.3s ease;\r\n    box-shadow: none;\r\n    color: #761b1b;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_day__FgpKU:hover,\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_month__spIOn:hover,\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_year__qTgQM:hover {\r\n    background-color: #490e0e;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_active__eqq7e {\r\n    background-color: #f0f0f0;\r\n    box-shadow: none\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_navButton__EH2c2:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.AlternativeCalendar-module_glassDay__3wB-B {\r\n    background: rgba(108, 172, 227, 0.3);\r\n    box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border-radius: 5px;\r\n    color: rgb(66, 68, 82);\r\n}\r\n\r\n.AlternativeCalendar-module_glassMonth__xTNO2,\r\n.AlternativeCalendar-module_glassYear__v9E0C {\r\n    background: rgba(108, 172, 227, 0.3);\r\n    box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25);\r\n    border-radius: 5px;\r\n    color: rgb(66, 68, 82);\r\n}\r\n\r\n.AlternativeCalendar-module_glassDay__3wB-B:hover,\r\n.AlternativeCalendar-module_glassYear__v9E0C:hover,\r\n.AlternativeCalendar-module_glassMonth__xTNO2:hover {\r\n    background: rgba(243, 254, 255, 0.473);\r\n}\r\n\r\n.AlternativeCalendar-module_glassActive__M1uaA {\r\n    background: #76aad5;\r\n    box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border-radius: 5px;\r\n    color: aliceblue;\r\n}\r\n\r\n.AlternativeCalendar-module_glassToday__LQ81U {\r\n    background: rgba(243, 254, 255, 0.473);\r\n    box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border-radius: 5px;\r\n}\r\n\r\n.AlternativeCalendar-module_glassGrayedDay__PG7Xn {\r\n    background: rgba(243, 254, 255, 0);\r\n    /* box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.25); */\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    /* border-radius: 5px; */\r\n    color: #0000007e;\r\n}\r\n\r\n.AlternativeCalendar-module_glassGrayedDay__PG7Xn::after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    left: 50%;\r\n}\r\n\r\n/* .glassYearsContainer {\r\n} */\r\n\r\n/* Neuro */\r\n.AlternativeCalendar-module_neuro__LpPqE.AlternativeCalendar-module_calendar__xJfkY {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 20px 20px;\r\n    -webkit-border-radius: 20px;\r\n    border-radius: 20px;\r\n    background: #ebecf0;\r\n    -webkit-box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n    box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n}\r\n\r\n.AlternativeCalendar-module_neuro__LpPqE .AlternativeCalendar-module_daysContainer__a371R {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n    box-shadow: none\r\n}\r\n\r\n.AlternativeCalendar-module_neuroDay__Roawv {\r\n    border-radius: 25%;\r\n    box-shadow: 0px 0px 0px #dfe0e4, -0px -0px 0px #f7f8fc;\r\n    transition: box-shadow 0.3s ease;\r\n}\r\n\r\n.AlternativeCalendar-module_neuroDay__Roawv:hover {\r\n    background: #ebecf0;\r\n    -webkit-box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n    box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n}\r\n\r\n.AlternativeCalendar-module_neuroYear__bG5pl,\r\n.AlternativeCalendar-module_neuroMonth__k8Ovu {\r\n    border-radius: 10%;\r\n    box-shadow: 0px 0px 0px #dfe0e4, -0px -0px 0px #f7f8fc;\r\n    transition: box-shadow 0.3s ease;\r\n}\r\n\r\n.AlternativeCalendar-module_neuroYear__bG5pl:hover,\r\n.AlternativeCalendar-module_neuroMonth__k8Ovu:hover {\r\n    background: #ebecf0;\r\n    -webkit-box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n    box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n}\r\n\r\n.AlternativeCalendar-module_neuroActive__bCIx0,\r\n.AlternativeCalendar-module_neuroToday__QpkEF {\r\n    border-radius: 25%;\r\n    background: #ebecf0;\r\n    -webkit-box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n    box-shadow: 6px 6px 8px #dfe0e4, -6px -6px 8px #f7f8fc;\r\n}\r\n\r\n.AlternativeCalendar-module_neuroToday__QpkEF {\r\n    background: #c6c6c6;\r\n}";
var alternativeStyles = {"glass":"AlternativeCalendar-module_glass__42Ilj","calendar":"AlternativeCalendar-module_calendar__xJfkY","active":"AlternativeCalendar-module_active__eqq7e","daysContainer":"AlternativeCalendar-module_daysContainer__a371R","glassHeadersContainer":"AlternativeCalendar-module_glassHeadersContainer__MHHPb","glassHeader":"AlternativeCalendar-module_glassHeader__z1PV8","day":"AlternativeCalendar-module_day__FgpKU","month":"AlternativeCalendar-module_month__spIOn","year":"AlternativeCalendar-module_year__qTgQM","navButton":"AlternativeCalendar-module_navButton__EH2c2","glassDay":"AlternativeCalendar-module_glassDay__3wB-B","glassMonth":"AlternativeCalendar-module_glassMonth__xTNO2","glassYear":"AlternativeCalendar-module_glassYear__v9E0C","glassActive":"AlternativeCalendar-module_glassActive__M1uaA","glassToday":"AlternativeCalendar-module_glassToday__LQ81U","glassGrayedDay":"AlternativeCalendar-module_glassGrayedDay__PG7Xn","neuro":"AlternativeCalendar-module_neuro__LpPqE","neuroDay":"AlternativeCalendar-module_neuroDay__Roawv","neuroYear":"AlternativeCalendar-module_neuroYear__bG5pl","neuroMonth":"AlternativeCalendar-module_neuroMonth__k8Ovu","neuroActive":"AlternativeCalendar-module_neuroActive__bCIx0","neuroToday":"AlternativeCalendar-module_neuroToday__QpkEF"};
styleInject(css_248z);

/**
 * Hook personnalisé pour obtenir les styles en fonction du type de design spécifié.
 *
 * Ce hook fournit un ensemble de styles basé sur le type de design choisi pour le calendrier.
 * Il prend en charge les designs 'default', 'neuro', et 'glass' et retourne
 * un objet contenant les styles et classes CSS associés à ce design.
 *
 * @function
 * @param {string} designType - Le type de design à utiliser (par défaut : 'default').
 * @returns {Object} Un objet contenant les styles et classes CSS associés au design choisi.
 */
var useDesignStyles = function useDesignStyles() {
  var designType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var selectedStyles = styles$1;
  var designClass = '';
  if (designType === 'neuro') {
    selectedStyles = _objectSpread2(_objectSpread2({}, styles$1), alternativeStyles);
    designClass = 'neuro';
  } else if (designType === 'glass') {
    selectedStyles = _objectSpread2(_objectSpread2({}, styles$1), alternativeStyles);
    designClass = 'glass';
  }
  var dayClass = alternativeStyles["".concat(designClass, "Day")];
  var grayedDayClass = alternativeStyles["".concat(designClass, "GrayedDay")];
  var daysContainerClass = alternativeStyles["".concat(designClass, "DaysContainer")];
  var activeClass = alternativeStyles["".concat(designClass, "Active")];
  var headerClass = alternativeStyles["".concat(designClass, "Header")];
  var todayClass = alternativeStyles["".concat(designClass, "Today")];
  var yearsContainerClass = alternativeStyles["".concat(designClass, "YearsContainer")];
  var yearClass = alternativeStyles["".concat(designClass, "Year")];
  var monthsContainerClass = alternativeStyles["".concat(designClass, "MonthsContainer")];
  var monthClass = alternativeStyles["".concat(designClass, "Month")];
  return {
    selectedStyles: selectedStyles,
    designClass: designClass,
    dayClass: dayClass,
    grayedDayClass: grayedDayClass,
    daysContainerClass: daysContainerClass,
    activeClass: activeClass,
    todayClass: todayClass,
    headerClass: headerClass,
    yearsContainerClass: yearsContainerClass,
    yearClass: yearClass,
    monthsContainerClass: monthsContainerClass,
    monthClass: monthClass
  };
};

/**
 * Vue des jours dans le calendrier.
 *
 * @param {Object} props - Propriétés pour DaysView.
 * @param {string} props.designType - Type de design utilisé pour le calendrier.
 * @param {Array} props.totalSlots - Liste des jours dans le mois actuel.
 * @param {Function} props.chooseDate - Fonction appelée lorsqu'une date est sélectionnée.
 * @param {Array} props.reorderedDays - Liste des jours de la semaine réordonnés en fonction de la configuration.
 * @param {Function} props.setCurrentMonth - Fonction pour définir le mois actuellement visualisé.
 * @param {Date} props.currentMonth - Le mois actuellement visualisé.
 * @param {Date} props.selectedDate - La date actuellement sélectionnée.
 */
function DaysView(_ref) {
  var designType = _ref.designType,
    totalSlots = _ref.totalSlots,
    chooseDate = _ref.chooseDate,
    reorderedDays = _ref.reorderedDays,
    setCurrentMonth = _ref.setCurrentMonth,
    currentMonth = _ref.currentMonth,
    selectedDate = _ref.selectedDate;
  var daysRefs = React.useRef([]);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasBeenHovered = _useState2[0],
    setHasBeenHovered = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    changedMonth = _useState4[0],
    setChangedMonth = _useState4[1];
  var _useDesignStyles = useDesignStyles(designType),
    selectedStyles = _useDesignStyles.selectedStyles,
    designClass = _useDesignStyles.designClass,
    dayClass = _useDesignStyles.dayClass,
    grayedDayClass = _useDesignStyles.grayedDayClass,
    activeClass = _useDesignStyles.activeClass,
    todayClass = _useDesignStyles.todayClass,
    headerClass = _useDesignStyles.headerClass;
  var resetHoveredState = function resetHoveredState() {
    return setHasBeenHovered(false);
  };
  var handleDayHover = function handleDayHover() {
    return setHasBeenHovered(true);
  };
  var today = new Date();
  React.useEffect(function () {
    if (changedMonth === 'next') {
      var _daysRefs$current$;
      (_daysRefs$current$ = daysRefs.current[0]) === null || _daysRefs$current$ === void 0 || _daysRefs$current$.focus();
    } else if (changedMonth === 'prev') {
      var _daysRefs$current;
      (_daysRefs$current = daysRefs.current[daysRefs.current.length - 1]) === null || _daysRefs$current === void 0 || _daysRefs$current.focus();
    }
  }, [changedMonth]);
  var handleDayKeyDown = function handleDayKeyDown(e, index) {
    if (e.key === 'Tab') {
      var direction;
      if (e.shiftKey && index === 0) {
        e.preventDefault();
        direction = BACKWARD;
        setCurrentMonth(updateMonth(currentMonth, direction));
        setChangedMonth('prev');
        return;
      }
      if (!e.shiftKey && index === totalSlots.length - 1) {
        direction = 'forward';
        setCurrentMonth(updateMonth(currentMonth, direction));
        setChangedMonth('next');
        return;
      }
      var result = handleTabKey(e, totalSlots[index], index, currentMonth);
      if (result.direction) {
        e.preventDefault();
        setCurrentMonth(updateMonth(currentMonth, result.direction));
      }
    } else {
      handleNavigationKeys(e, index, totalSlots.length - 1, function (selectedIndex) {
        return chooseDate(totalSlots[selectedIndex].number);
      }, daysRefs.current);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectedStyles.daysContainer, " ").concat(designClass ? alternativeStyles[designClass] : ''),
    onMouseLeave: resetHoveredState
  }, reorderedDays.map(function (day) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(selectedStyles.header, " ").concat(headerClass),
      key: day
    }, day);
  }), totalSlots.map(function (day, index) {
    var todayIsThisDay = !day.isGrayed && today.getDate() === day.number && today.getMonth() === currentMonth.getMonth() && today.getFullYear() === currentMonth.getFullYear();
    var isSelectedDate = !day.isGrayed && selectedDate.getDate() === day.number && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear();
    var highlightedClass = '';
    if (isSelectedDate && !hasBeenHovered) {
      highlightedClass = activeClass || styles$1.active;
    } else if (todayIsThisDay && !hasBeenHovered) {
      highlightedClass = todayClass || styles$1.today;
    }
    var dayClassname = day.isGrayed ? "".concat(styles$1.grayedDay, " ").concat(grayedDayClass) : "".concat(styles$1.day, " ").concat(dayClass);
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "".concat(dayClassname, " ").concat(highlightedClass),
      onClick: function onClick(event) {
        event.stopPropagation();
        if (!day.isGrayed) chooseDate(day.number);
      },
      onKeyDown: function onKeyDown(e) {
        return handleDayKeyDown(e, index);
      },
      onMouseEnter: handleDayHover,
      ref: function ref(el) {
        return daysRefs.current[index] = el;
      },
      tabIndex: day.isGrayed ? -1 : 0
    }, day.number);
  }));
}
DaysView.propTypes = {
  designType: PropTypes.string.isRequired,
  totalSlots: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    isGrayed: PropTypes.bool
  })).isRequired,
  chooseDate: PropTypes.func.isRequired,
  reorderedDays: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired
};

/**
 * Vue des mois dans le calendrier.
 *
 * @param {Object} props - Propriétés pour MonthsView.
 * @param {Function} props.handleMonthClick - Fonction appelée lorsqu'un mois est sélectionné.
 * @param {Date} props.selectedDate - La date actuellement sélectionnée.
 * @param {Object} props.translations - Traductions pour les mois.
 */
function MonthsView(_ref) {
  var handleMonthClick = _ref.handleMonthClick,
    selectedDate = _ref.selectedDate,
    translations = _ref.translations,
    designType = _ref.designType;
  var monthsRefs = React.useRef([]);
  var handleMonthKeyDown = function handleMonthKeyDown(e, index) {
    handleNavigationKeys(e, index, 11, handleMonthClick, monthsRefs.current);
  };
  var _useDesignStyles = useDesignStyles(designType),
    selectedStyles = _useDesignStyles.selectedStyles,
    designClass = _useDesignStyles.designClass,
    monthClass = _useDesignStyles.monthClass,
    monthsContainerClass = _useDesignStyles.monthsContainerClass;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectedStyles.monthsContainer, " ").concat(styles$1.monthsContainer, " ").concat(designClass ? alternativeStyles[designClass] : '', " ").concat(monthsContainerClass)
  }, translations.shortMonths.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: month,
      className: "".concat(styles$1.month, " ").concat(monthClass, " ").concat(index === selectedDate.getMonth() ? styles$1.selectedMonth : ''),
      onClick: function onClick(event) {
        event.stopPropagation();
        handleMonthClick(index);
      },
      onKeyDown: function onKeyDown(e) {
        return handleMonthKeyDown(e, index);
      },
      ref: function ref(el) {
        return monthsRefs.current[index] = el;
      },
      tabIndex: 0
    }, abbreviateMonth(month));
  }));
}
MonthsView.propTypes = {
  handleMonthClick: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  translations: PropTypes.shape({
    shortMonths: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

/**
 * Vue des années dans le calendrier.
 *
 * @param {Object} props - Propriétés pour YearsView.
 * @param {Function} props.handleYearClick - Fonction appelée lorsqu'une année est sélectionnée.
 * @param {Date} props.selectedDate - La date actuellement sélectionnée.
 * @param {Array} props.yearsBlock - Tableau contenant les années à afficher.
 * @param {number} props.yearBlockSize - Nombre d'années à afficher.
 * @param {number} props.minYear - Année minimale.
 * @param {number} props.maxYear - Année maximale.
 */
function YearsView(_ref) {
  var handleYearClick = _ref.handleYearClick,
    selectedDate = _ref.selectedDate,
    yearsBlock = _ref.yearsBlock,
    yearBlockSize = _ref.yearBlockSize;
    _ref.minYear;
    _ref.maxYear;
    var _ref$designType = _ref.designType,
    designType = _ref$designType === void 0 ? 'default' : _ref$designType;
  var _useDesignStyles = useDesignStyles(designType),
    selectedStyles = _useDesignStyles.selectedStyles,
    designClass = _useDesignStyles.designClass,
    yearsContainerClass = _useDesignStyles.yearsContainerClass,
    yearClass = _useDesignStyles.yearClass;
  var yearsRefs = React.useRef([]);
  var displayedYears = yearsBlock.slice(0, yearBlockSize);
  var handleYearKeyDown = function handleYearKeyDown(e, index) {
    handleNavigationKeys(e, index, displayedYears.length - 1, handleYearClick, yearsRefs.current, function (i) {
      return displayedYears[i];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectedStyles.yearsContainer, " ").concat(styles$1.yearsContainer, " ").concat(designClass ? alternativeStyles[designClass] : '', " ").concat(yearsContainerClass)
  }, displayedYears.map(function (year, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: year || index,
      className: "".concat(styles$1.year, " ").concat(yearClass, " ").concat(index === selectedDate.getYear() ? styles$1.selectedYear : ''),
      onClick: function onClick(event) {
        event.stopPropagation();
        handleYearClick(year);
      },
      onKeyDown: function onKeyDown(e) {
        return handleYearKeyDown(e, index);
      },
      ref: function ref(el) {
        return yearsRefs.current[index] = el;
      },
      tabIndex: 0
    }, year);
  }));
}
YearsView.propTypes = {
  handleYearClick: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  yearsBlock: PropTypes.arrayOf(PropTypes.number).isRequired,
  yearBlockSize: PropTypes.number.isRequired,
  minYear: PropTypes.number,
  maxYear: PropTypes.number
};

/**
 * Composant DateGrid pour afficher les grilles des jours, mois ou années.
 *
 * @component
 * @param {Array<Object>} totalSlots - Liste de tous les emplacements de jours pour le mois en cours.
 * @param {function} chooseDate - Fonction pour choisir une date.
 * @param {Object} translations - Traductions pour les mois et les jours.
 * @param {string} view - Vue actuelle ("days", "months" ou "years").
 * @param {function} setView - Fonction pour définir la vue.
 * @param {function} setCurrentMonth - Fonction pour définir le mois en cours.
 * @param {Date} currentMonth - Mois actuellement visualisé.
 * @param {Array<number>} yearsBlock - Bloc d'années actuel.
 * @param {number} animationKey - Clé d'animation.
 * @param {Array<string>} reorderedDays - Jours de la semaine réorganisés.
 * @param {function} closeCalendar - Fonction pour fermer le calendrier.
 * @param {Date} selectedDate - Date actuellement sélectionnée.
 * @param {Date} viewedDate - Date actuellement visualisée.
 * @param {Date} currentDate - Date actuelle.
 * @param {number} yearBlockSize - Taille du bloc d'années.
 * @param {number} minYear - Année minimum.
 * @param {number} maxYear - Année maximum.
 * @param {string} designType - Type de design ("default" ou "alternative").
 * @returns {React.Element} - Renvoie le composant DateGrid.
 */
function DateGrid(_ref) {
  var totalSlots = _ref.totalSlots,
    chooseDate = _ref.chooseDate,
    translations = _ref.translations,
    view = _ref.view,
    setView = _ref.setView,
    setCurrentMonth = _ref.setCurrentMonth,
    currentMonth = _ref.currentMonth,
    yearsBlock = _ref.yearsBlock,
    animationKey = _ref.animationKey,
    reorderedDays = _ref.reorderedDays,
    closeCalendar = _ref.closeCalendar,
    selectedDate = _ref.selectedDate,
    viewedDate = _ref.viewedDate,
    currentDate = _ref.currentDate,
    yearBlockSize = _ref.yearBlockSize,
    minYear = _ref.minYear,
    maxYear = _ref.maxYear,
    designType = _ref.designType;
  var handleMonthClick = function handleMonthClick(monthIndex) {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));
    setView('days');
  };
  var handleYearClick = function handleYearClick(selectedYear) {
    setCurrentMonth(new Date(selectedYear, currentMonth.getMonth()));
    setView('months');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, view === 'days' && /*#__PURE__*/React.createElement(DaysView, {
    totalSlots: totalSlots,
    chooseDate: chooseDate,
    translations: translations,
    reorderedDays: reorderedDays,
    closeCalendar: closeCalendar,
    setCurrentMonth: setCurrentMonth,
    currentMonth: currentMonth,
    selectedDate: selectedDate,
    viewedDate: viewedDate,
    currentDate: currentDate,
    designType: designType
  }), view === 'months' && /*#__PURE__*/React.createElement(MonthsView, {
    translations: translations,
    handleMonthClick: handleMonthClick,
    selectedDate: selectedDate,
    designType: designType
  }), view === 'years' && /*#__PURE__*/React.createElement(YearsView, {
    currentMonth: currentMonth,
    yearsBlock: yearsBlock,
    animationKey: animationKey,
    handleYearClick: handleYearClick,
    selectedDate: selectedDate,
    yearBlockSize: yearBlockSize,
    minYear: minYear,
    maxYear: maxYear,
    designType: designType
  }));
}

var months$1 = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var shortMonths$1 = [
	"Jan.",
	"Feb.",
	"Mar.",
	"Apr.",
	"May",
	"June",
	"July",
	"Aug.",
	"Sept.",
	"Oct.",
	"Nov.",
	"Dec."
];
var days$1 = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
var placeholder$1 = "Select a date";
var errors$1 = {
	invalidDateFormat: "Date format is invalid",
	invalidDateRange: "The date should be between {minYear} and {maxYear}.",
	invalidDate: "The date is invalid",
	unknownError: "An unknown error has occurred"
};
var enTranslations = {
	months: months$1,
	shortMonths: shortMonths$1,
	days: days$1,
	placeholder: placeholder$1,
	errors: errors$1
};

var months = [
	"Janvier",
	"Février",
	"Mars",
	"Avril",
	"Mai",
	"Juin",
	"Juillet",
	"Août",
	"Septembre",
	"Octobre",
	"Novembre",
	"Décembre"
];
var shortMonths = [
	"Janv.",
	"Févr.",
	"Mars",
	"Avr.",
	"Mai",
	"Juin",
	"Juil.",
	"Août",
	"Sept.",
	"Oct.",
	"Nov.",
	"Déc."
];
var days = [
	"Dim",
	"Lun",
	"Mar",
	"Mer",
	"Jeu",
	"Ven",
	"Sam"
];
var placeholder = "Sélectionnez une date";
var errors = {
	invalidDateFormat: "Le format de la date est invalide",
	invalidDateRange: "La date doit être comprise entre {minYear} et {maxYear}.",
	invalidDate: "La date est invalide",
	unknownError: "Une erreur inconnue est survenue"
};
var frTranslations = {
	months: months,
	shortMonths: shortMonths,
	days: days,
	placeholder: placeholder,
	errors: errors
};

/**
 * Récupère les traductions en fonction de la langue spécifiée.
 *
 * Cette fonction retourne un ensemble de chaînes traduites basées sur la langue choisie.
 * Actuellement, seules les traductions en anglais ("en") et en français ("fr") sont disponibles.
 *
 * @function
 * @param {string} [language='en'] - La langue pour laquelle obtenir les traductions. Par défaut, c'est l'anglais.
 * @returns {Object} - Un objet contenant les chaînes traduites pour la langue spécifiée.
 */
function getTranslations() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  switch (language) {
    case 'fr':
      return frTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

/**
 * Hook personnalisé pour gérer la logique du calendrier.
 *
 * Ce hook renvoie les informations relatives à la date affichée, les créneaux disponibles,
 * la date sélectionnée et fournit une fonction pour mettre à jour la date affichée.
 *
 * @function
 * @param {Date} initialMonth - Le mois initial à afficher.
 * @param {Date} selectedDate - La date actuellement sélectionnée.
 * @param {number} [startOfWeek=0] - Le premier jour de la semaine (0 pour Dimanche, 1 pour Lundi, etc.).
 * @returns {Object} Un objet contenant les propriétés viewedDate, setViewedDate, totalSlots et selectedDate.
 */
function useCalendarLogic(initialMonth, selectedDate) {
  var startOfWeek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _useState = React.useState(selectedDate || initialMonth),
    _useState2 = _slicedToArray(_useState, 2),
    viewedDate = _useState2[0],
    setViewedDate = _useState2[1];
  var totalSlots = generateTotalSlots(viewedDate, startOfWeek);
  return {
    viewedDate: viewedDate,
    setViewedDate: setViewedDate,
    totalSlots: totalSlots,
    selectedDate: selectedDate
  };
}

/**
 * Hook personnalisé pour gérer la logique des années.
 *
 * Ce hook génère une liste d'années basée sur la plage min-max spécifiée et la taille du bloc d'années.
 * Il est principalement utilisé pour la navigation entre les années dans un sélecteur de date.
 *
 * @function
 * @param {number} minYear - L'année minimale à inclure dans la liste des années. Par défaut, elle est basée sur la configuration par défaut.
 * @param {number} maxYear - L'année maximale à inclure dans la liste des années. Par défaut, elle est basée sur la configuration par défaut.
 * @param {number} yearBlockSize - La taille du bloc d'années à afficher à la fois dans le sélecteur. Par défaut, elle est basée sur la configuration par défaut.
 *
 * @returns {Object} - Renvoie un objet contenant les éléments suivants :
 *   - today : La date actuelle.
 *   - thisYear : L'année actuelle.
 *   - initialMonth : Le mois actuel.
 *   - years : Un tableau contenant toutes les années de minYear à maxYear.
 *   - yearsBlock : Un sous-ensemble d'années basé sur la taille du bloc d'années.
 *   - setYearsBlock : Une fonction pour définir manuellement le bloc d'années.
 *   - yearBlockSize : La taille du bloc d'années spécifiée.
 */
function useYearLogic() {
  var minYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CONFIG.MIN_YEAR;
  var maxYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.MAX_YEAR;
  var yearBlockSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG.YEAR_BLOCK_SIZE;
  var today = new Date();
  var thisYear = today.getFullYear();
  var initialMonth = new Date(thisYear, today.getMonth());

  // Bloc actuel basé sur l'année courante
  var calculateYearBlockStart = function calculateYearBlockStart(currentYear) {
    var yearsSinceStart = currentYear - minYear;
    return currentYear - yearsSinceStart % yearBlockSize;
  };
  var _useState = React.useState(function () {
      var yearBlockStart = calculateYearBlockStart(thisYear);
      return Array.from({
        length: yearBlockSize
      }, function (_, i) {
        return yearBlockStart + i;
      }).filter(function (year) {
        return year >= minYear && year <= maxYear;
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    yearsBlock = _useState2[0],
    setYearsBlock = _useState2[1];

  // Génération du tableau des années
  var years = Array.from({
    length: maxYear - minYear + 1
  }, function (_, i) {
    return minYear + i;
  });
  return {
    today: today,
    thisYear: thisYear,
    initialMonth: initialMonth,
    years: years,
    yearsBlock: yearsBlock,
    setYearsBlock: setYearsBlock,
    yearBlockSize: yearBlockSize
  };
}

var _excluded$3 = ["selectDate", "closeCalendar", "useIcons", "language", "reorderedDays", "startOfWeek", "designType", "showButton"];

/**
 * Composant Calendar pour afficher un calendrier interactif.
 *
 * @component
 * @param {function} selectDate - Fonction pour sélectionner une date.
 * @param {function} closeCalendar - Fonction pour fermer le calendrier.
 * @param {boolean} useIcons - Indique si des icônes doivent être utilisées.
 * @param {string} language - Langue pour les traductions.
 * @param {Array<string>} reorderedDays - Jours réorganisés.
 * @param {number} startOfWeek - Jour de début de la semaine.
 * @param {string} designType - Type de design pour le calendrier.
 * @param {boolean} showButton - Indique si le bouton doit être affiché.
 * @param {Object} dateProps - Autres propriétés relatives à la date.
 * @returns {React.Element} - Renvoie le composant Calendar.
 */
var Calendar = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var selectDate = _ref.selectDate,
    closeCalendar = _ref.closeCalendar,
    useIcons = _ref.useIcons,
    language = _ref.language,
    reorderedDays = _ref.reorderedDays,
    startOfWeek = _ref.startOfWeek,
    designType = _ref.designType;
    _ref.showButton;
    var dateProps = _objectWithoutProperties(_ref, _excluded$3);
  // Translation utility
  var translations = getTranslations(language);

  // Design Styles
  var _useDesignStyles = useDesignStyles(designType),
    selectedStyles = _useDesignStyles.selectedStyles,
    designClass = _useDesignStyles.designClass,
    rootClass = _useDesignStyles.rootClass;

  // Year Logic
  var _useYearLogic = useYearLogic(dateProps.minYear, dateProps.maxYear, dateProps.yearBlockSize),
    initialMonth = _useYearLogic.initialMonth,
    years = _useYearLogic.years,
    yearsBlock = _useYearLogic.yearsBlock,
    setYearsBlock = _useYearLogic.setYearsBlock;

  // Calendar Logic
  var _useCalendarLogic = useCalendarLogic(initialMonth, dateProps.selectedDate, startOfWeek, dateProps.yearBlockSize),
    viewedDate = _useCalendarLogic.viewedDate,
    setViewedDate = _useCalendarLogic.setViewedDate,
    totalSlots = _useCalendarLogic.totalSlots;

  // Date choosing logic
  var handleChooseDate = function handleChooseDate(day) {
    return chooseDate(selectDate, closeCalendar, viewedDate, day);
  };

  // State Initializations
  var _useState = React.useState(new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    currentDate = _useState2[0],
    setCurrentDate = _useState2[1];
  var _useState3 = React.useState('days'),
    _useState4 = _slicedToArray(_useState3, 2),
    view = _useState4[0],
    setView = _useState4[1];
  var _useState5 = React.useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    animationKey = _useState6[0],
    setAnimationKey = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: " ".concat(selectedStyles.calendar, "  ").concat(rootClass, " ").concat(designClass ? alternativeStyles[designClass] : ''),
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$1.calendarNav
  }, /*#__PURE__*/React.createElement(NavSelector, {
    currentMonth: viewedDate,
    setViewedDate: setViewedDate,
    months: translations.shortMonths,
    years: years,
    useIcons: useIcons,
    view: view,
    setView: setView,
    yearsBlock: yearsBlock,
    yearBlockSize: dateProps.yearBlockSize,
    setYearsBlock: setYearsBlock,
    animationKey: animationKey,
    setAnimationKey: setAnimationKey,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
    minYear: dateProps.minYear,
    maxYear: dateProps.maxYear
  })), /*#__PURE__*/React.createElement(DateGrid, {
    key: "".concat(viewedDate.getMonth(), "-").concat(viewedDate.getFullYear()),
    totalSlots: totalSlots,
    chooseDate: handleChooseDate,
    translations: translations,
    view: view,
    setView: setView,
    currentMonth: viewedDate,
    setCurrentMonth: setViewedDate,
    yearsBlock: yearsBlock,
    animationKey: animationKey,
    reorderedDays: reorderedDays,
    selectedDate: dateProps.selectedDate,
    viewedDate: viewedDate,
    currentDate: currentDate,
    yearBlockSize: dateProps.yearBlockSize,
    designType: designType
  }));
});

var _excluded$2 = ["onClick", "showCalendar"];

/**
 * Composant CalendarButton pour afficher un bouton de calendrier.
 *
 * @component
 * @param {function} onClick - Fonction appelée lors du clic sur le bouton.
 * @param {boolean} showCalendar - Indique si le calendrier est actuellement affiché.
 * @returns {React.Element} - Renvoie le composant CalendarButton.
 */
var CalendarButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
    showCalendar = _ref.showCalendar,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement(Button, _extends({
    type: "button",
    onClick: onClick,
    className: styles$2.calendarButton,
    icon: CalendarIcon,
    ref: ref,
    "aria-expanded": showCalendar,
    "aria-label": "Toggle date picker"
  }, props));
});
CalendarButton.propTypes = {
  onClick: PropTypes.func,
  showCalendar: PropTypes.bool
};

var _excluded$1 = ["value", "onChange", "format"];

/**
 * Un composant d'entrée masquée pour les dates.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.value - La valeur actuelle du champ d'entrée.
 * @param {Function} props.onChange - Fonction appelée lors de la modification de la valeur.
 * @param {string} [props.format='DEFAULT'] - Le format de la date à utiliser.
 * @param {Object} ref - Référence pour accéder au nœud DOM du champ d'entrée.
 */
var MaskedInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$format = _ref.format,
    format = _ref$format === void 0 ? 'DEFAULT' : _ref$format,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = React.useState(formatToMask(value, format)),
    _useState2 = _slicedToArray(_useState, 2),
    displayValue = _useState2[0],
    setDisplayValue = _useState2[1];
  React.useEffect(function () {
    setDisplayValue(formatToMask(value, format));
  }, [value, format]);
  var handleChange = function handleChange(e) {
    var newValue = e.target.value;
    if (newValue === '') {
      setDisplayValue('');
      onChange && onChange({
        target: {
          value: ''
        }
      });
      return;
    }
    try {
      newValue = formatToMask(newValue, format);
      setDisplayValue(newValue);
      onChange && onChange({
        target: {
          value: newValue
        }
      });
    } catch (error) {}
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    value: displayValue,
    onChange: handleChange
  }, props));
});
MaskedInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string
};

/**
 * Hook personnalisé pour valider une date en fonction de divers critères.
 *
 * Ce hook fournit des fonctions et un état pour valider une date en fonction d'un format spécifié,
 * d'une plage de dates valide, et d'une langue spécifiée pour les messages d'erreur.
 *
 * @function
 * @param {string} dateFormat - Le format de date à utiliser pour la validation (par défaut : format par défaut du config).
 * @param {number} minYear - L'année minimale autorisée pour la validation (par défaut : 1930).
 * @param {number} maxYear - L'année maximale autorisée pour la validation (par défaut : 2025).
 * @param {string} language - La langue à utiliser pour les messages d'erreur (par défaut : 'fr').
 * @returns {Array} Un tableau contenant l'état d'erreur, la fonction de validation et la fonction de définition d'erreur.
 */
function useDateValidation() {
  var dateFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CONFIG.DATE_FORMAT;
  var minYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG.MIN_YEAR;
  var maxYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG.MAX_YEAR;
  var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_CONFIG.LANGUAGE;
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasError = _useState4[0],
    setHasError = _useState4[1];
  var translations = getTranslations(language);
  function validate(value) {
    var formatKey = Object.values(DEFAULT_CONFIG.DATE_FORMATS).includes(dateFormat) ? Object.keys(DEFAULT_CONFIG.DATE_FORMATS).find(function (key) {
      return DEFAULT_CONFIG.DATE_FORMATS[key] === dateFormat;
    }) : DEFAULT_CONFIG.DATE_FORMAT;
    var formattedError = translations.errors.unknownError;
    var validationResponse = isValidDate(value, formatKey, minYear, maxYear);
    if (validationResponse.isValid) {
      setError(null);
      setHasError(false); // Si valide, pas d'erreur
      return true;
    } else {
      var errorType = validationResponse.errorType;
      if (errorType === 'outOfRange') {
        formattedError = translations.errors.invalidDateRange.replace('{minYear}', minYear ? minYear.toString() : 'N/A').replace('{maxYear}', maxYear ? maxYear.toString() : 'N/A');
      } else if (errorType === 'invalidDate') {
        formattedError = translations.errors.invalidDate;
      }
      setError(formattedError);
      setHasError(true);
      return false;
    }
  }
  return [error, validate, setError, hasError];
}

/**
 * Hook personnalisé pour exécuter une fonction de rappel lorsque la touche "Escape" est pressée.
 *
 * Ce hook ajoute un écouteur d'événement au document qui déclenche une fonction de rappel
 * spécifiée chaque fois que la touche "Escape" est pressée. L'écouteur est nettoyé
 * lors du démontage du composant pour éviter des effets secondaires indésirables.
 *
 * @function
 * @param {Function} callback - La fonction de rappel à exécuter lorsque la touche "Escape" est pressée.
 */
function useEscapeKey(callback) {
  React.useEffect(function () {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

/**
 * Hook personnalisé pour gérer l'état et la logique d'un sélecteur de date (DatePicker).
 *
 * Ce hook fournit des fonctions et des états pour gérer l'affichage du calendrier,
 * la valeur saisie, l'obtention et la perte de focus, ainsi que d'autres comportements associés.
 *
 * @function
 * @param {Date} initialValue - La valeur initiale du DatePicker.
 * @param {string} dateFormat - Le format de date souhaité pour l'affichage.
 * @param {Function} onClose - Fonction à appeler lorsque le calendrier est fermé.
 * @param {Function} checkError - Fonction pour vérifier les erreurs.
 * @param {Function} setError - Fonction pour définir une erreur.
 * @returns {Object} Un objet contenant l'état et les fonctions pour gérer le DatePicker.
 */
function useDatePickerState(initialValue, dateFormat, onClose, checkError, setError) {
  // Gestion de l'affichage du calendrier
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showCalendar = _useState2[0],
    setShowCalendar = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    setIsFocused = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    lastDateBeforeHomeClick = _useState6[0],
    setLastDateBeforeHomeClick = _useState6[1];

  // Gestion de la valeur saisie
  var _useState7 = React.useState(formatDatePickerDate(initialValue, dateFormat)),
    _useState8 = _slicedToArray(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];

  // Fonction pour basculer l'affichage du calendrier
  function toggleCalendar() {
    setShowCalendar(function (prev) {
      return !prev;
    });
  }

  // Fonction pour fermer le calendrier
  function closeCalendar() {
    var hasError = checkError ? checkError() : false;
    if (hasError) {
      setInput(''); // Réinitialise la valeur d'entrée en cas d'erreur
      setError(null); // Réinitialise l'état de l'erreur
    }

    if (onClose) {
      onClose(hasError);
    }
    setShowCalendar(false);
  }

  // Fonction pour mettre à jour la valeur saisie
  function setInput(date) {
    if (date === '') {
      setInputValue(''); // Autoriser une valeur vide
    } else {
      setInputValue(formatDatePickerDate(date, dateFormat));
    }
  }
  // Fonction pour gérer l'obtention du focus
  function handleFocus() {
    setIsFocused(true);
    setShowCalendar(true); // Afficher le calendrier lorsque l'input obtient le focus
  }

  // Fonction pour gérer la perte du focus
  function handleBlur() {
    setIsFocused(false);
    setShowCalendar(false); // Masquer le calendrier lorsque l'input perd le focus
    if (onClose) {
      onClose();
    }
  }
  function saveLastDateBeforeHomeClick(date) {
    setLastDateBeforeHomeClick(date);
  }
  return {
    showCalendar: showCalendar,
    inputValue: inputValue,
    isFocused: isFocused,
    toggleCalendar: toggleCalendar,
    closeCalendar: closeCalendar,
    setInput: setInput,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    lastDateBeforeHomeClick: lastDateBeforeHomeClick,
    saveLastDateBeforeHomeClick: saveLastDateBeforeHomeClick
  };
}

/**
 * Hook personnalisé pour gérer les interactions en dehors d'un élément référencé.
 *
 * Ce hook ajoute des écouteurs d'événements pour détecter lorsque des interactions
 * se produisent en dehors de l'élément référencé (comme un clic ou une perte de focus).
 * Lorsqu'une telle interaction est détectée, une fonction de rappel spécifiée est exécutée.
 * Ce hook est souvent utilisé pour fermer les modales, les popups ou les menus déroulants
 * lorsque l'utilisateur clique ou met le focus en dehors de ces éléments.
 *
 * @function
 * @param {React.RefObject} ref - La référence à l'élément principal que nous voulons surveiller.
 * @param {React.RefObject} buttonRef - La référence à un élément bouton qui pourrait être associé à l'élément principal (par exemple, un bouton qui déclenche une modale).
 * @param {Function} callback - La fonction de rappel à exécuter lorsque des interactions en dehors de l'élément référencé sont détectées.
 */
function useOutsideInteractions(ref, buttonRef, callback) {
  React.useEffect(function () {
    var timeoutId;
    var isClicking = false;
    var handleMouseUpOutside = function handleMouseUpOutside(event) {
      if (ref.current && event.target !== ref.current && !ref.current.contains(event.target) && (!buttonRef || buttonRef.current && !buttonRef.current.contains(event.target))) {
        callback();
      }
    };
    var handleFocusOut = function handleFocusOut() {
      timeoutId = setTimeout(function () {
        if (!isClicking && ref.current && !ref.current.contains(document.activeElement)) {
          callback();
        }
      }, 0);
    };
    var handleFocusIn = function handleFocusIn() {
      clearTimeout(timeoutId);
    };
    var handleClick = function handleClick(event) {
      if (event.type === 'mousedown') {
        isClicking = true;
      } else if (event.type === 'mouseup') {
        isClicking = false;
      }
    };
    document.addEventListener('mouseup', handleMouseUpOutside);
    var currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('focusout', handleFocusOut);
      currentRef.addEventListener('focusin', handleFocusIn);
      currentRef.addEventListener('mousedown', handleClick);
      currentRef.addEventListener('mouseup', handleClick);
    }
    return function () {
      document.removeEventListener('mouseup', handleMouseUpOutside);
      if (currentRef) {
        currentRef.removeEventListener('focusout', handleFocusOut);
        currentRef.removeEventListener('focusin', handleFocusIn);
        currentRef.removeEventListener('mousedown', handleClick);
        currentRef.removeEventListener('mouseup', handleClick);
      }
    };
  }, [ref, buttonRef, callback]);
}

/**
 * Valide et renvoie le format de date fourni.
 *
 * Cette fonction vérifie si le format de date fourni est valide.
 * Si le format de date n'est pas valide, elle utilise le format par défaut.
 *
 * @function
 * @param {string} dateFormat - Le format de date à valider.
 * @returns {string} - Un format de date valide.
 */
function validateDateFormat(dateFormat) {
  var validFormat = DEFAULT_CONFIG.DATE_FORMATS[dateFormat];
  if (!validFormat) {
    console.info("Invalid format key: ".concat(dateFormat, ". Defaulting to DEFAULT format."));
    return DEFAULT_CONFIG.DATE_FORMATS[DEFAULT_CONFIG.DATE_FORMAT];
  }
  return validFormat;
}

/**
 * Traite et valide les propriétés de configuration pour le calendrier.
 *
 * @function
 * @param {object} configProps - Les propriétés de configuration fournies pour le calendrier.
 * @param {boolean} configProps.useIcons - Indique si des icônes doivent être utilisées.
 * @param {string} configProps.dateFormat - Format de date à utiliser.
 * @param {object} configProps.customStyles - Styles personnalisés à appliquer.
 * @param {number} configProps.startOfWeek - Le jour de début de la semaine.
 * @param {boolean} configProps.manualInputEnabled - Indique si l'entrée manuelle est activée.
 * @param {number} configProps.minYear - L'année minimale à afficher.
 * @param {number} configProps.maxYear - L'année maximale à afficher.
 * @param {string} configProps.language - Langue à utiliser pour le calendrier.
 * @param {number} configProps.yearBlockSize - Taille du bloc d'années.
 * @param {string} configProps.designType - Type de design à utiliser.
 */
var handlePropsAndConfig = function handlePropsAndConfig(configProps) {
  var _DEFAULT_CONFIG$confi = _objectSpread2(_objectSpread2({}, DEFAULT_CONFIG), configProps),
    useIcons = _DEFAULT_CONFIG$confi.useIcons,
    dateFormat = _DEFAULT_CONFIG$confi.dateFormat,
    customStyles = _DEFAULT_CONFIG$confi.customStyles,
    startOfWeek = _DEFAULT_CONFIG$confi.startOfWeek,
    manualInputEnabled = _DEFAULT_CONFIG$confi.manualInputEnabled,
    minYear = _DEFAULT_CONFIG$confi.minYear,
    maxYear = _DEFAULT_CONFIG$confi.maxYear,
    language = _DEFAULT_CONFIG$confi.language,
    yearBlockSize = _DEFAULT_CONFIG$confi.yearBlockSize,
    designType = _DEFAULT_CONFIG$confi.designType;
  var currentYear = new Date().getFullYear();
  var getProcessedValue = function getProcessedValue(originalValue, defaultValue, processingFunc, configKey, currentYear) {
    if (originalValue !== undefined) {
      var processedValue = processingFunc ? processingFunc(originalValue, currentYear) : originalValue;
      var rule = CONFIG_VALIDATION_RULES[configKey];
      if (Array.isArray(rule) && !rule.includes(processedValue)) {
        console.info("Invalid value \"".concat(processedValue, "\" for ").concat(configKey, ". Defaulting to \"").concat(defaultValue, "\"."));
        return defaultValue;
      }

      // Si la valeur est null (indicateur d'erreur de processYearConfig)
      if (processedValue === null) {
        console.info("Invalid format for \"".concat(originalValue, "\" in ").concat(configKey, ". Defaulting to \"").concat(defaultValue, "\"."));
        return defaultValue;
      }

      // Si aucune des validations ci-dessus n'a échoué
      return processedValue;
    }
    return defaultValue;
  };
  return {
    language: getProcessedValue(language, DEFAULT_CONFIG.LANGUAGE, null, 'LANGUAGE'),
    startOfWeek: getProcessedValue(startOfWeek, DEFAULT_CONFIG.START_OF_WEEK, null, 'START_OF_WEEK'),
    designType: getProcessedValue(designType, DEFAULT_CONFIG.DESIGN_TYPE, null, 'DESIGN_TYPE'),
    customStyles: customStyles,
    manualInputEnabled: getProcessedValue(manualInputEnabled, DEFAULT_CONFIG.MANUAL_INPUT_ENABLED, null, 'MANUAL_INPUT_ENABLED'),
    minYear: getProcessedValue(minYear, DEFAULT_CONFIG.MIN_YEAR, applyYearConfig, 'MIN_YEAR', currentYear),
    maxYear: getProcessedValue(maxYear, DEFAULT_CONFIG.MAX_YEAR, applyYearConfig, 'MAX_YEAR', currentYear),
    yearBlockSize: getProcessedValue(yearBlockSize, DEFAULT_CONFIG.YEAR_BLOCK_SIZE),
    useIcons: getProcessedValue(useIcons, DEFAULT_CONFIG.USE_ICONS, null, 'USE_ICONS'),
    dateFormat: getProcessedValue(dateFormat, DEFAULT_CONFIG.DATE_FORMATS[DEFAULT_CONFIG.DATE_FORMAT], validateDateFormat)
  };
};

/**
 * Met à jour la valeur d'entrée avec la nouvelle valeur.
 *
 * @function
 * @param {function} setInput - Fonction de mise à jour de la valeur d'entrée.
 * @param {string} newValue - Nouvelle valeur à définir.
 */
var updateInput = function updateInput(setInput, newValue) {
  setInput(newValue);
};

/**
 * Gère un champ d'entrée vide.
 *
 * Cette fonction réinitialise la date sélectionnée et supprime toute erreur.
 *
 * @function
 * @param {string} name - Nom du champ d'entrée.
 * @param {function} onChange - Fonction de changement.
 * @param {function} setError - Fonction de définition de l'erreur.
 * @param {function} setSelectedDate - Fonction de mise à jour de la date sélectionnée.
 */
var handleEmptyInput = function handleEmptyInput(name, onChange, setError, setSelectedDate) {
  setError(null);
  onChange({
    target: {
      name: name,
      value: ''
    }
  });
  setSelectedDate(new Date());
};

/**
 * Gère une date valide.
 *
 * Cette fonction met à jour la date sélectionnée et déclenche un événement onChange avec la date formatée pour l'hôte.
 *
 * @function
 * @param {string} newValue - Nouvelle valeur de la date.
 * @param {string} name - Nom du champ d'entrée.
 * @param {function} onChange - Fonction de changement.
 * @param {function} setError - Fonction de définition de l'erreur.
 * @param {function} setSelectedDate - Fonction de mise à jour de la date sélectionnée.
 * @param {function} convertFormattedStringToDate - Fonction de conversion de la date formatée en objet Date.
 * @param {string} dateFormat - Format de la date.
 */
var handleValidDate = function handleValidDate(newValue, name, onChange, setError, setSelectedDate, convertFormattedStringToDate, dateFormat) {
  setError(null);
  var dateObject = convertFormattedStringToDate(newValue, dateFormat);
  setSelectedDate(dateObject);

  // Formater la date pour l'hôte en format 'YYYY-MM-DD'
  var formattedForHost = "".concat(dateObject.getFullYear(), "-").concat(String(dateObject.getMonth() + 1).padStart(2, '0'), "-").concat(String(dateObject.getDate()).padStart(2, '0'));
  onChange({
    target: {
      name: name,
      value: formattedForHost
    }
  }); // nous passons cette valeur à l'hôte
};

/**
 * Gère une entrée incomplète.
 *
 * Cette fonction met à jour la valeur d'entrée sans modifier l'état de l'erreur.
 *
 * @function
 * @param {string} newValue - Nouvelle valeur de l'entrée.
 * @param {string} name - Nom du champ d'entrée.
 * @param {function} onChange - Fonction de changement.
 * @param {function} setError - Fonction de définition de l'erreur.
 */
var handleIncompleteInput = function handleIncompleteInput(newValue, name, onChange, setError) {
  setError(null);
  onChange({
    target: {
      name: name,
      value: newValue
    }
  });
};

/**
 * Bascule la visibilité du calendrier.
 *
 * @function
 * @param {function} toggleCalendar - Fonction pour basculer l'affichage du calendrier.
 * @returns {function} - Fonction d'événement pour basculer la visibilité du calendrier.
 */
var toggleCalendarVisibility = function toggleCalendarVisibility(toggleCalendar) {
  return function (event) {
    event.stopPropagation();
    toggleCalendar();
  };
};

/**
 * Gère la sélection d'une date.
 *
 * Lorsqu'une date est sélectionnée, cette fonction met à jour la valeur d'entrée, la date sélectionnée et ferme le calendrier.
 *
 * @function
 * @param {function} setInput - Fonction de mise à jour de la valeur d'entrée.
 * @param {function} setSelectedDate - Fonction de mise à jour de la date sélectionnée.
 * @param {function} closeCalendar - Fonction pour fermer le calendrier.
 * @param {function} validate - Fonction de validation.
 * @param {function} formatDatePickerDate - Fonction pour formater la date.
 * @param {string} dateFormat - Format de la date.
 * @param {function} onChange - Fonction de changement.
 * @param {string} name - Nom du champ d'entrée.
 * @returns {function} - Fonction d'événement pour gérer la sélection d'une date.
 */
var handleDateSelect = function handleDateSelect(setInput, setSelectedDate, closeCalendar, validate, formatDatePickerDate, dateFormat, onChange, name) {
  return function (date) {
    var actualDate = typeof date === 'string' ? new Date(date) : date;
    setInput(actualDate);
    setSelectedDate(actualDate);
    closeCalendar();
    var formattedForDisplay = formatDatePickerDate(actualDate, dateFormat);
    validate(formattedForDisplay);

    // Maintenant, nous formaterons toujours la date pour l'hôte en format 'YYYY-MM-DD'
    var formattedForHost = "".concat(actualDate.getFullYear(), "-").concat(String(actualDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(actualDate.getDate()).padStart(2, '0'));
    onChange({
      target: {
        name: name,
        value: formattedForHost // nous passons cette valeur à l'hôte
      }
    });
  };
};

/**
 * Crée un gestionnaire pour la touche Échap.
 *
 * Lorsque la touche Échap est enfoncée, cette fonction ferme le calendrier et retire le focus de l'entrée.
 *
 * @function
 * @param {function} closeCalendar - Fonction pour fermer le calendrier.
 * @param {Object} inputRef - Référence à l'élément d'entrée.
 * @returns {function} - Fonction d'événement pour gérer la touche Échap.
 */
var createEscapeHandler = function createEscapeHandler(closeCalendar, inputRef) {
  return function () {
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
    closeCalendar();
  };
};

var _excluded = ["id", "name", "value", "onChange", "showButton", "placeholderText", "language", "minYear", "maxYear", "manualInputEnabled", "dateFormat", "yearBlockSize", "designType", "onClose"];

/**
 * Un composant pour choisir une date.
 *
 * @param {Object} props - Propriétés du DatePicker.
 * @param {string} props.id - ID du champ d'entrée.
 * @param {string} props.name - Nom du champ d'entrée.
 * @param {string} props.value - La valeur actuelle du champ d'entrée.
 * @param {Function} props.onChange - Fonction appelée lors de la modification de la valeur.
 * @param {boolean} [props.showButton=true] - Indique si le bouton du calendrier doit être affiché.
 * @param {string|null} [props.placeholderText=null] - Texte d'espace réservé pour le champ d'entrée.
 */
// 6. Component Definition
function DatePicker(_ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$showButton = _ref.showButton,
    showButton = _ref$showButton === void 0 ? true : _ref$showButton,
    _ref$placeholderText = _ref.placeholderText,
    placeholderText = _ref$placeholderText === void 0 ? null : _ref$placeholderText,
    propLanguage = _ref.language,
    propMinYear = _ref.minYear,
    propMaxYear = _ref.maxYear,
    propManualInputEnabled = _ref.manualInputEnabled,
    propDateFormat = _ref.dateFormat,
    propYearBlockSize = _ref.yearBlockSize,
    propDesignType = _ref.designType,
    onClose = _ref.onClose,
    configProps = _objectWithoutProperties(_ref, _excluded);
  // 6.1 Configuration and State Initialization
  var _handlePropsAndConfig = handlePropsAndConfig(_objectSpread2(_objectSpread2({}, configProps), {}, {
      language: propLanguage,
      minYear: propMinYear,
      maxYear: propMaxYear,
      manualInputEnabled: propManualInputEnabled,
      yearBlockSize: propYearBlockSize,
      designType: propDesignType,
      dateFormat: propDateFormat
    })),
    language = _handlePropsAndConfig.language,
    useIcons = _handlePropsAndConfig.useIcons,
    dateFormat = _handlePropsAndConfig.dateFormat,
    customStyles = _handlePropsAndConfig.customStyles,
    startOfWeek = _handlePropsAndConfig.startOfWeek,
    manualInputEnabled = _handlePropsAndConfig.manualInputEnabled,
    minYear = _handlePropsAndConfig.minYear,
    maxYear = _handlePropsAndConfig.maxYear,
    yearBlockSize = _handlePropsAndConfig.yearBlockSize,
    designType = _handlePropsAndConfig.designType;

  // 6.3 Validation Hooks
  var _useDateValidation = useDateValidation(dateFormat, minYear, maxYear, language),
    _useDateValidation2 = _slicedToArray(_useDateValidation, 4),
    error = _useDateValidation2[0],
    validate = _useDateValidation2[1],
    setError = _useDateValidation2[2],
    hasError = _useDateValidation2[3];

  // Définition de checkError
  var checkError = function checkError() {
    return error !== null;
  };
  var _useDatePickerState = useDatePickerState(value, dateFormat, onClose, checkError, setError),
    showCalendar = _useDatePickerState.showCalendar,
    inputValue = _useDatePickerState.inputValue,
    toggleCalendar = _useDatePickerState.toggleCalendar,
    closeCalendar = _useDatePickerState.closeCalendar,
    setInput = _useDatePickerState.setInput;
  React.useEffect(function () {
    if (!hasError) {
      setInput(value);
    }
  }, [value, setInput, hasError]);
  var _useState = React.useState(new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var calendarRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  var containerRef = React.useRef(null);
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (error) {
      setSelectedDate(new Date());
    }
  }, [error]);
  useEscapeKey(createEscapeHandler(closeCalendar, inputRef));
  useOutsideInteractions(calendarRef, showButton ? buttonRef : null, closeCalendar);

  // 6.5 Handlers
  var onDateSelect = handleDateSelect(setInput, setSelectedDate, closeCalendar, validate, formatDatePickerDate, dateFormat, onChange, name);
  var handleInputChange = function handleInputChange(e) {
    var newValue = e.target.value;
    updateInput(setInput, newValue);
    if (!newValue) {
      handleEmptyInput(name, onChange, setError, setSelectedDate);
      return;
    }
    if (newValue.length >= 10) {
      if (validate(newValue)) {
        handleValidDate(newValue, name, onChange, setError, setSelectedDate, convertFormattedStringToDate, dateFormat);
        closeCalendar();
        inputRef.current.blur();
        toggleCalendar();
      }
    } else {
      handleIncompleteInput(newValue, name, onChange, setError);
    }
  };
  var onToggleCalendarVisibility = toggleCalendarVisibility(toggleCalendar);

  // 6.6 Derived Data & Effects
  var translations = getTranslations(language);
  var reorderedDays = reorderDays(translations.days, startOfWeek);

  // 5. Component Render
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: styles$2.container,
    style: customStyles
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.inputContainer,
    style: customStyles
  }, /*#__PURE__*/React.createElement(MaskedInput, {
    id: id,
    ref: inputRef,
    value: inputValue,
    placeholder: placeholderText !== null ? placeholderText : translations.placeholder,
    format: dateFormat,
    onBlur: manualInputEnabled ? handleInputChange : null,
    "aria-label": "Selected date",
    readOnly: !manualInputEnabled,
    className: error ? styles$2.errorInput : '',
    onClick: onToggleCalendarVisibility,
    onChange: handleInputChange,
    maxLength: 10
  }), showButton && /*#__PURE__*/React.createElement(CalendarButton, {
    ref: buttonRef,
    onClick: onToggleCalendarVisibility
  })), error && /*#__PURE__*/React.createElement("p", {
    className: styles$2.errorMessage
  }, error), showCalendar && /*#__PURE__*/React.createElement(Calendar, {
    designType: designType,
    startOfWeek: startOfWeek,
    selectDate: onDateSelect,
    closeCalendar: closeCalendar,
    useIcons: useIcons,
    translations: translations,
    language: language,
    reorderedDays: reorderedDays,
    ref: calendarRef,
    role: "grid",
    isCalendarVisible: showCalendar,
    selectedDate: selectedDate,
    minYear: minYear,
    maxYear: maxYear,
    yearBlockSize: yearBlockSize
  }));
}
DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showButton: PropTypes.bool,
  placeholderText: PropTypes.string,
  language: PropTypes.string,
  minYear: PropTypes.number,
  maxYear: PropTypes.number,
  manualInputEnabled: PropTypes.bool,
  dateFormat: PropTypes.string,
  yearBlockSize: PropTypes.number,
  designType: PropTypes.string,
  onClose: PropTypes.func
};

module.exports = DatePicker;
