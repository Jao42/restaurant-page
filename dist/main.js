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

/***/ "./src/general.js":
/*!************************!*\
  !*** ./src/general.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nfunction createMenu(place, mainContent) {\n  const navMenu = document.createElement('nav');\n  const menuList = document.createElement('ul');\n\n  const menuHome = document.createElement('li');\n  const menuMenu = document.createElement('li');\n  const menuContact = document.createElement('li');\n\n  navMenu.classList.add('menu-nav');\n  menuList.classList.add('menu-list');\n  menuList.id = 'nav-menu-menu';\n\n  menuHome.textContent = 'Home';\n  menuHome.classList.add('menu-link', 'active');\n\n  menuMenu.textContent = 'Menu';\n  menuMenu.classList.add('menu-link');\n\n  menuContact.textContent = 'Contact';\n  menuContact.classList.add('menu-link');\n\n  navMenu.appendChild(menuList);\n  menuList.appendChild(menuHome);\n  menuList.appendChild(menuMenu);\n  menuList.appendChild(menuContact);\n\n  place.prepend(navMenu);\n  addListenersNavMenu(menuList, mainContent);\n\n}\n\nfunction addListenersNavMenu(menuList, pageContent) {\n\n  let list = menuList.childNodes;\n  list.forEach((i) => {\n    i.addEventListener('click', () => { \n      if (!(i.classList.contains('active'))){\n        let tabActive = document.getElementsByClassName('active')[0];\n        tabActive.classList.remove('active');\n        i.classList.add('active');\n        pageContent.innerHTML = '';\n        let tabName = i.textContent;\n        if (tabName == 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_0__.renderDishesMenu)(pageContent);\n        if (tabName == 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n          \n      }\n    })\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/general.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\nfunction createDefaultFigures(place, image, alt, caption) {\n\n  const homeDivFigure = document.createElement('div');\n  const homeFigure = document.createElement('figure');\n  const homeFigureImg = document.createElement('img');\n  const homeFigCaption = document.createElement('figcaption');\n\n  homeDivFigure.classList.add('home-image-div');\n  homeFigure.classList.add('home-image');\n  homeFigCaption.classList.add('default-figcaption');\n\n  homeFigureImg.setAttribute('src', image);\n  homeFigureImg.setAttribute('alt', alt);\n  homeFigCaption.innerHTML = caption;\n\n  homeDivFigure.appendChild(homeFigure);\n  homeFigure.appendChild(homeFigureImg);\n  homeFigure.appendChild(homeFigCaption);\n\n  place.appendChild(homeDivFigure);\n  return 0;\n  } \n\nfunction renderHome() {\n\n  const main = document.querySelector('main');\n  const pageContent = document.querySelector('.content');\n\n  const homeTitles = document.createElement('header');\n  homeTitles.classList.add('home-titles');\n  const homeH1 = document.createElement('h1');\n  homeH1.textContent = 'Ricco Ristorante';\n  const homeH2 = document.createElement('h2');\n  homeH2.textContent = 'the food may not be good, but if you buy it here you definitely proved to be rich!';\n\n  homeTitles.appendChild(homeH1);\n  homeTitles.appendChild(homeH2);\n\n  main.appendChild(homeTitles);\n\n  createDefaultFigures(\n      main,\n      './imgs/restaurant4-red.jpg', \n      'Restaurant lounge',\n      'Ricco Ristourante<br>for over 10,000 years making the most expensive food i n Italy');\n\n  createDefaultFigures(\n      main,\n      './imgs/restaurant-red.jpg', \n      'A restaurant Chief', \n      'With incredibly well-paid chefs');\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\n\nconst pageContent = document.querySelector('.content');\nconst mainContent = document.querySelector('main');\n\n(0,_general__WEBPACK_IMPORTED_MODULE_1__.default)(pageContent, mainContent);\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderDishesMenu\": () => (/* binding */ renderDishesMenu),\n/* harmony export */   \"createDish\": () => (/* binding */ createDish)\n/* harmony export */ });\nfunction renderDishesMenu(place) {\n\n  let menuDiv = document.createElement('div');\n  \n  menuDiv.classList.add('dishes-menu');\n  const menuTitle = document.createElement('h1');\n  menuTitle.classList.add('menu-title');\n  menuTitle.textContent  = 'Menu';\n  place.appendChild(menuTitle);\n\n  place.appendChild(menuDiv);\n\n  createDish(['./imgs/pasta1.jpg', 'PASTA', '$450'], menuDiv);\n  createDish(['./imgs/pasta2.jpg', 'PASTA', '$800'], menuDiv);\n  createDish(['./imgs/pasta3.jpg', 'PASTA', '$1610'], menuDiv);\n  createDish(['./imgs/pasta4.jpg', 'PASTA', '$10010'], menuDiv);\n\n}\n\nfunction createDish(dish, place) {\n\n  let menuDishDiv = document.createElement('div');\n  let dishImg = document.createElement('img');\n  let dishName = document.createElement('span');\n  let dishFruFru = document.createElement('span');\n  let dishPrice = document.createElement('span');\n  \n  dishImg.setAttribute('src', dish[0]);\n\n  menuDishDiv.classList.add('dishes-menu-item');\n  dishImg.classList.add('dish-menu-image');\n  dishName.classList.add('dish-name');\n  dishFruFru.classList.add('frufru');\n  dishPrice.classList.add('dish-price');\n  \n\n  dishName.textContent = dish[1];\n  dishPrice.textContent = dish[2];\n\n  menuDishDiv.appendChild(dishImg);\n  menuDishDiv.appendChild(dishName);\n  menuDishDiv.appendChild(dishFruFru);\n  menuDishDiv.appendChild(dishPrice);\n\n  place.appendChild(menuDishDiv);\n\n  }\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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