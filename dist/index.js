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
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

var css_248z$3 = ".DatePicker-module_container__SL2Dw {\r\n  position: relative;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.DatePicker-module_containerInput__pZeTd {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.DatePicker-module_inputContainer__i2kk5 {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n.DatePicker-module_calendarButton__Qy0dA {\r\n  cursor: pointer;\r\n}\r\n\r\nselect {\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA {\r\n  background: transparent;\r\n  border: none;\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s ease-in-out;\r\n  padding: 0;\r\n}\r\n\r\n.DatePicker-module_calendarButton__Qy0dA:hover {\r\n  opacity: .8;\r\n}\r\n\r\n.DatePicker-module_errorMessage__S9vAC {\r\n  color: red;\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n}";
var styles$2 = {"container":"DatePicker-module_container__SL2Dw","containerInput":"DatePicker-module_containerInput__pZeTd","inputContainer":"DatePicker-module_inputContainer__i2kk5","calendarButton":"DatePicker-module_calendarButton__Qy0dA","errorMessage":"DatePicker-module_errorMessage__S9vAC"};
styleInject(css_248z$3);

var css_248z$2 = ".Calendar-module_calendar__ma2nx {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 10px 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n}\r\n\r\n.Calendar-module_calendarNav__cJtpj {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.Calendar-module_header__Wv-LD {\r\n    text-transform: lowercase;\r\n    text-align: center;\r\n    padding: 8px 8px;\r\n    font-size: 14px;\r\n}\r\n\r\n.Calendar-module_NavSelector__yDN-3 {\r\n    display: flex;\r\n    width: 100px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-left: 8px;\r\n\r\n\r\n}\r\n\r\n.Calendar-module_navButton__Xive6 {\r\n    background: transparent;\r\n    border: none;\r\n    cursor: default;\r\n    opacity: 0.5;\r\n    transition: opacity 0.2s ease-in-out;\r\n    text-transform: lowercase;\r\n    font-size: 18px;\r\n    color: black;\r\n    padding: 0;\r\n}\r\n\r\n.Calendar-module_chevronButton__ezSD3 {\r\n    background: transparent;\r\n    border: none;\r\n    opacity: 0.2;\r\n    transition: opacity 0.2s ease-in-out;\r\n    padding: 0;\r\n}\r\n\r\n.Calendar-module_chevronButton__ezSD3:hover {\r\n    opacity: .8;\r\n}\r\n\r\n.Calendar-module_chevronContainer__005Ps {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.Calendar-module_daysContainer__wdHk0 {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n}\r\n\r\n.Calendar-module_day__tOkN8,\r\n.Calendar-module_grayedDay__cHUGy {\r\n    cursor: default;\r\n    text-align: center;\r\n    padding: 8px 4px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.Calendar-module_day__tOkN8:hover,\r\n.Calendar-module_month__AkgBU:hover,\r\n.Calendar-module_year__ZVvxR:hover {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.Calendar-module_active__TPscG {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.Calendar-module_navButton__Xive6:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.Calendar-module_grayedDay__cHUGy {\r\n    color: #0000003b;\r\n}\r\n\r\n.Calendar-module_month__AkgBU,\r\n.Calendar-module_year__ZVvxR {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: background-color 0.3s ease;\r\n    cursor: default;\r\n}\r\n\r\n.Calendar-module_month__AkgBU {\r\n    text-transform: lowercase;\r\n    height: 50px;\r\n}\r\n\r\n.Calendar-module_year__ZVvxR {\r\n    font-size: 16px;\r\n    height: 40px;\r\n}\r\n\r\n.Calendar-module_monthsContainer__euXeK,\r\n.Calendar-module_yearsContainer__SXYwp {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 0;\r\n}\r\n\r\n@keyframes Calendar-module_slide__obRYY {\r\n    from {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.Calendar-module_monthsContainer__euXeK,\r\n.Calendar-module_yearsContainer__SXYwp {\r\n    animation: Calendar-module_slide__obRYY 0.6s forwards;\r\n}\r\n\r\n.Calendar-module_today__biHUW {\r\n    background-color: #4646467d;\r\n    color: #ffffff;\r\n}";
var styles$1 = {"calendar":"Calendar-module_calendar__ma2nx","calendarNav":"Calendar-module_calendarNav__cJtpj","header":"Calendar-module_header__Wv-LD","NavSelector":"Calendar-module_NavSelector__yDN-3","navButton":"Calendar-module_navButton__Xive6","chevronButton":"Calendar-module_chevronButton__ezSD3","chevronContainer":"Calendar-module_chevronContainer__005Ps","daysContainer":"Calendar-module_daysContainer__wdHk0","day":"Calendar-module_day__tOkN8","grayedDay":"Calendar-module_grayedDay__cHUGy","month":"Calendar-module_month__AkgBU","year":"Calendar-module_year__ZVvxR","active":"Calendar-module_active__TPscG","monthsContainer":"Calendar-module_monthsContainer__euXeK","yearsContainer":"Calendar-module_yearsContainer__SXYwp","slide":"Calendar-module_slide__obRYY","today":"Calendar-module_today__biHUW"};
styleInject(css_248z$2);

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='800' height='800' viewBox='0 0 32 32'%3e%3cpath d='M30.854 16.548A2.216 2.216 0 0 1 28.764 18H28v11a1 1 0 0 1-1 1h-6v-7c0-2.757-2.243-5-5-5s-5 2.243-5 5v7H5a1 1 0 0 1-1-1V18h-.765a2.215 2.215 0 0 1-2.09-1.451 2.218 2.218 0 0 1 .62-2.47l11.679-11.06a3.718 3.718 0 0 1 5.112 0l11.707 11.086c.678.591.922 1.561.591 2.443z'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55229 1 7 1ZM16 6V5H8V6C8 6.55228 7.55229 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM4 15V11H8V15H4ZM4 17V20C4 20.5523 4.44772 21 5 21H8V17H4ZM10 17V21H14V17H10ZM16 17V21H19C19.5523 21 20 20.5523 20 20V17H16ZM20 15H16V11H20V15ZM14 15H10V11H14V15Z' fill='%230F0F0F'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' fill='none' viewBox='0 0 24 24'%3e%3cpath stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9 6 6 6-6'/%3e%3c/svg%3e";

