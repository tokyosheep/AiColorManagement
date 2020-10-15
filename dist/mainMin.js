/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/adjust/adjustMain.tsx":
/*!*********************************************!*\
  !*** ./js/components/adjust/adjustMain.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_textBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/textBox */ "./js/components/parts/textBox.tsx");
/* harmony import */ var _parts_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/button */ "./js/components/parts/button.tsx");
/* harmony import */ var _parts_JsxButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/JsxButton */ "./js/components/parts/JsxButton.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var AdjustColor = function (props) {
    var handleNumberForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, type, name) {
        var color = __assign({}, props.state.colorValues.color);
        color[type][name] = e.target.value;
        props.set_ColorValue(type, color[type]);
    }, [props.state.colorValues]);
    var handleColorType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) { return props.set_ColorType(name === "RGB" ? "CMYK" : "RGB"); }, [props.state.colorValues]);
    var RGBFObj = Object.entries(props.state.colorValues.color.RGB).map(function (_a) {
        var key = _a[0], value = _a[1];
        return ({ key: key, value: value });
    });
    var RGBForm = RGBFObj.map(function (obj) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: obj.key },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_4__["ColorNumberBox"], { name: obj.key, value: obj.value, type: "RGB", func: handleNumberForm })); });
    var CMYKObj = Object.entries(props.state.colorValues.color.CMYK).map(function (_a) {
        var key = _a[0], value = _a[1];
        return ({ key: key, value: value });
    });
    var CMYKForm = CMYKObj.map(function (obj) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: obj.key },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_4__["ColorNumberBox"], { name: obj.key, value: obj.value, type: "CMYK", func: handleNumberForm })); });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("main", { className: "adjustColors" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "adjustList adjustColors__RGB " + (props.state.colorValues.type === "RGB" ? "" : "unbisible") }, RGBForm),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "adjustList adjustColors__CMYK " + (props.state.colorValues.type === "CMYK" ? "" : "unbisible") }, CMYKForm),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_button__WEBPACK_IMPORTED_MODULE_5__["ColorTypeBtn"], { func: handleColorType, name: props.state.colorValues.type }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_JsxButton__WEBPACK_IMPORTED_MODULE_6__["HostScriptButton"], { name: "adjust", object: { type: "adjust", color: props.state.colorValues } })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__["dispatchProps"])(AdjustColor));


/***/ }),

/***/ "./js/components/create/createMain.tsx":
/*!*********************************************!*\
  !*** ./js/components/create/createMain.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createOptions */ "./js/components/create/createOptions.tsx");
/* harmony import */ var _parts_checkBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/checkBox */ "./js/components/parts/checkBox.tsx");
/* harmony import */ var _parts_textBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/textBox */ "./js/components/parts/textBox.tsx");
/* harmony import */ var _parts_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/button */ "./js/components/parts/button.tsx");
/* harmony import */ var _parts_JsxButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/JsxButton */ "./js/components/parts/JsxButton.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










var initCMYK = {
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0
};
var initRGB = {
    red: 0,
    green: 0,
    blue: 0
};
var ColorButtonForms = function (_a) {
    var axe = _a.axe, axeName = _a.axeName, colorType = _a.colorType, radioFunc = _a.radioFunc, numberFunc = _a.numberFunc;
    var checkButtons = Object.entries(axe[colorType]).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_checkBox__WEBPACK_IMPORTED_MODULE_5__["ColorTypeCheck"], { name: key, func: radioFunc, checked: value, arg: { name: key, colorType: colorType, axe: axeName } })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "axeRange" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "head-small" }, axeName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "axeRange__list" }, checkButtons),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "axeRange__numbers" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_6__["StdNumberBox"], { name: "number", value: axe.number, max: 20, min: 0, step: 1, func: numberFunc, arg: { name: "number", colorType: colorType, axe: axeName } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_6__["StdNumberBox"], { name: "step", value: axe.step, max: 20, min: 1, step: 1, func: numberFunc, arg: { name: "step", colorType: colorType, axe: axeName } })))));
};
var CreateMain = function (props) {
    var handleColorRadio = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        var colorObj = __assign({}, props.state.createPattern);
        colorObj[arg.axe][arg.colorType][arg.name] = e.target.checked;
        props.set_Pattern(arg.axe, colorObj[arg.axe]);
    }, [props.state.createPattern]);
    var handleNumberForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        var colorObj = __assign({}, props.state.createPattern);
        colorObj[arg.axe][arg.name] = e.target.value;
        props.set_Pattern(arg.axe, colorObj[arg.axe]);
    }, [props.state.createPattern]);
    var handleColorType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
        props.set_PetternType(name === "RGB" ? "CMYK" : "RGB");
        props.set_StartPoint(name === "RGB" ? initCMYK : initRGB);
    }, [props.state.createPattern.type, props.state.createPattern.type]);
    var create = props.state.createPattern;
    var axeType = props.state.createPattern.type;
    var colorList = Object.entries(create).map(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value !== "string") {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ColorButtonForms, { axe: value, colorType: axeType, axeName: key, radioFunc: handleColorRadio, numberFunc: handleNumberForm })));
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("main", { className: "createMainForm" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "createMainForm__list" }, colorList),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_createOptions__WEBPACK_IMPORTED_MODULE_4__["default"], { colorType: props.state.createPattern.type }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "createMainForm__buttons" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_button__WEBPACK_IMPORTED_MODULE_7__["ColorTypeBtn"], { name: props.state.createPattern.type, func: handleColorType }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_JsxButton__WEBPACK_IMPORTED_MODULE_8__["HostScriptButton"], { name: "createPattern", object: { type: "createPattern", color: { data: props.state.createPattern, option: props.state.patternPoint } } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__["dispatchProps"])(CreateMain));


/***/ }),

/***/ "./js/components/create/createOptions.tsx":
/*!************************************************!*\
  !*** ./js/components/create/createOptions.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/radio */ "./js/components/parts/radio.tsx");
/* harmony import */ var _parts_textBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/textBox */ "./js/components/parts/textBox.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var CreateOptions = function (props) {
    var handleRadioButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        props.set_StartType(arg.prop, e.target.checked);
    }, [props.state.patternPoint]);
    var radios = Object.entries(props.state.patternPoint.start).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_radio__WEBPACK_IMPORTED_MODULE_4__["StdRadioButton"], { func: handleRadioButton, name: key, checked: value, arg: { prop: key } })));
    });
    var handleNumberBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, type, name, arg) {
        var color = __assign({}, props.state.patternPoint.color);
        color[arg.prop] = e.target.value;
        props.set_StartPoint(color);
    }, [props.state.patternPoint]);
    var colorForms = Object.entries(props.state.patternPoint.color).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_5__["ColorNumberBox"], { name: key, func: handleNumberBox, value: value, arg: { prop: key }, type: props.state.createPattern.type })));
    }, [props.state.patternPoint, props.state.createPattern.type]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "createOptions" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "head-smal" }, "options"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "createOptions__startpoint" }, radios),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "cleretaOptios__pattern" }, colorForms)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__["dispatchProps"])(CreateOptions));


/***/ }),

/***/ "./js/components/footer.tsx":
/*!**********************************!*\
  !*** ./js/components/footer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_JsxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/JsxButton */ "./js/components/parts/JsxButton.tsx");


var Footer = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: "footer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_JsxButton__WEBPACK_IMPORTED_MODULE_1__["SingleProcessButton"], { name: "write data", func: "writeColorData" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "developed by kawano Shuji")));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);


/***/ }),

/***/ "./js/components/header.tsx":
/*!**********************************!*\
  !*** ./js/components/header.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Header = function (_a) {
    var mode = _a.mode;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", { className: "Header" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "head-large" }, mode)));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./js/components/loading/loading.tsx":
/*!*******************************************!*\
  !*** ./js/components/loading/loading.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LoadingComp = function () {
    var strings = "loading".split("");
    var loading = strings.map(function (s) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: s }, s); });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "loading unbisible", id: "loadingPanel" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "bars" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "loading__text" }, loading))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingComp);


/***/ }),

/***/ "./js/components/parts/JsxButton.tsx":
/*!*******************************************!*\
  !*** ./js/components/parts/JsxButton.tsx ***!
  \*******************************************/
/*! exports provided: HostScriptButton, SingleProcessButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostScriptButton", function() { return HostScriptButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProcessButton", function() { return SingleProcessButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fileSystem/connectJsx */ "./js/fileSystem/connectJsx.ts");
/* harmony import */ var _fileSystem_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fileSystem/init */ "./js/fileSystem/init.js");
/* harmony import */ var _fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fileSystem/switchLoad */ "./js/fileSystem/switchLoad.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HostScriptButton = function (_a) {
    var name = _a.name, object = _a.object;
    var hostProcess = function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var hostScript, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_3__["showLoading"])();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    hostScript = new _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_1__["SendHostScript"]();
                    return [4 /*yield*/, hostScript.callHostScript(obj)];
                case 2:
                    result = _a.sent();
                    Object(_fileSystem_init__WEBPACK_IMPORTED_MODULE_2__["debugWriteFile"])("option.json", obj);
                    console.log(result);
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 5];
                case 4:
                    Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_3__["hideLoading"])();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "jsxButton hostScript", onClick: function () { return hostProcess(object); } }, name));
};
var SingleProcessButton = function (_a) {
    var name = _a.name, func = _a.func;
    var singleProcess = function (func) { return __awaiter(void 0, void 0, void 0, function () {
        var hostScript, result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_3__["showLoading"])();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    hostScript = new _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_1__["SendHostScript"]("singleProcess/" + func + ".jsx");
                    return [4 /*yield*/, hostScript.callJsx()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 5];
                case 3:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 5];
                case 4:
                    Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_3__["hideLoading"])();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "jsxButton single", onClick: function () { return singleProcess(func); } }, name));
};


/***/ }),

/***/ "./js/components/parts/button.tsx":
/*!****************************************!*\
  !*** ./js/components/parts/button.tsx ***!
  \****************************************/
/*! exports provided: StdButton, ColorTypeBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdButton", function() { return StdButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTypeBtn", function() { return ColorTypeBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StdButton = function (_a) {
    var func = _a.func, name = _a.name, arg = _a.arg, addClass = _a.addClass;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "button-std btn-" + addClass, onClick: function (e) { return func(e, arg); } }, name));
};
var ColorTypeBtn = function (_a) {
    var name = _a.name, func = _a.func;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "colorTypeBtn typeBtn-" + name, onClick: function (e) { return func(name); } }, name));
};


/***/ }),

/***/ "./js/components/parts/checkBox.tsx":
/*!******************************************!*\
  !*** ./js/components/parts/checkBox.tsx ***!
  \******************************************/
/*! exports provided: StdCheckBox, ColorTypeCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdCheckBox", function() { return StdCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTypeCheck", function() { return ColorTypeCheck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StdCheckBox = function (_a) {
    var addClass = _a.addClass, name = _a.name, func = _a.func, arg = _a.arg, checked = _a.checked;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "checkbox-std " + addClass },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "checkbox-std__input", checked: checked, onChange: function (e) { return func(e, arg); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox-std__display" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "checkbox-std__name" }, name)));
};
var ColorTypeCheck = function (_a) {
    var checked = _a.checked, name = _a.name, func = _a.func, arg = _a.arg;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "ColorTypeCheck colorRadio-" + name },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "ColorTypeCheck__input", onChange: function (e) { return func(e, arg); }, checked: checked }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ColorTypeCheck__cover" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "ColorTypeCheck_name" }, name)));
};


/***/ }),

/***/ "./js/components/parts/radio.tsx":
/*!***************************************!*\
  !*** ./js/components/parts/radio.tsx ***!
  \***************************************/
/*! exports provided: SideMenuRadio, StdRadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuRadio", function() { return SideMenuRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdRadioButton", function() { return StdRadioButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SideMenuRadio = function (_a) {
    var checked = _a.checked, name = _a.name, func = _a.func, arg = _a.arg;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "sideMenuRadio" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", className: "sideMenuRadio__input", onChange: function (e) { return func(e, arg); }, checked: checked }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sideMenuRadio__cover" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sideMenuRadio__name" }, name)));
};
var StdRadioButton = function (_a) {
    var checked = _a.checked, name = _a.name, func = _a.func, arg = _a.arg;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "stdRadio" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", className: "stdRadio__input", onChange: function (e) { return func(e, arg); }, checked: checked }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "stdRadio__box" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "stdRadio__name" }, name)));
};


/***/ }),

/***/ "./js/components/parts/textBox.tsx":
/*!*****************************************!*\
  !*** ./js/components/parts/textBox.tsx ***!
  \*****************************************/
