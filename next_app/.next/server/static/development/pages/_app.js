module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "/Users/yuki/Desktop/programming/JavaScript/React/next_app/lib/redux-store.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const _NRS_ = "__NEXT_REDUX_STORE__"; // storeを作成する

function getOrCreateStore(initialState) {
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_1__["initStore"])(initialState);
  }

  if (!window[_NRS_]) {
    window[_NRS_] = Object(_store__WEBPACK_IMPORTED_MODULE_1__["initStore"])(initialState);
  }

  return window[_NRS_];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    } // 最後に関数として使えるようにエクスポート


    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/redux-store */ "./lib/redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yuki/Desktop/programming/JavaScript/React/next_app/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class _App extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"])(_App));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);

 // ステート初期値

const initial = {
  message: "START",
  count: 0
}; // レデューサー

function counterReducer(state = initial, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        message: "INCREMENT",
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        message: "DECREMENT",
        count: state.count - 1
      };

    case "RESET":
      return {
        message: "RESET",
        count: initial.count
      };

    default:
      return state;
  }
} // initStore関数（redux-store.jsで必要）
// ミドルウェアを使うと言う記述をしている


function initStore(state = initial) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2xpYi9yZWR1eC1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfTlJTXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0U3RvcmUiLCJ3aW5kb3ciLCJBcHAiLCJBcHBXaXRoUmVkdXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsIl9lcnJvckluZm8iLCJyb3V0ZXIiLCJfX05fU1NHIiwiX19OX1NTUCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJleGVjT25jZSIsImNvbnNvbGUiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiX0FwcCIsIndpdGhSZWR1eFN0b3JlIiwiaW5pdGlhbCIsIm1lc3NhZ2UiLCJjb3VudCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdI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R0osT0FBaEMsRUFBeUNLLE1BQXpDLEVBQWlEO0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssV0FBTDtBQUNFLGFBQU87QUFDTEwsZUFBTyxFQUFFLFdBREo7QUFFTEMsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sR0FBYztBQUZoQixPQUFQOztBQUlGLFNBQUssV0FBTDtBQUNFLGFBQU87QUFDTEQsZUFBTyxFQUFFLFdBREo7QUFFTEMsYUFBSyxFQUFFRSxLQUFLLENBQUNGLEtBQU4sR0FBYztBQUZoQixPQUFQOztBQUlGLFNBQUssT0FBTDtBQUNFLGFBQU87QUFDTEQsZUFBTyxFQUFFLE9BREo7QUFFTEMsYUFBSyxFQUFFRixPQUFPLENBQUNFO0FBRlYsT0FBUDs7QUFJRjtBQUNFLGFBQU9FLEtBQVA7QUFqQko7QUFtQkQsQyxDQUVEO0FBQ0E7OztBQUNPLFNBQVNuRSxTQUFULENBQW1CbUUsS0FBSyxHQUFHSixPQUEzQixFQUFvQztBQUN6QyxTQUFPTyx5REFBVyxDQUFDSixjQUFELEVBQWlCQyxLQUFqQixFQUF3QkksNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBdkMsQ0FBbEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgX05SU18gPSBcIl9fTkVYVF9SRURVWF9TVE9SRV9fXCI7XG5cbi8vIHN0b3Jl44KS5L2c5oiQ44GZ44KLXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBpZiAoIXdpbmRvd1tfTlJTX10pIHtcbiAgICB3aW5kb3dbX05SU19dID0gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHdpbmRvd1tfTlJTX107XG59XG5cbmV4cG9ydCBkZWZhdWx0IChBcHApID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmU7XG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XG4gICAgfVxuXG4gICAgLy8g5pyA5b6M44Gr6Zai5pWw44Go44GX44Gm5L2/44GI44KL44KI44GG44Gr44Ko44Kv44K544Od44O844OIXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz47XG4gICAgfVxuICB9O1xufTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi9saWIvcmVkdXgtc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNsYXNzIF9BcHAgZXh0ZW5kcyBBcHAge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKF9BcHApO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuLy8g44K544OG44O844OI5Yid5pyf5YCkXG5jb25zdCBpbml0aWFsID0ge1xuICBtZXNzYWdlOiBcIlNUQVJUXCIsXG4gIGNvdW50OiAwLFxufTtcblxuLy8g44Os44OH44Ol44O844K144O8XG5mdW5jdGlvbiBjb3VudGVyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIklOQ1JFTUVOVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJJTkNSRU1FTlRcIixcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsgMSxcbiAgICAgIH07XG4gICAgY2FzZSBcIkRFQ1JFTUVOVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJERUNSRU1FTlRcIixcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMSxcbiAgICAgIH07XG4gICAgY2FzZSBcIlJFU0VUXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBcIlJFU0VUXCIsXG4gICAgICAgIGNvdW50OiBpbml0aWFsLmNvdW50LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIGluaXRTdG9yZemWouaVsO+8iHJlZHV4LXN0b3JlLmpz44Gn5b+F6KaB77yJXG4vLyDjg5/jg4njg6vjgqbjgqfjgqLjgpLkvb/jgYbjgajoqIDjgYboqJjov7DjgpLjgZfjgabjgYTjgotcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=