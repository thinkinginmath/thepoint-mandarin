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

eval("bquery = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: processDailyTaskQuery, processQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processDailyTaskQuery\", function() { return processDailyTaskQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processQuery\", function() { return processQuery; });\n/* If you're feeling fancy you can add interactivity \n    to your site with Javascript */\n\n// prints \"hi\" in the browser's dev tools console\n\nconst BIBLE_BOOKS = `創世紀 Ge\n創 Ge\n创世纪 Ge\n创 Ge\n\n出埃及記 Ex\n出 Ex\n出埃及记 Ex\n出 Ex\n\n利未記 Le\n利 Le\n利未记 Le\n利 Le\n\n民數記 Nu\n民 Nu\n民数记 Nu\n民 Nu\n\n申命記 De\n申 De\n申命记 De\n申 De\n\n約書亞記 Jos\n書 Jos\n约书亚记 Jos\n书 Jos\n\n士師記 Ju\n士 Ju\n士师记 Ju\n士 Ju\n\n路得記 Ru\n得 Ru\n路得记 Ru\n得 Ru\n\n撒母耳記上 1 S\n撒上 1 S\n撒母耳记上 1 S\n撒上 1 S\n\n撒母耳記下 2 S\n撒下 2 S\n撒母耳记下 2 S\n撒下 2 S\n\n列王紀上 1 K\n王上 1 K\n列王纪上 1 K\n王上 1 K\n\n列王紀下 2 K\n王下 2 K\n列王纪下 2 K\n王下 2 K\n\n歷代志上 1 Chr\n代上 1 Chr\n历代志上 1 Chr\n代上 1 Chr\n\n歷代志下 2 Chr\n代下 2 Chr\n历代志下 2 Chr\n代下 2 Chr\n\n以斯拉記 Ezr\n拉 Ezr\n以斯拉记 Ezr\n拉 Ezr\n\n尼希米記 Ne\n尼 Ne\n尼希米记 Ne\n尼 Ne\n\n以斯帖記 Est\n斯 Est\n以斯帖记 Est\n斯 Est\n\n約伯記 Job\n伯 Job\n约伯记 Job\n伯 Job\n\n詩篇 Ps\n詩 Ps\n诗篇 Ps\n诗 Ps\n\n箴言 Pr\n箴 Pr\n箴言 Pr\n箴 Pr\n\n傳道書 Ec\n傳 Ec\n传道书 Ec\n传 Ec\n\n雅歌 Song\n歌 Song\n雅歌 Song\n歌 Song\n\n以賽亞書 Is\n賽 Is\n以赛亚 Is\n赛 Is\n\n耶利米書 Je\n耶 Je\n耶利米书 Je\n耶 Je\n\n耶利米哀歌 La\n哀 La\n耶利米哀歌 La\n哀 La\n\n以西結書 Ez\n結 Ez\n以西结书 Ez\n结 Ez\n\n但以理書 Da\n但 Da\n但以理书 Da\n但 Da\n\n何西阿書 Ho\n何 Ho\n何西阿书 Ho\n何 Ho\n\n約珥書 Joel\n珥 Joel\n约珥书 Joel\n珥 Joel\n\n阿摩司書 Am\n摩 Am\n阿摩司书 Am\n摩 Am\n\n俄巴底亞書 Obad\n俄 Obad\n俄巴底亚书 Obad\n俄 Obad\n\n約拿書 Jona\n拿 Jona\n约拿书 Jona\n拿 Jona\n\n彌迦書 Mi\n彌 Mi\n弥迦书 Mi\n弥 Mi\n\n那鴻書 Na\n鴻 Na\n那鸿书 Na\n鸿 Na\n\n哈巴谷書 Ha\n哈 Ha\n哈巴谷书 Ha\n哈 Ha\n\n西番雅書 Zeph\n番 Zeph\n西番雅书 Zeph\n番 Zeph\n\n哈該書 Hagg\n該 Hagg\n哈该书 Hagg\n该 Hagg\n\n撒迦利亞書 Zech\n亞 Zech\n撒迦利亚书 Zech\n亚 Zech\n\n瑪拉基書 Ma\n瑪 Ma\n玛拉基书 Ma\n玛 Ma\n\n馬太福音 Mt\n太 Mt\n马太福音 Mt\n太 Mt\n\n馬可福音 Mak\n可 Mak\n马可福音 Mak\n可 Mak\n\n路加福音 Lk\n路 Lk\n路加福音 Lk\n路 Lk\n\n約翰福音 Jn\n約 Jn\n约翰福音 Jn\n约 Jn\n\n使徒行傳 Acts\n徒 Acts\n使徒行传 Acts\n徒 Acts\n\n羅馬書 Ro\n羅 Ro\n罗马书 Ro\n罗 Ro\n\n哥林多前書 1 Co\n林前 1 Co\n哥林多前书 1 Co\n林前 1 Co\n\n哥林多後書 2 Co\n林後 2 Co\n哥林多后书 2 Co\n林后 2 Co\n\n加拉太書 Ga\n加 Ga\n加拉太书 Ga\n加 Ga\n\n以弗所書 Ep\n弗 Ep\n以弗所书 Ep\n弗 Ep\n\n腓立比書 Phl\n腓 Phl\n腓立比书 Phl\n腓 Phl\n\n歌羅西書 Co\n西 Co\n歌罗西书 Co\n西 Co\n\n帖撒羅尼迦前書 1 Th\n帖前 1 Th\n帖撒罗尼迦前书 1 Th\n帖前 1 Th\n\n帖撒羅尼迦後書 2 Th\n帖後 2 Th\n帖撒罗尼迦后书 2 Th\n帖后 2 Th\n\n提摩太前書 1 Ti\n提前 1 Ti\n提摩太前书 1 Ti\n提前 1 Ti\n\n提摩太後書 2 Ti\n提後 2 Ti\n提摩太后书 2 Ti\n弟後 2 Ti\n\n提多書 Tit\n多 Tit\n提多书 Tit\n多 Tit\n\n腓利門書 Phm\n門 Phm\n腓利门书 Phm\n门 Phm\n\n希伯來書 He\n來 He\n希伯来书 He\n来 He\n\n雅各書 Ja\n雅 Ja\n雅各书 Ja\n雅 Ja\n\n彼得前書 1 Pe\n彼前 1 Pe\n彼得前书 1 Pe\n彼前 1 Pe\n\n彼得後書 2 Pe\n彼後 2 Pe\n彼得后书 2 Pe\n彼后 2 Pe\n\n約翰壹書 1 Jhn\n約壹 1 Jhn\n约翰一书 1 Jhn\n约一 1 Jhn\n\n約翰贰書 2 Jhn\n約貳 2 Jhn\n约翰二书 2 Jhn\n约二 2 Jhn\n\n約翰參書 3 Jhn\n約參 3 Jhn\n约翰三书 3 Jhn\n约三 3 Jhn\n\n猶大書 Jude\n猶 Jude\n犹大书 Jude\n犹 Jude\n\n啟示錄 Re\n啟 Re\n启示录 Re\n启 Re`\n\nconst  MAP_BOOKNAMES = {}\n\n\nconst build_bookmap = function() {\n  let bookList = BIBLE_BOOKS.split(\"\\n\");\n  for (var i = 0; i < bookList.length; i++) {\n      let txt = bookList[i].trim();\n      if (txt) {\n\t  let nameVal = txt.split(/\\s+/);\n\t  MAP_BOOKNAMES[nameVal[0]] = nameVal.slice(1).join(\" \");\n      }\n  }\n}\n\nbuild_bookmap();\n\n// Daily bible tasks: \n// 星期一 創世紀第13章 以賽亞書第32章\n// This line will be parsed into:\n//   day_of_week  taskA  taskB\n\nfunction processTask(task, divId) {\n   let idx_di = task.indexOf('第');\n   let book = task.substring(0, idx_di);\n   let ch = task.substring(idx_di);\n   let param = '1';\n      \n   let re = /第\\s*([\\d-]+)/g;\n      let match = ch.match(re);\n      if (match) {\n\t       if (match[0].indexOf('第') == 0) {\n\t          param = match[0].substring(1);\n\t       } else {\n\t          param = match[0];\n\t       }\n\n\t      if (match.length == 2) {\n\t         param += ':';\n\n\t         if (match[1].indexOf('第') == 0) {\n\t\t          param += match[1].substring(1);\n\t         } else {\n\t\t          param += match[1];\n\t         }\n\t\t  //console.log(\"section\", param);\n\t      }\n      } \n      let bookNameEng = MAP_BOOKNAMES[book];\n      fetchBibleToDiv(bookNameEng, param, divId)  \n}\n\nfunction processQuery(books) {\n    // Frind the first whitespace\n    let lines = books.split('\\n');\n    for (let i=0; i< lines.length; i++) {\n\tlet txt = lines[i];\n\ttxt = txt.trim();\n\tif (txt) {\n\t    let pos = txt.indexOf(' ');\n\t    let bookName = txt.substring(0, pos);\n\t    let param = txt.substring(pos).trim();\n\t    if (bookName in MAP_BOOKNAMES) {\n\t\tlet divid = 'resp' + i;\n\t\tjQuery('#day'+i).append(DAILY_DIV + txt + '</h4></div>');\n\t\tjQuery('#day'+i).append('<div id=' + divid +'></div>');\n\t\tlet bookNameEng = MAP_BOOKNAMES[bookName];\n\t\tfetchBibleToDiv(bookNameEng, param, '#' +divid);\n\t    } else {\n\t\tconsole.log(\"not found \", bookName);\n\t\t\n\t    }\n\t}\n    }\n}\n\nfunction fetchBibleToDiv(bookNameEng, param, divId) {\n  jQuery.ajax({\n      url:'https://getbible.net/json',\n      dataType: 'jsonp',\n      data: 'v=cut&p=' + bookNameEng + param,\n      jsonp: 'getbible',\n\n      \n      success: function(json){\n          // set text direction\n          // check response type\n\t  if (json.type == 'verse'){\n              let output = '';\n              \tjQuery.each(json.book, function(index, value) {\n                  \toutput += '<center><b>' + value.book_name +\n                      ' ' + value.chapter_nr + '</b></center><br/><p>';\n                    jQuery.each(value.chapter, function(index, value) {\n                          output += '  <small class=\"ltr\">' +value.verse_nr+ '</small>  ';\n                          output += value.verse;\n                          output += '<br/>';\n                      });\n                      output += '</p>';\n              \t});\n              jQuery(divId).html(output);\n\t      \n          } else if (json.type == 'chapter'){\n              let output = '<center><b>'+json.book_name+' '+json.chapter_nr+'</b></center><br/><p>';\n              jQuery.each(json.chapter, function(index, value) {\n                  output += '  <small class=\"ltr\">' +value.verse_nr+ '</small>  ';\n                  output += value.verse;\n                  output += '<br/>';\n              });\n              output += '</p>';\n\t            jQuery(divId).html('<div>' + output + '</div>');\n          } else if (json.type == 'book'){\n              let output = '';\n              jQuery.each(json.book, function(index, value) {\n     output += '<center><b>'+json.book_name+' '+value.chapter_nr+'</b></center><br/><p>';\n     jQuery.each(value.chapter, function(index, value) {\n     output += '  <small class=\"ltr\">' +value.verse_nr+ '</small>  ';\n     output += value.verse;\n     output += '<br/>';\n           });\n\t\t          output += '</p>';\n\t\t          jQuery(divId).html('<div>' + output + '</div>');\n          });\n\n        }\n      },\n      error:function(){\n          jQuery(divId).html('<h2>No scripture was returned, please try again!</h2>');\n       },\n  });\n}\n\nlet DAILY_DIV = '<div class=\"alert alert-success\" role=\"alert\"> <h4 class=\"alert-heading\">'\n\nfunction processDailyTaskQuery(queryVal) {\n  event.preventDefault();\n  let weekdays = ['星期一','星期二','星期三','星期四','星期五','星期六'];\n  let lines = queryVal.split(\"\\n\");\n  let tasksA = {};\n  let tasksB = {};\n    \n  for (let i=0; i< lines.length; i++) {\n\t  let txt = lines[i];\n\t  txt = txt.trim();\n\t  if (txt) {\n\t    let tokens = txt.split(' ');\n\t    if (tokens.length==3) {\n\t\t    tasksA[tokens[0]] = tokens[1];\n\t\t    tasksB[tokens[0]] = tokens[2];\n\t    }\n\t  }\n  }\n  for (let i = 0; i < weekdays.length; i++) {\n\t  let dw = weekdays[i];\n\t  let didcontainer = '#day'+i;\n\n\t  if (dw in tasksA) {\n\t    // Frind the first whitespace\n      let divid = 'taskA' + i;\n\t    jQuery(didcontainer).append(DAILY_DIV + dw + \": \" + tasksA[dw] +\n                                  '</h4></div>');\n      \n\t    jQuery(didcontainer).append('<div id=' + divid +'></div>');\n\n\t    processTask(tasksA[dw], '#' + divid);\n\t  }\n\t  if (dw in tasksB) {\n\t        // Frind the first whitespace\n\t      let divid = 'taskB' + i;\n\t      jQuery(didcontainer).append(DAILY_DIV + dw + \": \" + tasksB[dw]\n\t\t\t\t\t                          + '</h4></div>');\n\n\t      \n\t      jQuery(didcontainer).append('<div id=' + divid +'></div>');\n\n\t      processTask(tasksB[dw], '#' + divid);\n\t  }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });