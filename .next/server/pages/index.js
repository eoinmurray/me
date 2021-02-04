module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UnicodeFavicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnicodeFavicon */ \"./components/UnicodeFavicon.js\");\n\nvar _jsxFileName = \"/Users/eoinmurray/kyso/me/components/Header.js\";\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  componentDidMount() {\n    Object(_UnicodeFavicon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('🔱');\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1666069954\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"viewport\",\n          content: \"width=device-width, initial-scale=1\",\n          className: \"jsx-1666069954\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          className: \"jsx-1666069954\",\n          children: \"\\uD83D\\uDD25 Eoin Murray\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/profile.jpg\",\n        alt: \"\",\n        className: \"jsx-1666069954\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {\n        className: \"jsx-1666069954\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/\",\n        className: \"jsx-1666069954\",\n        children: \"Eoin Murray\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/about\",\n        className: \"jsx-1666069954\",\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"1666069954\",\n        children: \"img.jsx-1666069954{max-width:60px;margin-bottom:20px;}a.jsx-1666069954{margin-right:10px;}div.jsx-1666069954{margin-bottom:20px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lb2lubXVycmF5L2t5c28vbWUvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUc0QixBQUtHLEFBSUMsZUFSQSxHQUtyQixDQUlBLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2VvaW5tdXJyYXkva3lzby9tZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGYXZFbW9qaSBmcm9tICcuL1VuaWNvZGVGYXZpY29uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgRmF2RW1vamkoJ/CflLEnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDx0aXRsZT7wn5SlIEVvaW4gTXVycmF5PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxpbWcgc3JjPVwiL3Byb2ZpbGUuanBnXCIgYWx0PVwiXCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YSBocmVmPVwiL1wiPkVvaW4gTXVycmF5PC9hPlxuICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG4iXX0= */\\n/*@ sourceURL=/Users/eoinmurray/kyso/me/components/Header.js */\"\n      }, void 0, false, void 0, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this);\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJGYXZFbW9qaSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLDZFQUFjQSw0Q0FBSyxDQUFDQyxTQUFwQixDQUE4QjtBQUMzQ0MsbUJBQWlCLEdBQUc7QUFDbEJDLG1FQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFO0FBQUE7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBc0IsaUJBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixXQUFHLEVBQUMsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQUcsWUFBSSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNEJEOztBQWxDMEMsQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEZhdkVtb2ppIGZyb20gJy4vVW5pY29kZUZhdmljb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBGYXZFbW9qaSgn8J+UsScpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPHRpdGxlPvCflKUgRW9pbiBNdXJyYXk8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGltZyBzcmM9XCIvcHJvZmlsZS5qcGdcIiBhbHQ9XCJcIi8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxhIGhyZWY9XCIvXCI+RW9pbiBNdXJyYXk8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/UnicodeFavicon.js":
/*!**************************************!*\
  !*** ./components/UnicodeFavicon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (unicode => {\n  const canvas = document.createElement('canvas');\n\n  const getContext = w => {\n    canvas.width = canvas.height = w;\n    let context = canvas.getContext('2d');\n    context.font = 'normal normal normal 26px/' + w + 'px sans';\n    context.textBaseline = 'middle';\n    return context;\n  };\n\n  const hex2char = hex => {\n    var result = '',\n        n = parseInt(hex, 16);\n    if (n <= 0xFFFF) result += String.fromCharCode(n);else if (n <= 0x10FFFF) {\n      n -= 0x10000;\n      result += String.fromCharCode(0xD800 | n >> 10) + String.fromCharCode(0xDC00 | n & 0x3FF);\n    }\n    return result;\n  };\n\n  let context = getContext(32);\n  const content = unicode.replace(/[Uu]\\+10([A-Fa-f0-9]{4})/g, function (str, match) {\n    return hex2char('10' + matches);\n  }).replace(/[Uu]\\+([A-Fa-f0-9]{1,5})/g, function (str, match) {\n    return hex2char(match);\n  });\n  let iconWidth;\n  const link = document.createElement('link');\n  if (!canvas.toDataURL || !document.querySelectorAll) return;\n  iconWidth = context.measureText(content).width;\n  if (iconWidth > canvas.width) context = getContext(iconWidth);\n  context.fillText(content, (canvas.width - iconWidth) / 2, canvas.height / 2);\n  link.setAttribute('rel', 'icon');\n  link.setAttribute('type', 'image/png');\n  link.setAttribute('href', canvas.toDataURL('image/png'));\n\n  for (var icons = document.querySelectorAll('link[rel*=icon]'), i = 0, l = icons.length; i < l; i++) icons[i].parentNode.removeChild(icons[i]);\n\n  document.getElementsByTagName('head')[0].appendChild(link);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VuaWNvZGVGYXZpY29uLmpzPzNmMWQiXSwibmFtZXMiOlsidW5pY29kZSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJ3Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZm9udCIsInRleHRCYXNlbGluZSIsImhleDJjaGFyIiwiaGV4IiwicmVzdWx0IiwibiIsInBhcnNlSW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY29udGVudCIsInJlcGxhY2UiLCJzdHIiLCJtYXRjaCIsIm1hdGNoZXMiLCJpY29uV2lkdGgiLCJsaW5rIiwidG9EYXRhVVJMIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lYXN1cmVUZXh0IiwiZmlsbFRleHQiLCJzZXRBdHRyaWJ1dGUiLCJpY29ucyIsImkiLCJsIiwibGVuZ3RoIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZ0JBLHNFQUFELElBQWE7QUFDMUIsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjs7QUFFQSxRQUFNQyxVQUFVLEdBQUlDLENBQUQsSUFBTztBQUN4QkosVUFBTSxDQUFDSyxLQUFQLEdBQWVMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQkYsQ0FBL0I7QUFDQSxRQUFJRyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFkO0FBQ0FJLFdBQU8sQ0FBQ0MsSUFBUixHQUFlLCtCQUErQkosQ0FBL0IsR0FBbUMsU0FBbEQ7QUFDQUcsV0FBTyxDQUFDRSxZQUFSLEdBQXVCLFFBQXZCO0FBQ0EsV0FBT0YsT0FBUDtBQUNELEdBTkQ7O0FBUUEsUUFBTUcsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDeEIsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFBQSxRQUFpQkMsQ0FBQyxHQUFHQyxRQUFRLENBQUNILEdBQUQsRUFBTSxFQUFOLENBQTdCO0FBRUEsUUFBR0UsQ0FBQyxJQUFJLE1BQVIsRUFDRUQsTUFBTSxJQUFJRyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JILENBQXBCLENBQVYsQ0FERixLQUVLLElBQUdBLENBQUMsSUFBSSxRQUFSLEVBQWtCO0FBQ3JCQSxPQUFDLElBQUksT0FBTDtBQUNBRCxZQUFNLElBQUlHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixTQUFVSCxDQUFDLElBQUksRUFBbkMsSUFBMENFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixTQUFVSCxDQUFDLEdBQUcsS0FBbEMsQ0FBcEQ7QUFDRDtBQUNELFdBQU9ELE1BQVA7QUFDRCxHQVZEOztBQVlBLE1BQUlMLE9BQU8sR0FBR0osVUFBVSxDQUFDLEVBQUQsQ0FBeEI7QUFDQSxRQUFNYyxPQUFPLEdBQUdsQixPQUFPLENBQ3BCbUIsT0FEYSxDQUNMLDJCQURLLEVBQ3dCLFVBQVNDLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUN6RCxXQUFPVixRQUFRLENBQUMsT0FBT1csT0FBUixDQUFmO0FBQ0QsR0FIYSxFQUdYSCxPQUhXLENBR0gsMkJBSEcsRUFHMEIsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQzNELFdBQU9WLFFBQVEsQ0FBQ1UsS0FBRCxDQUFmO0FBQ0QsR0FMYSxDQUFoQjtBQU9BLE1BQUlFLFNBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUVBLE1BQUcsQ0FBQ0YsTUFBTSxDQUFDd0IsU0FBUixJQUFxQixDQUFDdkIsUUFBUSxDQUFDd0IsZ0JBQWxDLEVBQ0U7QUFFRkgsV0FBUyxHQUFHZixPQUFPLENBQUNtQixXQUFSLENBQW9CVCxPQUFwQixFQUE2QlosS0FBekM7QUFFQSxNQUFHaUIsU0FBUyxHQUFHdEIsTUFBTSxDQUFDSyxLQUF0QixFQUNFRSxPQUFPLEdBQUdKLFVBQVUsQ0FBQ21CLFNBQUQsQ0FBcEI7QUFFRmYsU0FBTyxDQUFDb0IsUUFBUixDQUFpQlYsT0FBakIsRUFBMEIsQ0FBQ2pCLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlaUIsU0FBaEIsSUFBNkIsQ0FBdkQsRUFBMER0QixNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBMUU7QUFDQWlCLE1BQUksQ0FBQ0ssWUFBTCxDQUFrQixLQUFsQixFQUF5QixNQUF6QjtBQUNBTCxNQUFJLENBQUNLLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsV0FBMUI7QUFDQUwsTUFBSSxDQUFDSyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCNUIsTUFBTSxDQUFDd0IsU0FBUCxDQUFpQixXQUFqQixDQUExQjs7QUFFQSxPQUFJLElBQUlLLEtBQUssR0FBRzVCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGlCQUExQixDQUFaLEVBQTBESyxDQUFDLEdBQUcsQ0FBOUQsRUFBaUVDLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxNQUEvRSxFQUF1RkYsQ0FBQyxHQUFHQyxDQUEzRixFQUE4RkQsQ0FBQyxFQUEvRixFQUNFRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTRyxVQUFULENBQW9CQyxXQUFwQixDQUFnQ0wsS0FBSyxDQUFDQyxDQUFELENBQXJDOztBQUVGN0IsVUFBUSxDQUFDa0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLFdBQXpDLENBQXFEYixJQUFyRDtBQUNELENBbkREIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vbmljb2RlRmF2aWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh1bmljb2RlKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5cbiAgY29uc3QgZ2V0Q29udGV4dCA9ICh3KSA9PiB7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IHdcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29udGV4dC5mb250ID0gJ25vcm1hbCBub3JtYWwgbm9ybWFsIDI2cHgvJyArIHcgKyAncHggc2FucydcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIGNvbnN0IGhleDJjaGFyID0gKGhleCkgPT4ge1xuICAgIHZhciByZXN1bHQgPSAnJywgbiA9IHBhcnNlSW50KGhleCwgMTYpXG5cbiAgICBpZihuIDw9IDB4RkZGRilcbiAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4pXG4gICAgZWxzZSBpZihuIDw9IDB4MTBGRkZGKSB7XG4gICAgICBuIC09IDB4MTAwMDBcbiAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCB8IChuID4+IDEwKSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4REMwMCB8IChuICYgMHgzRkYpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBsZXQgY29udGV4dCA9IGdldENvbnRleHQoMzIpXG4gIGNvbnN0IGNvbnRlbnQgPSB1bmljb2RlXG4gICAgLnJlcGxhY2UoL1tVdV1cXCsxMChbQS1GYS1mMC05XXs0fSkvZywgZnVuY3Rpb24oc3RyLCBtYXRjaCkge1xuICAgICAgcmV0dXJuIGhleDJjaGFyKCcxMCcgKyBtYXRjaGVzKVxuICAgIH0pLnJlcGxhY2UoL1tVdV1cXCsoW0EtRmEtZjAtOV17MSw1fSkvZywgZnVuY3Rpb24oc3RyLCBtYXRjaCkge1xuICAgICAgcmV0dXJuIGhleDJjaGFyKG1hdGNoKVxuICAgIH0pXG5cbiAgbGV0IGljb25XaWR0aFxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgaWYoIWNhbnZhcy50b0RhdGFVUkwgfHwgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpXG4gICAgcmV0dXJuXG5cbiAgaWNvbldpZHRoID0gY29udGV4dC5tZWFzdXJlVGV4dChjb250ZW50KS53aWR0aFxuXG4gIGlmKGljb25XaWR0aCA+IGNhbnZhcy53aWR0aClcbiAgICBjb250ZXh0ID0gZ2V0Q29udGV4dChpY29uV2lkdGgpXG5cbiAgY29udGV4dC5maWxsVGV4dChjb250ZW50LCAoY2FudmFzLndpZHRoIC0gaWNvbldpZHRoKSAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKVxuICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKVxuICBsaW5rLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9wbmcnKVxuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKVxuXG4gIGZvcih2YXIgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbCo9aWNvbl0nKSwgaSA9IDAsIGwgPSBpY29ucy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgaWNvbnNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpY29uc1tpXSlcblxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UnicodeFavicon.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n\nvar _jsxFileName = \"/Users/eoinmurray/kyso/me/pages/index.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: \"jsx-3354499182\",\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3354499182\" + \" \" + \"rhs\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/pro.jpg\",\n      alt: \"\",\n      className: \"jsx-3354499182\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3354499182\" + \" \" + \"lhs\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n      src: \"https://embed.spotify.com/?uri=spotify%3Auser%3Aem586%3Aplaylist%3A0pQkIIs4VXdJkQg6kdlvfw\",\n      width: \"300\",\n      height: \"550\",\n      className: \"jsx-3354499182\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"3354499182\",\n    children: \"body{font:13px Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;background-color:#000;color:white;margin:0;padding:0;}a{color:white;-webkit-text-decoration:underline;text-decoration:underline;}img{max-width:100%;max-height:100%;}iframe{border:none;}.lhs{padding:40px 100px;}.rhs{margin:50px;float:right;height:691px;}@media screen and (max-width:800px){.lhs{padding:40px;}.rhs{margin:40px;height:auto;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lb2lubXVycmF5L2t5c28vbWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ1QixBQUtnQixBQVFLLEFBS0csQUFLSCxBQUlPLEFBSVAsQUFPRyxBQUlELFlBNUJZLEFBVTVCLEFBUWMsQUFXRSxDQUpkLEVBcEJnQixJQVNsQixLQUtlLEFBV2IsT0F4QkYsTUFjQSxtQ0FuQkEsc0RBVHdCLHNCQUNWLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9lb2lubXVycmF5L2t5c28vbWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaHNcIj5cbiAgICAgIDxpbWcgc3JjPVwiL3Byby5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaHNcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9lbWJlZC5zcG90aWZ5LmNvbS8/dXJpPXNwb3RpZnklM0F1c2VyJTNBZW01ODYlM0FwbGF5bGlzdCUzQTBwUWtJSXM0VlhkSmtRZzZrZGx2ZndcIlxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGhlaWdodD1cIjU1MFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250OiAxM3B4IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxuICAgICAgICAgIHNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgaWZyYW1lIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGhzIHtcbiAgICAgICAgcGFkZGluZzogNDBweCAxMDBweDtcbiAgICAgIH1cblxuICAgICAgLnJocyB7XG4gICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDY5MXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAubGhzIHtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJocyB7XG4gICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\\n/*@ sourceURL=/Users/eoinmurray/kyso/me/pages/index.js */\"\n  }, void 0, false, void 0, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsa0ZBQ2I7QUFBQTtBQUFBLDBCQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLFVBQVQ7QUFBb0IsU0FBRyxFQUFDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBQSx3Q0FBZSxLQUFmO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsU0FBRyxFQUFDLDJGQUROO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxZQUFNLEVBQUMsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmhzXCI+XG4gICAgICA8aW1nIHNyYz1cIi9wcm8uanBnXCIgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGhzXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8aWZyYW1lXG4gICAgICAgIHNyYz1cImh0dHBzOi8vZW1iZWQuc3BvdGlmeS5jb20vP3VyaT1zcG90aWZ5JTNBdXNlciUzQWVtNTg2JTNBcGxheWxpc3QlM0EwcFFrSUlzNFZYZEprUWc2a2RsdmZ3XCJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBoZWlnaHQ9XCI1NTBcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udDogMTNweCBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZSxcbiAgICAgICAgICBzZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxocyB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yaHMge1xuICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgaGVpZ2h0OiA2OTFweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgLmxocyB7XG4gICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaHMge1xuICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });