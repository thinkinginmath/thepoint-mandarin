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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("bquery = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: processDailyTaskQuery, processQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processDailyTaskQuery\", function() { return processDailyTaskQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processQuery\", function() { return processQuery; });\n/* If you're feeling fancy you can add interactivity \n    to your site with Javascript */\n// prints \"hi\" in the browser's dev tools console\nvar BIBLE_BOOKS = \"\\u5275\\u4E16\\u7D00 Ge\\n\\u5275 Ge\\n\\u521B\\u4E16\\u7EAA Ge\\n\\u521B Ge\\n\\n\\u51FA\\u57C3\\u53CA\\u8A18 Ex\\n\\u51FA Ex\\n\\u51FA\\u57C3\\u53CA\\u8BB0 Ex\\n\\u51FA Ex\\n\\n\\u5229\\u672A\\u8A18 Le\\n\\u5229 Le\\n\\u5229\\u672A\\u8BB0 Le\\n\\u5229 Le\\n\\n\\u6C11\\u6578\\u8A18 Nu\\n\\u6C11 Nu\\n\\u6C11\\u6570\\u8BB0 Nu\\n\\u6C11 Nu\\n\\n\\u7533\\u547D\\u8A18 De\\n\\u7533 De\\n\\u7533\\u547D\\u8BB0 De\\n\\u7533 De\\n\\n\\u7D04\\u66F8\\u4E9E\\u8A18 Jos\\n\\u66F8 Jos\\n\\u7EA6\\u4E66\\u4E9A\\u8BB0 Jos\\n\\u4E66 Jos\\n\\n\\u58EB\\u5E2B\\u8A18 Ju\\n\\u58EB Ju\\n\\u58EB\\u5E08\\u8BB0 Ju\\n\\u58EB Ju\\n\\n\\u8DEF\\u5F97\\u8A18 Ru\\n\\u5F97 Ru\\n\\u8DEF\\u5F97\\u8BB0 Ru\\n\\u5F97 Ru\\n\\n\\u6492\\u6BCD\\u8033\\u8A18\\u4E0A 1 S\\n\\u6492\\u4E0A 1 S\\n\\u6492\\u6BCD\\u8033\\u8BB0\\u4E0A 1 S\\n\\u6492\\u4E0A 1 S\\n\\n\\u6492\\u6BCD\\u8033\\u8A18\\u4E0B 2 S\\n\\u6492\\u4E0B 2 S\\n\\u6492\\u6BCD\\u8033\\u8BB0\\u4E0B 2 S\\n\\u6492\\u4E0B 2 S\\n\\n\\u5217\\u738B\\u7D00\\u4E0A 1 K\\n\\u738B\\u4E0A 1 K\\n\\u5217\\u738B\\u7EAA\\u4E0A 1 K\\n\\u738B\\u4E0A 1 K\\n\\n\\u5217\\u738B\\u7D00\\u4E0B 2 K\\n\\u738B\\u4E0B 2 K\\n\\u5217\\u738B\\u7EAA\\u4E0B 2 K\\n\\u738B\\u4E0B 2 K\\n\\n\\u6B77\\u4EE3\\u5FD7\\u4E0A 1 Chr\\n\\u4EE3\\u4E0A 1 Chr\\n\\u5386\\u4EE3\\u5FD7\\u4E0A 1 Chr\\n\\u4EE3\\u4E0A 1 Chr\\n\\n\\u6B77\\u4EE3\\u5FD7\\u4E0B 2 Chr\\n\\u4EE3\\u4E0B 2 Chr\\n\\u5386\\u4EE3\\u5FD7\\u4E0B 2 Chr\\n\\u4EE3\\u4E0B 2 Chr\\n\\n\\u4EE5\\u65AF\\u62C9\\u8A18 Ezr\\n\\u62C9 Ezr\\n\\u4EE5\\u65AF\\u62C9\\u8BB0 Ezr\\n\\u62C9 Ezr\\n\\n\\u5C3C\\u5E0C\\u7C73\\u8A18 Ne\\n\\u5C3C Ne\\n\\u5C3C\\u5E0C\\u7C73\\u8BB0 Ne\\n\\u5C3C Ne\\n\\n\\u4EE5\\u65AF\\u5E16\\u8A18 Est\\n\\u65AF Est\\n\\u4EE5\\u65AF\\u5E16\\u8BB0 Est\\n\\u65AF Est\\n\\n\\u7D04\\u4F2F\\u8A18 Job\\n\\u4F2F Job\\n\\u7EA6\\u4F2F\\u8BB0 Job\\n\\u4F2F Job\\n\\n\\u8A69\\u7BC7 Ps\\n\\u8A69 Ps\\n\\u8BD7\\u7BC7 Ps\\n\\u8BD7 Ps\\n\\n\\u7BB4\\u8A00 Pr\\n\\u7BB4 Pr\\n\\u7BB4\\u8A00 Pr\\n\\u7BB4 Pr\\n\\n\\u50B3\\u9053\\u66F8 Ec\\n\\u50B3 Ec\\n\\u4F20\\u9053\\u4E66 Ec\\n\\u4F20 Ec\\n\\n\\u96C5\\u6B4C Song\\n\\u6B4C Song\\n\\u96C5\\u6B4C Song\\n\\u6B4C Song\\n\\n\\u4EE5\\u8CFD\\u4E9E\\u66F8 Is\\n\\u8CFD Is\\n\\u4EE5\\u8D5B\\u4E9A Is\\n\\u8D5B Is\\n\\n\\u8036\\u5229\\u7C73\\u66F8 Je\\n\\u8036 Je\\n\\u8036\\u5229\\u7C73\\u4E66 Je\\n\\u8036 Je\\n\\n\\u8036\\u5229\\u7C73\\u54C0\\u6B4C La\\n\\u54C0 La\\n\\u8036\\u5229\\u7C73\\u54C0\\u6B4C La\\n\\u54C0 La\\n\\n\\u4EE5\\u897F\\u7D50\\u66F8 Ez\\n\\u7D50 Ez\\n\\u4EE5\\u897F\\u7ED3\\u4E66 Ez\\n\\u7ED3 Ez\\n\\n\\u4F46\\u4EE5\\u7406\\u66F8 Da\\n\\u4F46 Da\\n\\u4F46\\u4EE5\\u7406\\u4E66 Da\\n\\u4F46 Da\\n\\n\\u4F55\\u897F\\u963F\\u66F8 Ho\\n\\u4F55 Ho\\n\\u4F55\\u897F\\u963F\\u4E66 Ho\\n\\u4F55 Ho\\n\\n\\u7D04\\u73E5\\u66F8 Joel\\n\\u73E5 Joel\\n\\u7EA6\\u73E5\\u4E66 Joel\\n\\u73E5 Joel\\n\\n\\u963F\\u6469\\u53F8\\u66F8 Am\\n\\u6469 Am\\n\\u963F\\u6469\\u53F8\\u4E66 Am\\n\\u6469 Am\\n\\n\\u4FC4\\u5DF4\\u5E95\\u4E9E\\u66F8 Obad\\n\\u4FC4 Obad\\n\\u4FC4\\u5DF4\\u5E95\\u4E9A\\u4E66 Obad\\n\\u4FC4 Obad\\n\\n\\u7D04\\u62FF\\u66F8 Jona\\n\\u62FF Jona\\n\\u7EA6\\u62FF\\u4E66 Jona\\n\\u62FF Jona\\n\\n\\u5F4C\\u8FE6\\u66F8 Mi\\n\\u5F4C Mi\\n\\u5F25\\u8FE6\\u4E66 Mi\\n\\u5F25 Mi\\n\\n\\u90A3\\u9D3B\\u66F8 Na\\n\\u9D3B Na\\n\\u90A3\\u9E3F\\u4E66 Na\\n\\u9E3F Na\\n\\n\\u54C8\\u5DF4\\u8C37\\u66F8 Ha\\n\\u54C8 Ha\\n\\u54C8\\u5DF4\\u8C37\\u4E66 Ha\\n\\u54C8 Ha\\n\\n\\u897F\\u756A\\u96C5\\u66F8 Zeph\\n\\u756A Zeph\\n\\u897F\\u756A\\u96C5\\u4E66 Zeph\\n\\u756A Zeph\\n\\n\\u54C8\\u8A72\\u66F8 Hagg\\n\\u8A72 Hagg\\n\\u54C8\\u8BE5\\u4E66 Hagg\\n\\u8BE5 Hagg\\n\\n\\u6492\\u8FE6\\u5229\\u4E9E\\u66F8 Zech\\n\\u4E9E Zech\\n\\u6492\\u8FE6\\u5229\\u4E9A\\u4E66 Zech\\n\\u4E9A Zech\\n\\n\\u746A\\u62C9\\u57FA\\u66F8 Ma\\n\\u746A Ma\\n\\u739B\\u62C9\\u57FA\\u4E66 Ma\\n\\u739B Ma\\n\\n\\u99AC\\u592A\\u798F\\u97F3 Mt\\n\\u592A Mt\\n\\u9A6C\\u592A\\u798F\\u97F3 Mt\\n\\u592A Mt\\n\\n\\u99AC\\u53EF\\u798F\\u97F3 Mak\\n\\u53EF Mak\\n\\u9A6C\\u53EF\\u798F\\u97F3 Mak\\n\\u53EF Mak\\n\\n\\u8DEF\\u52A0\\u798F\\u97F3 Lk\\n\\u8DEF Lk\\n\\u8DEF\\u52A0\\u798F\\u97F3 Lk\\n\\u8DEF Lk\\n\\n\\u7D04\\u7FF0\\u798F\\u97F3 Jn\\n\\u7D04 Jn\\n\\u7EA6\\u7FF0\\u798F\\u97F3 Jn\\n\\u7EA6 Jn\\n\\n\\u4F7F\\u5F92\\u884C\\u50B3 Acts\\n\\u5F92 Acts\\n\\u4F7F\\u5F92\\u884C\\u4F20 Acts\\n\\u5F92 Acts\\n\\n\\u7F85\\u99AC\\u66F8 Ro\\n\\u7F85 Ro\\n\\u7F57\\u9A6C\\u4E66 Ro\\n\\u7F57 Ro\\n\\n\\u54E5\\u6797\\u591A\\u524D\\u66F8 1 Co\\n\\u6797\\u524D 1 Co\\n\\u54E5\\u6797\\u591A\\u524D\\u4E66 1 Co\\n\\u6797\\u524D 1 Co\\n\\n\\u54E5\\u6797\\u591A\\u5F8C\\u66F8 2 Co\\n\\u6797\\u5F8C 2 Co\\n\\u54E5\\u6797\\u591A\\u540E\\u4E66 2 Co\\n\\u6797\\u540E 2 Co\\n\\n\\u52A0\\u62C9\\u592A\\u66F8 Ga\\n\\u52A0 Ga\\n\\u52A0\\u62C9\\u592A\\u4E66 Ga\\n\\u52A0 Ga\\n\\n\\u4EE5\\u5F17\\u6240\\u66F8 Ep\\n\\u5F17 Ep\\n\\u4EE5\\u5F17\\u6240\\u4E66 Ep\\n\\u5F17 Ep\\n\\n\\u8153\\u7ACB\\u6BD4\\u66F8 Phl\\n\\u8153 Phl\\n\\u8153\\u7ACB\\u6BD4\\u4E66 Phl\\n\\u8153 Phl\\n\\n\\u6B4C\\u7F85\\u897F\\u66F8 Co\\n\\u897F Co\\n\\u6B4C\\u7F57\\u897F\\u4E66 Co\\n\\u897F Co\\n\\n\\u5E16\\u6492\\u7F85\\u5C3C\\u8FE6\\u524D\\u66F8 1 Th\\n\\u5E16\\u524D 1 Th\\n\\u5E16\\u6492\\u7F57\\u5C3C\\u8FE6\\u524D\\u4E66 1 Th\\n\\u5E16\\u524D 1 Th\\n\\n\\u5E16\\u6492\\u7F85\\u5C3C\\u8FE6\\u5F8C\\u66F8 2 Th\\n\\u5E16\\u5F8C 2 Th\\n\\u5E16\\u6492\\u7F57\\u5C3C\\u8FE6\\u540E\\u4E66 2 Th\\n\\u5E16\\u540E 2 Th\\n\\n\\u63D0\\u6469\\u592A\\u524D\\u66F8 1 Ti\\n\\u63D0\\u524D 1 Ti\\n\\u63D0\\u6469\\u592A\\u524D\\u4E66 1 Ti\\n\\u63D0\\u524D 1 Ti\\n\\n\\u63D0\\u6469\\u592A\\u5F8C\\u66F8 2 Ti\\n\\u63D0\\u5F8C 2 Ti\\n\\u63D0\\u6469\\u592A\\u540E\\u4E66 2 Ti\\n\\u5F1F\\u5F8C 2 Ti\\n\\n\\u63D0\\u591A\\u66F8 Tit\\n\\u591A Tit\\n\\u63D0\\u591A\\u4E66 Tit\\n\\u591A Tit\\n\\n\\u8153\\u5229\\u9580\\u66F8 Phm\\n\\u9580 Phm\\n\\u8153\\u5229\\u95E8\\u4E66 Phm\\n\\u95E8 Phm\\n\\n\\u5E0C\\u4F2F\\u4F86\\u66F8 He\\n\\u4F86 He\\n\\u5E0C\\u4F2F\\u6765\\u4E66 He\\n\\u6765 He\\n\\n\\u96C5\\u5404\\u66F8 Ja\\n\\u96C5 Ja\\n\\u96C5\\u5404\\u4E66 Ja\\n\\u96C5 Ja\\n\\n\\u5F7C\\u5F97\\u524D\\u66F8 1 Pe\\n\\u5F7C\\u524D 1 Pe\\n\\u5F7C\\u5F97\\u524D\\u4E66 1 Pe\\n\\u5F7C\\u524D 1 Pe\\n\\n\\u5F7C\\u5F97\\u5F8C\\u66F8 2 Pe\\n\\u5F7C\\u5F8C 2 Pe\\n\\u5F7C\\u5F97\\u540E\\u4E66 2 Pe\\n\\u5F7C\\u540E 2 Pe\\n\\n\\u7D04\\u7FF0\\u58F9\\u66F8 1 Jhn\\n\\u7D04\\u58F9 1 Jhn\\n\\u7EA6\\u7FF0\\u4E00\\u4E66 1 Jhn\\n\\u7EA6\\u4E00 1 Jhn\\n\\n\\u7D04\\u7FF0\\u8D30\\u66F8 2 Jhn\\n\\u7D04\\u8CB3 2 Jhn\\n\\u7EA6\\u7FF0\\u4E8C\\u4E66 2 Jhn\\n\\u7EA6\\u4E8C 2 Jhn\\n\\n\\u7D04\\u7FF0\\u53C3\\u66F8 3 Jhn\\n\\u7D04\\u53C3 3 Jhn\\n\\u7EA6\\u7FF0\\u4E09\\u4E66 3 Jhn\\n\\u7EA6\\u4E09 3 Jhn\\n\\n\\u7336\\u5927\\u66F8 Jude\\n\\u7336 Jude\\n\\u72B9\\u5927\\u4E66 Jude\\n\\u72B9 Jude\\n\\n\\u555F\\u793A\\u9304 Re\\n\\u555F Re\\n\\u542F\\u793A\\u5F55 Re\\n\\u542F Re\";\nvar MAP_BOOKNAMES = {};\n\nvar build_bookmap = function build_bookmap() {\n  var bookList = BIBLE_BOOKS.split(\"\\n\");\n\n  for (var i = 0; i < bookList.length; i++) {\n    var txt = bookList[i].trim();\n\n    if (txt) {\n      var nameVal = txt.split(/\\s+/);\n      MAP_BOOKNAMES[nameVal[0]] = nameVal.slice(1).join(\" \");\n    }\n  }\n};\n\nbuild_bookmap(); // Daily bible tasks: \n// 星期一 創世紀第13章 以賽亞書第32章\n// This line will be parsed into:\n//   day_of_week  taskA  taskB\n\nfunction processTask(task, divId) {\n  var idx_di = task.indexOf('第');\n  var book = task.substring(0, idx_di);\n  var ch = task.substring(idx_di);\n  var param = '1';\n  var re = /第\\s*([\\d-]+)/g;\n  var match = ch.match(re);\n\n  if (match) {\n    if (match[0].indexOf('第') == 0) {\n      param = match[0].substring(1);\n    } else {\n      param = match[0];\n    }\n\n    if (match.length == 2) {\n      param += ':';\n\n      if (match[1].indexOf('第') == 0) {\n        param += match[1].substring(1);\n      } else {\n        param += match[1];\n      } //console.log(\"section\", param);\n\n    }\n  }\n\n  var bookNameEng = MAP_BOOKNAMES[book];\n  fetchBibleToDiv(bookNameEng, param, divId);\n}\n\nfunction processQuery(books) {\n  // Frind the first whitespace\n  var lines = books.split('\\n');\n\n  for (var i = 0; i < lines.length; i++) {\n    var txt = lines[i];\n    txt = txt.trim();\n\n    if (txt) {\n      var pos = txt.indexOf(' ');\n      var bookName = txt.substring(0, pos);\n      var param = txt.substring(pos).trim();\n\n      if (bookName in MAP_BOOKNAMES) {\n        var divid = 'resp' + i;\n        jQuery('#day' + i).append(DAILY_DIV + txt + '</h4></div>');\n        jQuery('#day' + i).append('<div id=' + divid + '></div>');\n        var bookNameEng = MAP_BOOKNAMES[bookName];\n        fetchBibleToDiv(bookNameEng, param, '#' + divid);\n      } else {\n        console.log(\"not found \", bookName);\n      }\n    }\n  }\n}\n\nfunction fetchBibleToDiv(bookNameEng, param, divId) {\n  jQuery.ajax({\n    url: 'https://getbible.net/json',\n    dataType: 'jsonp',\n    data: 'v=cut&p=' + bookNameEng + param,\n    jsonp: 'getbible',\n    success: function success(json) {\n      // set text direction\n      // check response type\n      if (json.type == 'verse') {\n        var output = '';\n        jQuery.each(json.book, function (index, value) {\n          output += '<center><b>' + value.book_name + ' ' + value.chapter_nr + '</b></center><br/><p>';\n          jQuery.each(value.chapter, function (index, value) {\n            output += '  <small class=\"ltr\">' + value.verse_nr + '</small>  ';\n            output += value.verse;\n            output += '<br/>';\n          });\n          output += '</p>';\n        });\n        jQuery(divId).html(output);\n      } else if (json.type == 'chapter') {\n        var _output = '<center><b>' + json.book_name + ' ' + json.chapter_nr + '</b></center><br/><p>';\n\n        jQuery.each(json.chapter, function (index, value) {\n          _output += '  <small class=\"ltr\">' + value.verse_nr + '</small>  ';\n          _output += value.verse;\n          _output += '<br/>';\n        });\n        _output += '</p>';\n        jQuery(divId).html('<div>' + _output + '</div>');\n      } else if (json.type == 'book') {\n        var _output2 = '';\n        jQuery.each(json.book, function (index, value) {\n          _output2 += '<center><b>' + json.book_name + ' ' + value.chapter_nr + '</b></center><br/><p>';\n          jQuery.each(value.chapter, function (index, value) {\n            _output2 += '  <small class=\"ltr\">' + value.verse_nr + '</small>  ';\n            _output2 += value.verse;\n            _output2 += '<br/>';\n          });\n          _output2 += '</p>';\n          jQuery(divId).html('<div>' + _output2 + '</div>');\n        });\n      }\n    },\n    error: function error() {\n      jQuery(divId).html('<h2>No scripture was returned, please try again!</h2>');\n    }\n  });\n}\n\nvar DAILY_DIV = '<div class=\"alert alert-success\" role=\"alert\"> <h4 class=\"alert-heading\">';\n\nfunction processDailyTaskQuery(queryVal) {\n  event.preventDefault();\n  var weekdays = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];\n  var lines = queryVal.split(\"\\n\");\n  var tasksA = {};\n  var tasksB = {};\n\n  for (var i = 0; i < lines.length; i++) {\n    var txt = lines[i];\n    txt = txt.trim();\n\n    if (txt) {\n      var tokens = txt.split(' ');\n\n      if (tokens.length == 3) {\n        tasksA[tokens[0]] = tokens[1];\n        tasksB[tokens[0]] = tokens[2];\n      }\n    }\n  }\n\n  for (var _i = 0; _i < weekdays.length; _i++) {\n    var dw = weekdays[_i];\n    var didcontainer = '#day' + _i;\n\n    if (dw in tasksA) {\n      // Frind the first whitespace\n      var divid = 'taskA' + _i;\n      jQuery(didcontainer).append(DAILY_DIV + dw + \": \" + tasksA[dw] + '</h4></div>');\n      jQuery(didcontainer).append('<div id=' + divid + '></div>');\n      processTask(tasksA[dw], '#' + divid);\n    }\n\n    if (dw in tasksB) {\n      // Frind the first whitespace\n      var _divid = 'taskB' + _i;\n\n      jQuery(didcontainer).append(DAILY_DIV + dw + \": \" + tasksB[dw] + '</h4></div>');\n      jQuery(didcontainer).append('<div id=' + _divid + '></div>');\n      processTask(tasksB[dw], '#' + _divid);\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });