'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Success = function Success() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, React__default.createElement("g", {
    transform: "translate(.077 .077)"
  }, React__default.createElement("g", null, React__default.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3.719 7.884L6.235 10.4l3.032-3.032 2.774-2.774"
  }))));
};
var Success$1 = /*#__PURE__*/React__default.memo(Success);

var Close = function Close() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, React__default.createElement("g", {
    transform: "translate(.077 .077)"
  }, React__default.createElement("g", null, React__default.createElement("path", {
    fill: "#fff",
    d: "M10.915 9.98l2.853-2.846a.666.666 0 00-.942-.942L9.979 9.044 7.133 6.191a.666.666 0 00-.942.942L9.044 9.98 6.19 12.826a.666.666 0 10.942.942l2.846-2.853 2.846 2.853a.666.666 0 10.942-.942z",
    transform: "translate(-2.017 -2.018)"
  }))));
};
var Close$1 = /*#__PURE__*/React__default.memo(Close);

var Info = function Info() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, React__default.createElement("g", {
    transform: "translate(-1533 -39)"
  }, React__default.createElement("g", {
    fill: "#fff",
    transform: "translate(-.358 -1.639)"
  }, React__default.createElement("circle", {
    cx: "1.134",
    cy: "1.134",
    r: "1.134",
    transform: "rotate(180 771.246 22.823)"
  }), React__default.createElement("path", {
    d: "M1 0a1 1 0 00-1 1v5a1 1 0 002 0V1a1 1 0 00-1-1z",
    transform: "rotate(180 771.17 26.882)"
  }))));
};
var Info$1 = /*#__PURE__*/React__default.memo(Info);

var Warning = function Warning() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, React__default.createElement("g", {
    transform: "rotate(180 774.5 27.5)"
  }, React__default.createElement("g", {
    fill: "#fff",
    transform: "translate(-.358 -1.639)"
  }, React__default.createElement("circle", {
    cx: "1.134",
    cy: "1.134",
    r: "1.134",
    transform: "rotate(180 771.246 22.823)"
  }), React__default.createElement("path", {
    d: "M1 0a1 1 0 00-1 1v5a1 1 0 002 0V1a1 1 0 00-1-1z",
    transform: "rotate(180 771.17 26.882)"
  }))));
};
var Warning$1 = /*#__PURE__*/React__default.memo(Warning);

var toastIcon = function toastIcon(_ref) {
  var type = _ref.type;
  switch (type) {
    case 'error':
      return React__default.createElement(Close$1, null);
    case 'info':
      return React__default.createElement(Info$1, null);
    case 'warning':
      return React__default.createElement(Warning$1, null);
    default:
      return React__default.createElement(Success$1, null);
  }
};

var Toast = function Toast(_ref) {
  var id = _ref.id,
    content = _ref.content,
    type = _ref.type,
    _ref$config = _ref.config,
    _ref$config2 = _ref$config === void 0 ? {} : _ref$config,
    backgroundColor = _ref$config2.backgroundColor,
    color = _ref$config2.color,
    onClose = _ref.onClose;
  return React__default.createElement("div", {
    className: "toast " + type,
    style: {
      backgroundColor: backgroundColor
    }
  }, React__default.createElement("div", {
    className: "icon"
  }, toastIcon({
    type: type
  })), React__default.createElement("div", {
    className: "content"
  }, React__default.createElement("p", {
    style: {
      color: color
    }
  }, content)), React__default.createElement("div", {
    className: "close",
    onClick: function onClick() {
      return onClose(id);
    }
  }, React__default.createElement(Close$1, null)));
};

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
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var initialState = {
  toasts: []
};
var toastReducer = function toastReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return _extends({}, state, {
        toasts: [].concat(state.toasts, [action.toast])
      });
    case 'REMOVE':
      {
        return _extends({}, state, {
          toasts: [].concat(state.toasts.filter(function (toast) {
            return toast.id !== action.id;
          }))
        });
      }
    case 'REMOVE_ALL':
      return _extends({}, state, {
        toasts: []
      });
    default:
      throw new Error();
  }
};
var useToast = function useToast() {
  var _useReducer = React.useReducer(toastReducer, initialState),
    state = _useReducer[0],
    dispatch = _useReducer[1];
  return _extends({}, state, {
    dispatch: dispatch
  });
};

var emitter = /*#__PURE__*/function () {
  var events = /*#__PURE__*/new Map();
  return {
    /**
     * Register an event handler for the given event name.
     * @param {Events} event Type of event to listen for
     * @param {Handler} callback Handler to call in response to given event
     */
    on: function on(event, callback) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(callback);
    },
    /**
     * Invoke all handlers for the given event name.
     * @param {Events} event The event type to invoke
     * @param {Any} args Any value passed to each handler
     */
    emit: function emit(event, args) {
      if (!events.has(event)) return;
      events.get(event).forEach(function (callback) {
        return callback(args);
      });
    },
    /** Remove all events. */off: function off() {
      events.clear();
    }
  };
}();

var toaster = function toaster(_ref) {
  var content = _ref.content,
    type = _ref.type,
    config = _ref.config;
  return {
    id: Math.random().toString(36).substr(2, 10),
    content: content,
    type: type,
    config: config
  };
};

var Events;
(function (Events) {
  Events["SHOW"] = "show";
  Events["HIDE"] = "hide";
  Events["HIDE_ALL"] = "hideAll";
})(Events || (Events = {}));

var toastDispatcher = function toastDispatcher(_ref) {
  var dispatch = _ref.dispatch,
    delay = _ref.delay;
  emitter.on(Events.SHOW, function (toast) {
    dispatch({
      type: 'ADD',
      toast: toast
    });
    if (delay) setTimeout(function () {
      dispatch({
        type: 'REMOVE',
        id: toast.id
      });
    }, delay);
  });
  emitter.on(Events.HIDE, function (id) {
    return dispatch({
      type: 'REMOVE',
      id: id
    });
  });
  emitter.on(Events.HIDE_ALL, function () {
    return dispatch({
      type: 'REMOVE_ALL'
    });
  });
};

var ToastContainer = function ToastContainer(_ref) {
  var _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-left' : _ref$position,
    delay = _ref.delay;
  var _useToast = useToast(),
    toasts = _useToast.toasts,
    dispatch = _useToast.dispatch;
  React.useEffect(function () {
    toastDispatcher({
      dispatch: dispatch,
      delay: delay
    });
    return function () {
      emitter.off();
    };
  }, [dispatch, delay]);
  var onClose = React.useCallback(function (id) {
    emitter.emit(Events.HIDE, id);
  }, []);
  return React__default.createElement("div", {
    className: "toastContainer " + position
  }, toasts.map(function (toast) {
    return React__default.createElement(Toast, Object.assign({
      key: toast.id
    }, toast, {
      onClose: onClose
    }));
  }));
};

var applyToast = function applyToast(_ref) {
  var toast = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return emitter.emit(Events.SHOW, toaster(_extends({}, toast)));
};
var toast = function toast(content, config) {
  return applyToast({
    content: content,
    type: 'default',
    config: config
  });
};
toast.success = function (content, config) {
  return applyToast({
    content: content,
    type: 'success',
    config: config
  });
};
toast.error = function (content, config) {
  return applyToast({
    content: content,
    type: 'error',
    config: config
  });
};
toast.info = function (content, config) {
  return applyToast({
    content: content,
    type: 'info',
    config: config
  });
};
toast.warn = function (content, config) {
  return applyToast({
    content: content,
    type: 'warning',
    config: config
  });
};
toast.hideAll = function () {
  return emitter.emit(Events.HIDE_ALL);
};

exports.ToastContainer = ToastContainer;
exports.toast = toast;
//# sourceMappingURL=kyz-toast.cjs.development.js.map
