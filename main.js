/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("  function createDefaultFigures(place, image, alt, caption) {\n\n    const homeDivFigure = document.createElement('div');\n    const homeFigure = document.createElement('figure');\n    const homeFigureImg = document.createElement('img');\n    const homeFigCaption = document.createElement('figcaption');\n\n    homeDivFigure.classList.add('home-image-div');\n    homeFigure.classList.add('home-image');\n    homeFigCaption.classList.add('default-figcaption');\n\n    homeFigureImg.setAttribute('src', image);\n    homeFigureImg.setAttribute('alt', alt);\n    homeFigCaption.innerHTML = caption;\n\n    homeDivFigure.appendChild(homeFigure);\n    homeFigure.appendChild(homeFigureImg);\n    homeFigure.appendChild(homeFigCaption);\n\n    place.appendChild(homeDivFigure);\n    return 0;\n  } \n\n\nconst pageContent = document.querySelector('.home-content');\nconst menuButton = document.querySelector('.menu-button');\n\ncreateDefaultFigures(\n    pageContent,\n    './imgs/restaurant4-red.jpg', \n    'Restaurant lounge',\n    'Ricco Ristourante<br>for over 10,000 years making the most expensive food in Italy')\n\ncreateDefaultFigures(\n    pageContent,\n    './imgs/restaurant-red.jpg', \n    'A restaurant Chief', \n    'With incredibly well-paid chefs');\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;