function HomeIcon() {
  return /*#__PURE__*/React.createElement("img", {
    src: img$2,
    alt: "Home Icon",
    width: "18",
    height: "18"
  });
}
function CalendarIcon() {
  return /*#__PURE__*/React.createElement("img", {
    src: img$1,
    alt: "Calendar Icon",
    width: "18",
    height: "18"
  });
}
function ChevronIcon({
  direction = 'down'
}) {
  const rotationMap = {
    up: '0',
    right: '90',
    down: '180',
    left: '270'
  };
  const rotation = rotationMap[direction] || '0';
  return /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "Chevron Icon",
    width: "30",
    height: "30",
    style: {
      transform: `rotate(${rotation}deg)`
    }
  });
}

var css_248z$1 = ".Button-module_button__dg3cB {\r\n    background:transparent;\r\n    border:none;\r\n    padding: 0;\r\n}";
var styles = {"button":"Button-module_button__dg3cB"};
styleInject(css_248z$1);

const Button = /*#__PURE__*/React.forwardRef(({
  onClick,
  children,
  icon: Icon,
  className,
  ...props
}, ref) => {
  const handleClick = e => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    onClick: handleClick,
    className: `${styles.button} ${className ? className : ''}`
  }, props), Icon && /*#__PURE__*/React.createElement(Icon, null), children);
});

const DEFAULT_CONFIG = {
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
const currentYear = new Date().getFullYear();
const CONFIG_VALIDATION_RULES = {
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

// Fonction pour les configurations d'années
const processYearConfig = (yearConfig, currentYear) => {
  if (typeof yearConfig === 'number') return yearConfig;
  if (typeof yearConfig === 'string') {
    const match = yearConfig.match(/(auto|actual)([+-]\d+)?/);
    if (match) {
      const base = currentYear;
      const offset = parseInt(match[2], 10) || 0;
      return base + offset;
    }
  }

  // retourner null si la configuration de l'année n'est pas valide
  return null;
};
const adjustDate = (currentDate, yearAdjustment, monthAdjustment) => {
  const year = currentDate.getFullYear() + yearAdjustment;
  const month = (currentDate.getMonth() + monthAdjustment + 12) % 12;
  return new Date(year, month);
};
const applyYearConfig = (yearConfig, currentYear) => {
  return processYearConfig(yearConfig, currentYear);
};
const goToNextMonth = (currentDate, minYear, maxYear) => {
  const nextDate = adjustDate(currentDate, currentDate.getMonth() === 11 ? 1 : 0, 1);
  if (nextDate.getFullYear() > applyYearConfig(maxYear)) {
    return new Date(applyYearConfig(maxYear), 11);
  }
  return nextDate;
};
const goToPreviousMonth = (currentDate, minYear, maxYear) => {
  const prevDate = adjustDate(currentDate, currentDate.getMonth() === 0 ? -1 : 0, -1);
  if (prevDate.getFullYear() < applyYearConfig(minYear)) {
    return new Date(applyYearConfig(minYear), 0);
  }
  return prevDate;
};
const goToNextYear = (currentDate, minYear, maxYear) => {
  const nextDate = adjustDate(currentDate, 1, 0);
  if (nextDate.getFullYear() > applyYearConfig(maxYear)) {
    return new Date(applyYearConfig(maxYear), currentDate.getMonth());
  }
  return nextDate;
};
const goToPreviousYear = (currentDate, minYear, maxYear) => {
  const prevDate = adjustDate(currentDate, -1, 0);
  if (prevDate.getFullYear() < applyYearConfig(minYear)) {
    return new Date(applyYearConfig(minYear), currentDate.getMonth());
  }
  return prevDate;
};
const goToPreviousYearBlock = (yearsBlock, minYear, maxYear, yearBlockSize) => {
  const blockSize = yearBlockSize || DEFAULT_CONFIG.YEAR_BLOCK_SIZE;
  const minProcessedYear = applyYearConfig(minYear, new Date().getFullYear());
  const maxProcessedYear = applyYearConfig(maxYear, new Date().getFullYear());
  let newStartYear = yearsBlock[0] - blockSize;

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
  }, (_, i) => newStartYear + i).filter(year => year >= minProcessedYear && year <= maxProcessedYear);
};
const goToNextYearBlock = (yearsBlock, minYear, maxYear, yearBlockSize) => {
  const blockSize = yearBlockSize || DEFAULT_CONFIG.YEAR_BLOCK_SIZE;
  const minProcessedYear = applyYearConfig(minYear, new Date().getFullYear());
  const maxProcessedYear = applyYearConfig(maxYear, new Date().getFullYear());
  let newStartYear = yearsBlock[0] + blockSize;
  if (newStartYear > maxProcessedYear) {
    newStartYear = minProcessedYear;
  }
  return Array.from({
    length: blockSize
  }, (_, i) => newStartYear + i).filter(year => year >= minProcessedYear && year <= maxProcessedYear);
};
const calculateNewDate = (view, direction, yearsBlock, prev, minYear, maxYear, yearBlockSize) => {
  const currentYear = new Date().getFullYear();
  const minProcessedYear = applyYearConfig(minYear, currentYear);
  const maxProcessedYear = applyYearConfig(maxYear, currentYear);
  let newDate = prev;
  let newYearBlock = yearsBlock;
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
    newDate,
    newYearBlock
  };
};
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
      const item = getItem ? getItem(index) : index;
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

function useKeyboardAccessibility(onAction) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onAction();
      }
    };
    const handleKeyUp = e => {
      if (e.key === 'Space') {
        onAction();
      }
    };
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
      currentRef.addEventListener('keyup', handleKeyUp);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyDown);
        currentRef.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [onAction]);
  return ref;
}

const ChevronButton = /*#__PURE__*/React.forwardRef(({
  direction,
  onClick,
  useIcons,
  label,
  ...props
}, ref) => /*#__PURE__*/React.createElement(Button, _extends({
  ref: ref,
  onClick: onClick,
  onMouseDown: e => e.preventDefault(),
  className: styles$1.chevronButton,
  icon: () => useIcons && /*#__PURE__*/React.createElement(ChevronIcon, {
    direction: direction
  })
}, props), !useIcons && label));
function ChevronButtons({
  setViewedDate,
  useIcons,
  view,
  setYearsBlock,
  yearsBlock,
  setAnimationKey,
  minYear,
  maxYear,
  yearBlockSize
}) {
  const handleDateChange = direction => {
    setViewedDate(prev => {
      const {
        newDate,
        newYearBlock
      } = calculateNewDate(view, direction, yearsBlock, prev, minYear, maxYear, yearBlockSize);
      if (newYearBlock) {
        setYearsBlock(newYearBlock);
      }
      if (newDate) {
        setAnimationKey(prevKey => prevKey + 1);
        return newDate;
      }
      setYearsBlock(newYearBlock);
      setAnimationKey(prevKey => prevKey + 1);
      return newDate;
    });
  };
  const prevButtonRef = useKeyboardAccessibility(direction => {
    handleDateChange(direction === 'down' ? 'prev' : 'next');
  });
  const nextButtonRef = useKeyboardAccessibility(direction => {
    handleDateChange(direction === 'down' ? 'prev' : 'next');
  });
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.chevronContainer
  }, /*#__PURE__*/React.createElement(ChevronButton, {
    direction: "down",
    onClick: () => handleDateChange('prev'),
    useIcons: useIcons,
    label: "Previous",
    ref: prevButtonRef,
    tabIndex: 0
  }), /*#__PURE__*/React.createElement(ChevronButton, {
    direction: "up",
    onClick: () => handleDateChange('next'),
    useIcons: useIcons,
    label: "Next",
    ref: nextButtonRef,
    tabIndex: 0
  }));
}

// ========== DATE UTILITIES ==========

const DAYS_IN_A_WEEK = 7;
const adjustStartOfWeek = (dayIndex, startOfWeek) => {
  const adjustedIndex = dayIndex - startOfWeek;
  return adjustedIndex < 0 ? adjustedIndex + DAYS_IN_A_WEEK : adjustedIndex;
};
const generateDays = (start, end, isGrayed = false) => new Array(end - start + 1).fill(null).map((_, index) => ({
  number: start + index,
  isGrayed
}));
function generateTotalSlots(currentMonth, startOfWeek = 0) {
  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonthIndex);
  const daysInPreviousMonth = getDaysInMonth(currentYear, currentMonthIndex - 1);
  const firstDayOfCurrentMonth = adjustStartOfWeek(new Date(currentYear, currentMonthIndex, 1).getDay(), startOfWeek);
  const leadingDaysCount = firstDayOfCurrentMonth;
  const trailingDaysCount = (DAYS_IN_A_WEEK - (leadingDaysCount + daysInCurrentMonth) % DAYS_IN_A_WEEK) % DAYS_IN_A_WEEK;
  const leadingDaysFromPreviousMonth = generateDays(daysInPreviousMonth - leadingDaysCount + 1, daysInPreviousMonth, true);
  const daysOfCurrentMonth = generateDays(1, daysInCurrentMonth);
  const trailingDaysForNextMonth = generateDays(1, trailingDaysCount, true);
  return [...leadingDaysFromPreviousMonth, ...daysOfCurrentMonth, ...trailingDaysForNextMonth];
}
function abbreviateMonth(month) {
  return month.length > 5 ? month.substring(0, 4) + '.' : month;
}
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function formatDatePickerDate(value, dateFormat = DEFAULT_CONFIG.DATE_FORMATS.DEFAULT) {
  if (!(value instanceof Date)) {
    return value;
  }
  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  switch (dateFormat) {
    case 'YYYY-MM-DD':
      return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    case 'MM-DD-YYYY':
      return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    case 'DD-MM-YYYY':
      return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    default:
      return value;
  }
}
function convertFormattedStringToDate(dateString, format = DEFAULT_CONFIG.DATE_FORMATS.DEFAULT) {
  const parts = dateString.split('/');
  switch (format) {
    case 'DD-MM-YYYY':
      return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])));
    case 'MM-DD-YYYY':
      return new Date(Date.UTC(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1])));
    case 'YYYY-MM-DD':
      return new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
    default:
      throw new Error(`Invalid date format: ${format}`);
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function generateRegex(formatKey, separator) {
  const formatMapping = {
    DEFAULT: `^(\\d{2})${separator}(\\d{2})${separator}(\\d{4})$`,
    US: `^(\\d{2})${separator}(\\d{2})${separator}(\\d{4})$`,
    ISO: `^(\\d{4})${separator}(\\d{2})${separator}(\\d{2})$`
  };
  return formatMapping[formatKey];
}
function isValidDate(dateString, formatKey = DEFAULT_CONFIG.DATE_FORMAT, minYear = DEFAULT_CONFIG.MIN_YEAR, maxYear = DEFAULT_CONFIG.MAX_YEAR) {
  let day, month, year;
  const separator = dateString.includes('/') ? '/' : '-';
  const format = DEFAULT_CONFIG.DATE_FORMATS[formatKey];
  const regex = generateRegex(formatKey, separator);
  if (!new RegExp(regex).test(dateString)) return {
    isValid: false,
    errorType: 'invalidDate'
  };
  switch (format) {
    case DEFAULT_CONFIG.DATE_FORMATS.DEFAULT:
      [day, month, year] = dateString.split(separator).map(Number);
      break;
    case DEFAULT_CONFIG.DATE_FORMATS.US:
      [month, day, year] = dateString.split(separator).map(Number);
      break;
    case DEFAULT_CONFIG.DATE_FORMATS.ISO:
      [year, month, day] = dateString.split(separator).map(Number);
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
    const daysInMonth = new Date(year, month, 0).getDate();
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
const MASK_FORMATS = {
  [DEFAULT_CONFIG.DATE_FORMATS.DEFAULT]: [2, 5],
  [DEFAULT_CONFIG.DATE_FORMATS.US]: [2, 5],
  [DEFAULT_CONFIG.DATE_FORMATS.ISO]: [4, 7]
};
function formatToMask(value, format = DEFAULT_CONFIG.DATE_FORMATS.DEFAULT, separator = '/') {
  if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = value.split('-');
    switch (format) {
      case DEFAULT_CONFIG.DATE_FORMATS.US:
        value = `${month}${day}${year}`;
        break;
      case DEFAULT_CONFIG.DATE_FORMATS.DEFAULT:
        value = `${day}${month}${year}`;
        break;
      case DEFAULT_CONFIG.DATE_FORMATS.ISO:
        // Do nothing as the format is already correct.
        break;
      default:
        throw new Error(`Invalid format: ${format}`);
    }
  }
  const positions = MASK_FORMATS[format] || [];
  if (!positions.length) {
    throw new Error(`Invalid format: ${format}`);
  }
  let maskedValue = value.replace(/\D/g, '');
  positions.forEach(position => {
    if (maskedValue.length > position) {
      maskedValue = `${maskedValue.substring(0, position)}${separator}${maskedValue.substring(position)}`;
    }
  });
  return maskedValue;
}
function chooseDate(selectDate, closeCalendar, currentMonth, day) {
  selectDate(`${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
  closeCalendar();
}

const DAYS = 'days';
const MONTHS = 'months';
const YEARS = 'years';
function switchToMonthView(view) {
  return view === DAYS ? MONTHS : view;
}
function toggleYearView(view) {
  return view === YEARS ? MONTHS : YEARS;
}
function resetToCurrentDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function reorderDays(days, startDayIndex) {
  if (startDayIndex < 0 || startDayIndex > 6) return days;
  return [...days.slice(startDayIndex), ...days.slice(0, startDayIndex)];
}
const FORWARD = 'forward';
const BACKWARD = 'backward';
const updateMonth = (currentMonth, direction) => {
  const newMonth = new Date(currentMonth);
  const increment = direction === FORWARD ? 1 : -1;
  newMonth.setMonth(currentMonth.getMonth() + increment);
  return newMonth;
};
const handleTabKey = (e, day, index, currentMonth) => {
  const daysInCurrentMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const isLastDayOfCurrentMonth = day.number === daysInCurrentMonth && !day.isGrayed;
  const isFirstDayOfCurrentMonth = day.number === 1 && !day.isGrayed;
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

// Selecteur de mois
function MonthSelector({
  currentMonth,
  months,
  view,
  setView
}) {
  const handleMonthSelect = () => {
    setView(switchToMonthView(view));
  };
  const ref = useKeyboardAccessibility(handleMonthSelect);
  if (view === YEARS) return null;
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleMonthSelect,
    className: styles$1.navButton,
    tabIndex: 0
  }, months[currentMonth.getMonth()]);
}

// Selecteur d'année
function YearSelector({
  currentMonth,
  view,
  setView,
  yearsBlock
}) {
  const handleYearSelect = () => {
    setView(toggleYearView(view));
  };
  const ref = useKeyboardAccessibility(handleYearSelect);
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleYearSelect,
    className: styles$1.navButton,
    tabIndex: 0
  }, view === YEARS ? `${yearsBlock[0]}-${yearsBlock[yearsBlock.length - 1]}` : currentMonth.getFullYear());
}

// Bouton pour revenir à la date actuelle
function HomeButton({
  setViewedDate,
  setView,
  setCurrentDate
}) {
  const handleHomeClick = () => {
    const dateToday = resetToCurrentDate();
    setViewedDate(dateToday);
    setCurrentDate(dateToday);
    setView(DAYS);
  };
  const ref = useKeyboardAccessibility(handleHomeClick);
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    onClick: handleHomeClick,
    icon: HomeIcon,
    className: styles$1.navButton,
    tabIndex: 0
  });
}
function NavSelector(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles$1.NavSelector
  }, /*#__PURE__*/React.createElement(MonthSelector, props), /*#__PURE__*/React.createElement(YearSelector, props)), /*#__PURE__*/React.createElement("div", {
    className: styles$1.homeSelector
  }, /*#__PURE__*/React.createElement(HomeButton, props)), /*#__PURE__*/React.createElement(ChevronButtons, props));
}

function DaysView({
  totalSlots,
  chooseDate,
  reorderedDays,
  setCurrentMonth,
  currentMonth,
  selectedDate
  // viewedDate = null,
}) {
  const daysRefs = React.useRef([]);
  const [hasBeenHovered, setHasBeenHovered] = React.useState(false);
  const [changedMonth, setChangedMonth] = React.useState(null);
  const resetHoveredState = () => setHasBeenHovered(false);
  const handleDayHover = () => setHasBeenHovered(true);
  const today = new Date();
  React.useEffect(() => {
    if (changedMonth === 'next') {
      daysRefs.current[0]?.focus();
    } else if (changedMonth === 'prev') {
      daysRefs.current[daysRefs.current.length - 1]?.focus();
    }
  }, [changedMonth]);
  const handleDayKeyDown = (e, index) => {
    if (e.key === 'Tab') {
      let direction;
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
      const result = handleTabKey(e, totalSlots[index], index, currentMonth);
      if (result.direction) {
        e.preventDefault();
        setCurrentMonth(updateMonth(currentMonth, result.direction));
      }
    } else {
      handleNavigationKeys(e, index, totalSlots.length - 1, selectedIndex => chooseDate(totalSlots[selectedIndex].number), daysRefs.current);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.daysContainer,
    onMouseLeave: resetHoveredState
  }, reorderedDays.map(day => /*#__PURE__*/React.createElement("div", {
    className: styles$1.header,
    key: day
  }, day)), totalSlots.map((day, index) => {
    const todayIsThisDay = !day.isGrayed && today.getDate() === day.number && today.getMonth() === currentMonth.getMonth() && today.getFullYear() === currentMonth.getFullYear();
    const isSelectedDate = !day.isGrayed && selectedDate.getDate() === day.number && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear();
    let highlightedClass = '';
    if (isSelectedDate) {
      highlightedClass = styles$1.active;
    } else if (todayIsThisDay && !hasBeenHovered) {
      highlightedClass = styles$1.today;
    }
    const dayClass = day.isGrayed ? styles$1.grayedDay : styles$1.day;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: `${dayClass} ${highlightedClass}`,
      onClick: event => {
        event.stopPropagation();
        if (!day.isGrayed) chooseDate(day.number);
      },
      onKeyDown: e => handleDayKeyDown(e, index),
      onMouseEnter: handleDayHover,
      ref: el => daysRefs.current[index] = el,
      tabIndex: day.isGrayed ? -1 : 0
    }, day.number);
  }));
}

function MonthsView({
  handleMonthClick,
  selectedDate,
  translations
}) {
  const monthsRefs = React.useRef([]);
  const handleMonthKeyDown = (e, index) => {
    handleNavigationKeys(e, index, 11, handleMonthClick, monthsRefs.current);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.monthsContainer
  }, translations.shortMonths.map((month, index) => /*#__PURE__*/React.createElement("div", {
    key: month,
    className: `${styles$1.month} ${index === selectedDate.getMonth() ? styles$1.selectedMonth : ''}`,
    onClick: event => {
      event.stopPropagation();
      handleMonthClick(index);
    },
    onKeyDown: e => handleMonthKeyDown(e, index),
    ref: el => monthsRefs.current[index] = el,
    tabIndex: 0
  }, abbreviateMonth(month))));
}

function YearsView({
  handleYearClick,
  selectedDate,
  yearsBlock,
  yearBlockSize,
  minYear,
  maxYear
}) {
  const yearsRefs = React.useRef([]);
  const displayedYears = yearsBlock.slice(0, yearBlockSize);
  const handleYearKeyDown = (e, index) => {
    handleNavigationKeys(e, index, displayedYears.length - 1, handleYearClick, yearsRefs.current, i => displayedYears[i]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.yearsContainer
  }, displayedYears.map((year, index) => /*#__PURE__*/React.createElement("div", {
    key: year || index,
    className: `${styles$1.year} ${index === selectedDate.getYear() ? styles$1.selectedYear : ''}`,
    onClick: event => {
      event.stopPropagation();
      handleYearClick(year);
    },
    onKeyDown: e => handleYearKeyDown(e, index),
    ref: el => yearsRefs.current[index] = el,
    tabIndex: 0
  }, year)));
}

function DateGrid({
  totalSlots,
  chooseDate,
  translations,
  view,
  setView,
  setCurrentMonth,
  currentMonth,
  yearsBlock,
  animationKey,
  reorderedDays,
  closeCalendar,
  selectedDate,
  viewedDate,
  currentDate,
  yearBlockSize,
  minYear,
  maxYear
}) {
  const handleMonthClick = monthIndex => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));
    setView('days');
  };
  const handleYearClick = selectedYear => {
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
    currentDate: currentDate
  }), view === 'months' && /*#__PURE__*/React.createElement(MonthsView, {
    translations: translations,
    handleMonthClick: handleMonthClick,
    selectedDate: selectedDate
  }), view === 'years' && /*#__PURE__*/React.createElement(YearsView, {
    currentMonth: currentMonth,
    yearsBlock: yearsBlock,
    animationKey: animationKey,
    handleYearClick: handleYearClick,
    selectedDate: selectedDate,
    yearBlockSize: yearBlockSize,
    minYear: minYear,
    maxYear: maxYear
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

function getTranslations(language = 'en') {
  switch (language) {
    case 'fr':
      return frTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

function useCalendarLogic(initialMonth, selectedDate, startOfWeek = 0) {
  const [viewedDate, setViewedDate] = React.useState(selectedDate || initialMonth);
  const totalSlots = generateTotalSlots(viewedDate, startOfWeek);
  return {
    viewedDate,
    setViewedDate,
    totalSlots,
    selectedDate
  };
}

const useYearLogic = (minYear = DEFAULT_CONFIG.MIN_YEAR, maxYear = DEFAULT_CONFIG.MAX_YEAR, yearBlockSize = DEFAULT_CONFIG.YEAR_BLOCK_SIZE) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const initialMonth = new Date(thisYear, today.getMonth());

  // Bloc actuel basé sur l'année courante
  const calculateYearBlockStart = currentYear => {
    const yearsSinceStart = currentYear - minYear;
    return currentYear - yearsSinceStart % yearBlockSize;
  };
  const [yearsBlock, setYearsBlock] = React.useState(() => {
    const yearBlockStart = calculateYearBlockStart(thisYear);
    return Array.from({
      length: yearBlockSize
    }, (_, i) => yearBlockStart + i).filter(year => year >= minYear && year <= maxYear);
  });

  // Génération du tableau des années
  const years = Array.from({
    length: maxYear - minYear + 1
  }, (_, i) => minYear + i);
  return {
    today,
    thisYear,
    initialMonth,
    years,
    yearsBlock,
    setYearsBlock,
    yearBlockSize
  };
};

var css_248z = "/* Default */\r\n\r\n.AlternativeCalendar-module_day__FgpKU,\r\n.AlternativeCalendar-module_grayedDay__zHy90 {\r\n    cursor: default;\r\n    text-align: center;\r\n    padding: 8px 4px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.AlternativeCalendar-module_day__FgpKU:hover,\r\n.AlternativeCalendar-module_month__spIOn:hover,\r\n.AlternativeCalendar-module_year__qTgQM:hover {\r\n    background: #EEF0F4;\r\nborder-radius: 25%;\r\nbox-shadow: inset 7px 7px 14px #d4d6d9, inset -7px -7px 14px #ffffff;\r\n}\r\n\r\n.AlternativeCalendar-module_active__eqq7e {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.AlternativeCalendar-module_navButton__EH2c2:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.AlternativeCalendar-module_grayedDay__zHy90 {\r\n    color: #0000003b;\r\n}\r\n\r\n\r\n/* Glass */\r\n.AlternativeCalendar-module_glass__42Ilj {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 10px 10px;\r\n    background: rgba(255, 242, 223, 0.25);\r\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\r\n    backdrop-filter: blur( 6px );\r\n    -webkit-backdrop-filter: blur( 6px );\r\n    border-radius: 10px;\r\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n    color: rgba(0, 0, 0, 0.867);\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_daysContainer__a371R, .AlternativeCalendar-module_daysContainer__a371R {\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_day__FgpKU,\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_grayedDay__zHy90 {\r\n    cursor: default;\r\n    text-align: center;\r\n    padding: 8px 4px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_day__FgpKU:hover,\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_month__spIOn:hover,\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_year__qTgQM:hover {\r\n    background-color: #490e0e;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_active__eqq7e {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_navButton__EH2c2:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.AlternativeCalendar-module_glass__42Ilj .AlternativeCalendar-module_grayedDay__zHy90 {\r\n    color: #de22223b;\r\n}\r\n\r\n\r\n\r\n/* Neuro */\r\n.AlternativeCalendar-module_neuro__LpPqE {\r\n    margin-top: 15px;\r\n    position: absolute;\r\n    padding: 20px 20px;\r\n    border-radius: 35px;\r\n    background: #ffffff;\r\n    box-shadow: inset 20px 20px 60px #d2d2d2,\r\n    inset -20px -20px 60px #ffffff;\r\n    width: fit-content;\r\n    width: 300px;\r\n    height: fit-content;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n}\r\n\r\n\r\n";
var alternativeStyles = {"day":"AlternativeCalendar-module_day__FgpKU","grayedDay":"AlternativeCalendar-module_grayedDay__zHy90","month":"AlternativeCalendar-module_month__spIOn","year":"AlternativeCalendar-module_year__qTgQM","active":"AlternativeCalendar-module_active__eqq7e","navButton":"AlternativeCalendar-module_navButton__EH2c2","glass":"AlternativeCalendar-module_glass__42Ilj","daysContainer":"AlternativeCalendar-module_daysContainer__a371R","neuro":"AlternativeCalendar-module_neuro__LpPqE"};
styleInject(css_248z);

const useDesignStyles = designType => {
  const selectedStyles = designType === 'default' ? styles$1 : alternativeStyles;
  const designClass = designType === 'neuro' ? 'neuro' : designType === 'glass' ? 'glass' : '';
  return {
    selectedStyles,
    designClass
  };
};

const Calendar = /*#__PURE__*/React.forwardRef(({
  selectDate,
  closeCalendar,
  useIcons,
  language,
  reorderedDays,
  startOfWeek,
  designType,
  ...dateProps
}, ref) => {
  // Translation utility
  const translations = getTranslations(language);

  // Design Styles
  const {
    selectedStyles,
    designClass
  } = useDesignStyles(designType);

  // Year Logic
  const {
    initialMonth,
    years,
    yearsBlock,
    setYearsBlock
  } = useYearLogic(dateProps.minYear, dateProps.maxYear, dateProps.yearBlockSize);

  // Calendar Logic
  const {
    viewedDate,
    setViewedDate,
    totalSlots
  } = useCalendarLogic(initialMonth, dateProps.selectedDate, startOfWeek, dateProps.yearBlockSize);

  // Date choosing logic
  const handleChooseDate = day => chooseDate(selectDate, closeCalendar, viewedDate, day);

  // State Initializations
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [view, setView] = React.useState('days');
  const [animationKey, setAnimationKey] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: `${selectedStyles.calendar} ${selectedStyles[designClass]}`,
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
    key: `${viewedDate.getMonth()}-${viewedDate.getFullYear()}`,
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
    designClass: selectedStyles[designClass]
  }));
});

var _excluded$1 = ["onClick", "showCalendar"];
var CalendarButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
    showCalendar = _ref.showCalendar,
    props = _objectWithoutProperties(_ref, _excluded$1);
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

const MaskedInput = /*#__PURE__*/React.forwardRef(({
  value,
  onChange,
  format = 'DEFAULT',
  ...props
}, ref) => {
  const [displayValue, setDisplayValue] = React.useState(formatToMask(value, format));
  React.useEffect(() => {
    setDisplayValue(formatToMask(value, format));
  }, [value, format]);
  const handleChange = e => {
    let newValue = e.target.value;
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

function useDateValidation(dateFormat = DEFAULT_CONFIG.DATE_FORMAT, minYear = DEFAULT_CONFIG.MIN_YEAR, maxYear = DEFAULT_CONFIG.MAX_YEAR, language = DEFAULT_CONFIG.LANGUAGE) {
  const [error, setError] = React.useState(null);
  const translations = getTranslations(language);
  function validate(value) {
    const formatKey = Object.values(DEFAULT_CONFIG.DATE_FORMATS).includes(dateFormat) ? Object.keys(DEFAULT_CONFIG.DATE_FORMATS).find(key => DEFAULT_CONFIG.DATE_FORMATS[key] === dateFormat) : DEFAULT_CONFIG.DATE_FORMAT;
    let formattedError = translations.errors.unknownError;
    const validationResponse = isValidDate(value, formatKey, minYear, maxYear);
    if (validationResponse.isValid) {
      setError(null);
      return true;
    } else {
      const errorType = validationResponse.errorType;
      if (errorType === 'outOfRange') {
        formattedError = translations.errors.invalidDateRange.replace('{minYear}', minYear ? minYear.toString() : 'N/A').replace('{maxYear}', maxYear ? maxYear.toString() : 'N/A');
      } else if (errorType === 'invalidDate') {
        formattedError = translations.errors.invalidDate;
      }
      setError(formattedError);
      return false;
    }
  }
  return [error, validate, setError];
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

function useDatePickerState(initialValue, dateFormat, onClose, checkError, setError
// error,
) {
  // Gestion de l'affichage du calendrier
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [lastDateBeforeHomeClick, setLastDateBeforeHomeClick] = React.useState(null);

  // Gestion de la valeur saisie
  const [inputValue, setInputValue] = React.useState(formatDatePickerDate(initialValue, dateFormat));

  // Fonction pour basculer l'affichage du calendrier
  function toggleCalendar() {
    setShowCalendar(prev => !prev);
  }

  // Fonction pour fermer le calendrier
  function closeCalendar() {
    const hasError = checkError ? checkError() : false;
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
    showCalendar,
    inputValue,
    isFocused,
    toggleCalendar,
    closeCalendar,
    setInput,
    handleFocus,
    handleBlur,
    lastDateBeforeHomeClick,
    saveLastDateBeforeHomeClick
  };
}

function useOutsideInteractions(ref, buttonRef, callback) {
  React.useEffect(() => {
    let timeoutId;
    let isClicking = false;
    const handleMouseUpOutside = event => {
      if (ref.current && event.target !== ref.current && !ref.current.contains(event.target) && (!buttonRef || buttonRef.current && !buttonRef.current.contains(event.target))) {
        callback();
      }
    };
    const handleFocusOut = () => {
      timeoutId = setTimeout(() => {
        if (!isClicking && ref.current && !ref.current.contains(document.activeElement)) {
          callback();
        }
      }, 0);
    };
    const handleFocusIn = () => {
      clearTimeout(timeoutId);
    };
    const handleClick = event => {
      if (event.type === 'mousedown') {
        isClicking = true;
      } else if (event.type === 'mouseup') {
        isClicking = false;
      }
    };
    document.addEventListener('mouseup', handleMouseUpOutside);
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('focusout', handleFocusOut);
      currentRef.addEventListener('focusin', handleFocusIn);
      currentRef.addEventListener('mousedown', handleClick);
      currentRef.addEventListener('mouseup', handleClick);
    }
    return () => {
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

function validateDateFormat(dateFormat) {
  const validFormat = DEFAULT_CONFIG.DATE_FORMATS[dateFormat];
  if (!validFormat) {
    console.info(`Invalid format key: ${dateFormat}. Defaulting to DEFAULT format.`);
    return DEFAULT_CONFIG.DATE_FORMATS[DEFAULT_CONFIG.DATE_FORMAT];
  }
  return validFormat;
}
const handlePropsAndConfig = configProps => {
  const {
    useIcons,
    dateFormat,
    customStyles,
    startOfWeek,
    manualInputEnabled,
    minYear,
    maxYear,
    language,
    yearBlockSize,
    designType
  } = {
    ...DEFAULT_CONFIG,
    ...configProps
  };
  const currentYear = new Date().getFullYear();
  const getProcessedValue = (originalValue, defaultValue, processingFunc, configKey, currentYear) => {
    if (originalValue !== undefined) {
      let processedValue = processingFunc ? processingFunc(originalValue, currentYear) : originalValue;
      const rule = CONFIG_VALIDATION_RULES[configKey];
      if (Array.isArray(rule) && !rule.includes(processedValue)) {
        console.info(`Invalid value "${processedValue}" for ${configKey}. Defaulting to "${defaultValue}".`);
        return defaultValue;
      }

      // Si la valeur est null (indicateur d'erreur de processYearConfig)
      if (processedValue === null) {
        console.info(`Invalid format for "${originalValue}" in ${configKey}. Defaulting to "${defaultValue}".`);
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
    customStyles,
    manualInputEnabled: getProcessedValue(manualInputEnabled, DEFAULT_CONFIG.MANUAL_INPUT_ENABLED, null, 'MANUAL_INPUT_ENABLED'),
    minYear: getProcessedValue(minYear, DEFAULT_CONFIG.MIN_YEAR, applyYearConfig, 'MIN_YEAR', currentYear),
    maxYear: getProcessedValue(maxYear, DEFAULT_CONFIG.MAX_YEAR, applyYearConfig, 'MAX_YEAR', currentYear),
    yearBlockSize: getProcessedValue(yearBlockSize, DEFAULT_CONFIG.YEAR_BLOCK_SIZE),
    useIcons: getProcessedValue(useIcons, DEFAULT_CONFIG.USE_ICONS, null, 'USE_ICONS'),
    dateFormat: getProcessedValue(dateFormat, DEFAULT_CONFIG.DATE_FORMATS[DEFAULT_CONFIG.DATE_FORMAT], validateDateFormat)
  };
};

const updateInput = (setInput, newValue) => {
  setInput(newValue);
};
const handleEmptyInput = (name, onChange, setError, setSelectedDate) => {
  setError(null);
  onChange({
    target: {
      name,
      value: ''
    }
  });
  setSelectedDate(new Date());
};
const handleValidDate = (newValue, name, onChange, setError, setSelectedDate, convertFormattedStringToDate, dateFormat) => {
  setError(null);
  const dateObject = convertFormattedStringToDate(newValue, dateFormat);
  setSelectedDate(dateObject);

  // Formater la date pour l'hôte en format 'YYYY-MM-DD'
  const formattedForHost = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;
  onChange({
    target: {
      name,
      value: formattedForHost
    }
  }); // nous passons cette valeur à l'hôte
};
const handleIncompleteInput = (newValue, name, onChange, setError) => {
  setError(null);
  onChange({
    target: {
      name,
      value: newValue
    }
  });
};
const toggleCalendarVisibility = toggleCalendar => event => {
  event.stopPropagation();
  toggleCalendar();
};
const handleDateSelect = (setInput, setSelectedDate, closeCalendar, validate, formatDatePickerDate, dateFormat, onChange, name) => date => {
  const actualDate = typeof date === 'string' ? new Date(date) : date;
  setInput(actualDate);
  setSelectedDate(actualDate);
  closeCalendar();
  const formattedForDisplay = formatDatePickerDate(actualDate, dateFormat);
  validate(formattedForDisplay);

  // Maintenant, nous formaterons toujours la date pour l'hôte en format 'YYYY-MM-DD'
  const formattedForHost = `${actualDate.getFullYear()}-${String(actualDate.getMonth() + 1).padStart(2, '0')}-${String(actualDate.getDate()).padStart(2, '0')}`;
  onChange({
    target: {
      name,
      value: formattedForHost // nous passons cette valeur à l'hôte
    }
  });
};

const createEscapeHandler = (closeCalendar, inputRef) => {
  return () => {
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
    closeCalendar();
  };
};

var _excluded = ["id", "name", "value", "onChange", "language", "minYear", "maxYear", "manualInputEnabled", "dateFormat", "yearBlockSize", "designType", "onClose"];

// 6. Component Definition
function DatePicker(_ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
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
    _useDateValidation2 = _slicedToArray(_useDateValidation, 3),
    error = _useDateValidation2[0],
    validate = _useDateValidation2[1],
    setError = _useDateValidation2[2];

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
    setInput(value);
  }, [value, setInput]);
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
  useOutsideInteractions(calendarRef, buttonRef, closeCalendar);

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
    format: dateFormat,
    onBlur: manualInputEnabled ? handleInputChange : null,
    placeholder: translations.placeholder,
    "aria-label": "Selected date",
    readOnly: !manualInputEnabled,
    className: error ? styles$2.errorInput : '',
    onClick: onToggleCalendarVisibility,
    onChange: handleInputChange,
    maxLength: 10
  }), /*#__PURE__*/React.createElement(CalendarButton, {
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

module.exports = DatePicker;