/*! exports provided: StdTextBox, StdNumberBox, ColorNumberBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdTextBox", function() { return StdTextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdNumberBox", function() { return StdNumberBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorNumberBox", function() { return ColorNumberBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StdTextBox = function (_a) {
    var name = _a.name, func = _a.func, addClass = _a.addClass, arg = _a.arg, value = _a.value;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "textBox-std " + addClass },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "textBox-std__input", value: value, onChange: function (e) { return func(e, arg); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "textBox-std__name" }, name)));
};
var StdNumberBox = function (_a) {
    var name = _a.name, func = _a.func, addClass = _a.addClass, arg = _a.arg, value = _a.value, max = _a.max, min = _a.min, step = _a.step;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "number-std " + addClass },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "number-std__input", value: value, onChange: function (e) { return func(e, arg); }, max: max, min: min, step: step }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "number-std__name" }, name)));
};
var ColorNumberBox = function (_a) {
    var name = _a.name, func = _a.func, value = _a.value, type = _a.type, arg = _a.arg;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "number-color number-" + name },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "number-color__input ", value: value, onChange: function (e) { return func(e, type, name, arg); }, max: type === "RGB" ? 255 : 100, min: type === "RGB" ? -255 : -100, step: 1 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "number-color__name" }, name)));
};


/***/ }),

/***/ "./js/components/saveColor/saveColorMain.tsx":
/*!***************************************************!*\
  !*** ./js/components/saveColor/saveColorMain.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_textBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/textBox */ "./js/components/parts/textBox.tsx");
/* harmony import */ var _parts_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/button */ "./js/components/parts/button.tsx");
/* harmony import */ var _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fileSystem/connectJsx */ "./js/fileSystem/connectJsx.ts");
/* harmony import */ var _fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../fileSystem/switchLoad */ "./js/fileSystem/switchLoad.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};










var ColorContainer = function (_a) {
    var color = _a.color, index = _a.index, numFunc = _a.numFunc, textFunc = _a.textFunc, loadFunc = _a.loadFunc, switchFunc = _a.switchFunc;
    var pasteOnDocument = function (a, arg) { return __awaiter(void 0, void 0, void 0, function () {
        var host, result;
        return __generator(this, function (_a) {
            Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_7__["showLoading"])();
            try {
                host = new _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_6__["SendHostScript"]();
                result = host.callHostScript({ type: "pasteColor", colorObj: arg });
                console.log(result);
            }
            catch (e) {
            }
            finally {
                Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_7__["hideLoading"])();
            }
            return [2 /*return*/];
        });
    }); };
    var colorList = Object.entries(color.color).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_4__["ColorNumberBox"], { name: key, value: value, func: numFunc, type: color.type, arg: { index: index } })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "colorContainer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_textBox__WEBPACK_IMPORTED_MODULE_4__["StdTextBox"], { name: "name", value: color.name, func: textFunc, arg: { index: index } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "colorContainer__colors" }, colorList),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "colorContainer__buttons" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_button__WEBPACK_IMPORTED_MODULE_5__["StdButton"], { name: "paste", func: pasteOnDocument, arg: color, addClass: "deepblue" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_button__WEBPACK_IMPORTED_MODULE_5__["StdButton"], { name: "load color", func: loadFunc, arg: { index: index } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_button__WEBPACK_IMPORTED_MODULE_5__["StdButton"], { name: color.type, func: switchFunc, arg: { index: index, type: color.type }, addClass: color.type })))));
};
var SaveColorMain = function (props) {
    var handleNumber = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, type, name, arg) {
        var colors = __spreadArrays(props.state.saveStrage);
        console.log(colors[arg.index]);
        console.log(name);
        colors[arg.index].color[name] = e.target.value;
        props.set_StarageColor(arg.index, colors[arg.index]);
    }, [props.state.saveStrage]);
    var handleText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        var colors = __spreadArrays(props.state.saveStrage);
        colors[arg.index]["name"] = e.target.value;
        props.set_StarageColor(arg.index, colors[arg.index]);
    }, [props.state.saveStrage]);
    var loadDefaultColor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var colorObj, result, color, colors, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_7__["showLoading"])();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        colorObj = new _fileSystem_connectJsx__WEBPACK_IMPORTED_MODULE_6__["SendHostScript"]("singleProcess/loadColor.jsx");
                        return [4 /*yield*/, colorObj.callJsx()];
                    case 2:
                        result = _a.sent();
                        if (typeof result === "boolean")
                            return [2 /*return*/];
                        color = JSON.parse(result);
                        console.log(color);
                        colors = __spreadArrays(props.state.saveStrage);
                        colors[arg.index].color = color.color;
                        props.set_StarageColor(arg.index, colors[arg.index]);
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        Object(_fileSystem_switchLoad__WEBPACK_IMPORTED_MODULE_7__["hideLoading"])();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); })();
    }, [props.state.saveStrage]);
    var switchColorType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        props.set_StrageColorType(arg.index, arg.type === "CMYK" ? "RGB" : "CMYK");
    }, [props.state.saveStrage]);
    var StrageList = props.state.saveStrage.map(function (obj, index) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: index },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ColorContainer, { color: obj, index: index, numFunc: handleNumber, textFunc: handleText, loadFunc: loadDefaultColor, switchFunc: switchColorType })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("main", { className: "saveColorMain" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "saveColorMain__colorList" }, StrageList)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_1__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_2__["dispatchProps"])(SaveColorMain));


/***/ }),

/***/ "./js/components/sideMenu.tsx":
/*!************************************!*\
  !*** ./js/components/sideMenu.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var _parts_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/radio */ "./js/components/parts/radio.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var SideMenu = function (props) {
    var handleRadioButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, arg) {
        var mode = __assign({}, props.state.modeMenuList);
        Object.keys(mode).forEach(function (key) { return mode[key] = false; });
        mode[arg.prop] = e.target.checked;
        props.set_Mode(mode);
    }, [props.state]);
    var modeList = [];
    Object.entries(props.state.modeMenuList).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        modeList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_parts_radio__WEBPACK_IMPORTED_MODULE_4__["SideMenuRadio"], { func: handleRadioButton, arg: { prop: key }, checked: value, name: key })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "asideMenu" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "asideMenu__list" }, modeList)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_2__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_3__["dispatchProps"])(SideMenu));


/***/ }),

/***/ "./js/fileSystem/connectJsx.ts":
/*!*************************************!*\
  !*** ./js/fileSystem/connectJsx.ts ***!
  \*************************************/
/*! exports provided: SendHostScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendHostScript", function() { return SendHostScript; });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./js/fileSystem/init.js");

var SendHostScript = /** @class */ (function () {
    function SendHostScript(jsx, arg) {
        if (jsx === void 0) { jsx = "hostScript"; }
        this.jsx = jsx;
        this.arg = arg;
    }
    SendHostScript.prototype.callJsx = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _init_js__WEBPACK_IMPORTED_MODULE_0__["csInterface"].evalScript("$.evalFile(\"" + _init_js__WEBPACK_IMPORTED_MODULE_0__["extensionRoot"] + _this.jsx + "\")", function (o) {
                if (!o || o === "false")
                    reject(false);
                resolve(o);
            });
        });
    };
    SendHostScript.prototype.callHostScript = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _init_js__WEBPACK_IMPORTED_MODULE_0__["csInterface"].evalScript(_this.jsx + "(" + JSON.stringify(obj) + ")", function (o) {
                if (!o || o === "false") {
                    reject(false);
                }
                resolve(o);
            });
        });
    };
    return SendHostScript;
}());



/***/ }),

/***/ "./js/fileSystem/init.js":
/*!*******************************!*\
  !*** ./js/fileSystem/init.js ***!
  \*******************************/
/*! exports provided: debugWriteFile, csInterface, extensionRoot, filePath, extensionId, extFolder, appID, init, reloadEvent, resizeWindow, alertFromJSX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugWriteFile", function() { return debugWriteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csInterface", function() { return csInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionRoot", function() { return extensionRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filePath", function() { return filePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionId", function() { return extensionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extFolder", function() { return extFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appID", function() { return appID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadEvent", function() { return reloadEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertFromJSX", function() { return alertFromJSX; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
const csInterface = new CSInterface();
const appID = csInterface.getApplicationID();
const extensionId = csInterface.getExtensionID(); 
const extFolder = csInterface.getSystemPath(SystemPath.EXTENSION);
const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;

const jsxParts = `${extensionRoot}/jsxParts`;
const polyFillFolder = `${extensionRoot}/polyFill`;
const selectFolder = `${extensionRoot}/select`;
const actionFolder = `${extensionRoot}/actions`;
const mainFolder = `${extensionRoot}/mainProcess`;
const partial = `${extensionRoot}/partial`;


const readDirFiles = (path) =>{
    return new Promise((resolve,reject)=>{
        fs__WEBPACK_IMPORTED_MODULE_0__["readdir"](path,(err,files)=>{
            if(err)reject(err);
            resolve(files);
        })
    });
}

const debugWriteFile = (name,data)=>{
    return fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"](`${extensionRoot}/${name}`,JSON.stringify(data));
}

const loadJsx = async(jsxFolder) =>{
    const parts = await readDirFiles(jsxFolder).catch(e=>console.log(e));
    console.log(parts);
    const jsxes = parts.filter(f => path__WEBPACK_IMPORTED_MODULE_1__["extname"](f) === ".jsx");
    jsxes.forEach(jsx =>  csInterface.evalScript(`$.evalFile("${jsxFolder}/${jsx}")`));
}

const init = async() =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    await Promise.all([jsxParts,partial/*selectFolder,actionFolder,mainFolder*/].map(async(jsxFolder)=>{
        await loadJsx(jsxFolder);
    }));
}
const reloadEvent = () =>{
    const csInterface = new CSInterface();
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

const resizeWindow = (width,height) =>{
    csInterface.resizeContent(width,height);
}

const alertFromJSX = msg => csInterface.evalScript(`$.evalFile(alert("${msg}"))`);





/***/ }),

/***/ "./js/fileSystem/switchLoad.ts":
/*!*************************************!*\
  !*** ./js/fileSystem/switchLoad.ts ***!
  \*************************************/
/*! exports provided: showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
var showLoading = function () {
    document.getElementById("loadingPanel").classList.remove("unbisible");
};
var hideLoading = function () {
    document.getElementById("loadingPanel").classList.add("unbisible");
};


/***/ }),

/***/ "./js/main.tsx":
/*!*********************!*\
  !*** ./js/main.tsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store/store */ "./js/redux/store/store.ts");
/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/layout */ "./js/pages/layout.tsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);






var store = Object(_redux_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById("root"));


/***/ }),

/***/ "./js/pages/adjust.tsx":
/*!*****************************!*\
  !*** ./js/pages/adjust.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sideMenu */ "./js/components/sideMenu.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./js/components/header.tsx");
/* harmony import */ var _components_adjust_adjustMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/adjust/adjustMain */ "./js/components/adjust/adjustMain.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./js/components/footer.tsx");





var AdjustForm = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "AdjustContainer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_sideMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], { mode: "adjust color" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_adjust_adjustMain__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (AdjustForm);


/***/ }),

/***/ "./js/pages/create.tsx":
/*!*****************************!*\
  !*** ./js/pages/create.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sideMenu */ "./js/components/sideMenu.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./js/components/header.tsx");
/* harmony import */ var _components_create_createMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/create/createMain */ "./js/components/create/createMain.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./js/components/footer.tsx");





var CreatePattern = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "containerCreate" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_sideMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], { mode: "create pattern" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_create_createMain__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (CreatePattern);


/***/ }),

/***/ "./js/pages/layout.tsx":
/*!*****************************!*\
  !*** ./js/pages/layout.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/mapStateProps */ "./js/redux/actions/mapStateProps.ts");
/* harmony import */ var _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/mapDispatchProps */ "./js/redux/actions/mapDispatchProps.ts");
/* harmony import */ var _fileSystem_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fileSystem/init */ "./js/fileSystem/init.js");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading/loading */ "./js/components/loading/loading.tsx");
/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjust */ "./js/pages/adjust.tsx");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create */ "./js/pages/create.tsx");
/* harmony import */ var _strage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./strage */ "./js/pages/strage.tsx");










var Layout = function (props) {
    console.log(props);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        Object(_fileSystem_init__WEBPACK_IMPORTED_MODULE_4__["init"])();
        Object(_fileSystem_init__WEBPACK_IMPORTED_MODULE_4__["reloadEvent"])();
    }, []);
    var modes = Object.entries(props.state.modeMenuList).map(function (_a) {
        var key = _a[0], value = _a[1];
        return ({ key: key, value: value });
    });
    var mode = modes.find(function (m) { return m.value === true; });
    var getMode = function (mode) {
        switch (mode) {
            case "adjust":
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_adjust__WEBPACK_IMPORTED_MODULE_6__["default"], null);
            case "create":
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_create__WEBPACK_IMPORTED_MODULE_7__["default"], null);
            case "saveColor":
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_strage__WEBPACK_IMPORTED_MODULE_8__["default"], null);
            default:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_adjust__WEBPACK_IMPORTED_MODULE_6__["default"], null);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_loading__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        getMode(mode.key)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_redux_actions_mapStateProps__WEBPACK_IMPORTED_MODULE_2__["mapStateProps"], _redux_actions_mapDispatchProps__WEBPACK_IMPORTED_MODULE_3__["dispatchProps"])(Layout));


/***/ }),

/***/ "./js/pages/strage.tsx":
/*!*****************************!*\
  !*** ./js/pages/strage.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sideMenu */ "./js/components/sideMenu.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./js/components/header.tsx");
/* harmony import */ var _components_saveColor_saveColorMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/saveColor/saveColorMain */ "./js/components/saveColor/saveColorMain.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./js/components/footer.tsx");





var StrageColor = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "containerStrage" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_sideMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], { mode: "strage" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_saveColor_saveColorMain__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (StrageColor);


/***/ }),

/***/ "./js/redux/actions/app.ts":
/*!*********************************!*\
  !*** ./js/redux/actions/app.ts ***!
  \*********************************/
/*! exports provided: SetMODE, SetColorValue, SetPattern, SetPatternOptions, SetStrageColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMODE", function() { return SetMODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetColorValue", function() { return SetColorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPattern", function() { return SetPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPatternOptions", function() { return SetPatternOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStrageColor", function() { return SetStrageColor; });
var SetMODE = {
    setMode: function (mode) {
        return { type: "SETMODE", mode: mode };
    }
};
var SetColorValue = {
    setValue: function (prop, value) {
        return { type: "SETCOLORVALUR", prop: prop, value: value };
    },
    setType: function (value) {
        return { type: "SETCOLORTYPE", value: value };
    }
};
var SetPattern = {
    setAxe: function (prop, obj) {
        return { type: "SETAXE", prop: prop, obj: obj };
    },
    setPatten: function (colorType) {
        return { colorType: colorType, type: "SETPATTERNTYPE" };
    }
};
var SetPatternOptions = {
    setColor: function (color) {
        return { color: color, type: "SETPOINTCOLOR" };
    },
    setType: function (prop, value) {
        return { prop: prop, value: value, type: "SWITCHSTART" };
    }
};
var SetStrageColor = {
    setColor: function (index, colorObj) {
        return { index: index, colorObj: colorObj, type: "SETCOLORSAVE" };
    },
    switchType: function (index, colorType) {
        return { index: index, colorType: colorType, type: "SWITCHCOLORTYPE" };
    }
};


/***/ }),

/***/ "./js/redux/actions/mapDispatchProps.ts":
/*!**********************************************!*\
  !*** ./js/redux/actions/mapDispatchProps.ts ***!
  \**********************************************/
/*! exports provided: dispatchProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchProps", function() { return dispatchProps; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./js/redux/actions/app.ts");

var dispatchProps = function (dispatch) {
    return {
        set_Mode: function (mode) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetMODE"].setMode(mode)); },
        set_ColorValue: function (prop, value) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetColorValue"].setValue(prop, value)); },
        set_ColorType: function (value) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetColorValue"].setType(value)); },
        set_Pattern: function (prop, obj) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetPattern"].setAxe(prop, obj)); },
        set_PetternType: function (colorType) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetPattern"].setPatten(colorType)); },
        set_StartPoint: function (color) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetPatternOptions"].setColor(color)); },
        set_StartType: function (prop, value) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetPatternOptions"].setType(prop, value)); },
        set_StarageColor: function (index, colorObj) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetStrageColor"].setColor(index, colorObj)); },
        set_StrageColorType: function (index, colorType) { return dispatch(_app__WEBPACK_IMPORTED_MODULE_0__["SetStrageColor"].switchType(index, colorType)); }
    };
};


/***/ }),

/***/ "./js/redux/actions/mapStateProps.ts":
/*!*******************************************!*\
  !*** ./js/redux/actions/mapStateProps.ts ***!
  \*******************************************/
/*! exports provided: mapStateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateProps", function() { return mapStateProps; });
var mapStateProps = function (state) {
    return { state: state };
};


/***/ }),

/***/ "./js/redux/reducer/index.ts":
/*!***********************************!*\
  !*** ./js/redux/reducer/index.ts ***!
  \***********************************/
