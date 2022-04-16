/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n/* harmony import */ var _js_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/domain.js */ \"./src/js/domain.js\");\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\n\n //import './index.html';\n\n//# sourceURL=webpack://ajs-homeworks-2nd-work-2nd-task/./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n\nconsole.log(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _game_js__WEBPACK_IMPORTED_MODULE_0__.readGameSaving, _game_js__WEBPACK_IMPORTED_MODULE_0__.writeGameSaving);\nconst game = new Game();\ngame.start();\n\n//# sourceURL=webpack://ajs-homeworks-2nd-work-2nd-task/./src/js/app.js?");

/***/ }),

/***/ "./src/js/domain.js":
/*!**************************!*\
  !*** ./src/js/domain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Character {}\n\n;\nconst defaultCharacter = new Character();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultCharacter);\n\n//# sourceURL=webpack://ajs-homeworks-2nd-work-2nd-task/./src/js/domain.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameSavingData\": () => (/* binding */ GameSavingData),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"readGameSaving\": () => (/* binding */ readGameSaving),\n/* harmony export */   \"writeGameSaving\": () => (/* binding */ writeGameSaving)\n/* harmony export */ });\n/* harmony import */ var _domain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain.js */ \"./src/js/domain.js\");\nconst defaultGame = class Game {\n  start() {\n    console.log('game started');\n  }\n\n};\n\nconsole.log(_domain_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //const defaultGame = new Game();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultGame);\nclass GameSavingData {}\n;\nfunction readGameSaving() {}\n;\nfunction writeGameSaving() {}\n;\n\n//# sourceURL=webpack://ajs-homeworks-2nd-work-2nd-task/./src/js/game.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n\\r\\n</html>\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\r\\n    <title>Работа</title>\\r\\n    <h1 class=\\\"header__title\\\">\\r\\n        Домашнее задание к лекции «Модули»: Import/Export\\r\\n    </h1>\\r\\n\\r\\n\\r\\n</head>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ajs-homeworks-2nd-work-2nd-task/./src/index.html?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;