/*! exports provided: modeMenuList, colorValues, createPattern, patternPoint, saveStrage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeMenuList", function() { return modeMenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorValues", function() { return colorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPattern", function() { return createPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternPoint", function() { return patternPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveStrage", function() { return saveStrage; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var initModeList = {
    adjust: true,
    create: false,
    saveColor: false
};
var modeMenuList = function (state, action) {
    if (state === void 0) { state = initModeList; }
    switch (action.type) {
        case "SETMODE":
            return action.mode;
        default:
            return state;
    }
};
var initCMYK = {
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0
};
var initRGB = {
    red: 0,
    green: 0,
    blue: 0
};
var initCcolor = {
    type: "CMYK",
    color: {
        CMYK: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            black: 0
        },
        RGB: {
            red: 0,
            green: 0,
            blue: 0
        }
    }
};
var colorValues = function (state, action) {
    if (state === void 0) { state = initCcolor; }
    switch (action.type) {
        case "SETCOLORVALUR":
            var stat = __assign({}, state);
            stat.color[action.prop] = action.value;
            return stat;
        case "SETCOLORTYPE":
            var colorObj = __assign({}, state);
            colorObj.type = action.value;
            return colorObj;
        default:
            return state;
    }
};
var initPattern = {
    type: "CMYK",
    Xaxe: {
        step: 1,
        number: 5,
        CMYK: {
            cyan: false,
            magenta: false,
            yellow: false,
            black: false
        },
        RGB: {
            red: false,
            green: false,
            blue: false
        }
    },
    Yaxe: {
        step: 1,
        number: 5,
        CMYK: {
            cyan: false,
            magenta: false,
            yellow: false,
            black: false
        },
        RGB: {
            red: false,
            green: false,
            blue: false
        }
    },
    Zaxe: {
        step: 1,
        number: 5,
        CMYK: {
            cyan: false,
            magenta: false,
            yellow: false,
            black: false
        },
        RGB: {
            red: false,
            green: false,
            blue: false
        }
    }
};
var createPattern = function (state, action) {
    if (state === void 0) { state = initPattern; }
    switch (action.type) {
        case "SETAXE":
            var stat = __assign({}, state);
            stat[action.prop] = action.obj;
            return stat;
        case "SETPATTERNTYPE":
            var pattern = __assign({}, state);
            pattern.type = action.colorType;
            return pattern;
        default:
            return state;
    }
};
var initPatternPoint = {
    start: {
        selectedItem: true,
        colorForm: false
    },
    color: __assign({}, initCMYK)
};
var patternPoint = function (state, action) {
    if (state === void 0) { state = initPatternPoint; }
    switch (action.type) {
        case "SWITCHSTART":
            var stat_1 = __assign({}, state);
            Object.keys(stat_1.start).forEach(function (key) { return stat_1.start[key] = false; });
            stat_1.start[action.prop] = action.value;
            return stat_1;
        case "SETPOINTCOLOR":
            var option = __assign({}, state);
            option.color = action.color;
            return option;
        default:
            return state;
    }
};
var initColorStrage = [
    {
        type: "CMYK",
        name: "color",
        color: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            black: 0
        }
    },
    {
        type: "CMYK",
        name: "cmyk",
        color: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            black: 0
        }
    },
    {
        type: "RGB",
        name: "rgb",
        color: {
            red: 255,
            green: 255,
            blue: 255
        }
    }
];
var saveStrage = function (state, action) {
    if (state === void 0) { state = initColorStrage; }
    switch (action.type) {
        case "SETCOLORSAVE":
            var colors = __spreadArrays(state);
            colors[action.index] = action.colorObj;
            return colors;
        case "SWITCHCOLORTYPE":
            var stat = __spreadArrays(state);
            stat[action.index].type = action.colorType;
            stat[action.index].color = action.colorType === "CMYK" ? __assign({}, initCMYK) : __assign({}, initRGB);
            return stat;
        default:
            return state;
    }
};


/***/ }),

/***/ "./js/redux/store/store.ts":
/*!*********************************!*\
  !*** ./js/redux/store/store.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/index */ "./js/redux/reducer/index.ts");


var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    createPattern: _reducer_index__WEBPACK_IMPORTED_MODULE_1__["createPattern"],
    colorValues: _reducer_index__WEBPACK_IMPORTED_MODULE_1__["colorValues"],
    modeMenuList: _reducer_index__WEBPACK_IMPORTED_MODULE_1__["modeMenuList"],
    saveStrage: _reducer_index__WEBPACK_IMPORTED_MODULE_1__["saveStrage"],
    patternPoint: _reducer_index__WEBPACK_IMPORTED_MODULE_1__["patternPoint"]
});
var configStore = function () {
    var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer);
    return store;
};
/* harmony default export */ __webpack_exports__["default"] = (configStore);


/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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

/***/ })

/******/ });
//# sourceMappingURL=mainMin.js.map