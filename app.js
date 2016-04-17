/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Calendar = __webpack_require__(1);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var css = __webpack_require__(4);

	// TEST
	var eventSettingObjects = [{
	  day: 25,
	  month: 4,
	  year: 2016,
	  title: "Adoção do Riscas"
	}, {
	  day: 17,
	  month: 4,
	  year: 2016,
	  title: "Anos de um amigo com o mesmo primeiro nome"
	}, {
	  day: 13,
	  month: 4,
	  year: 2016,
	  title: "Anos de um amigo"
	}, {
	  day: 12,
	  month: 8,
	  year: 2016,
	  title: "Anos da Celina"
	}];

	var calendar = new _Calendar2.default("#app", { year: 2016, month: 4, pictureUrl: 'https://lh3.googleusercontent.com/A798ePpnjRpz5TUnrmxMYOddTo9p172jh1S03cwaEWwV3QSz-rNveC-D2G4qlGhKFXTP2_sTdWdlWkc7CdvAWFHnPAkyJUcdJ9bQvYzsxkGym3VPMiEpaH4jPVsQDzsRHsPESW8bD6-0SVExtl2TfKtekE789WELSdD31XrNgYX4p-jrft4RIkrx-zeUHogDFKb3OYOXEUxWb8rAUmU6u4mNi5JV1Te9_muN2p-LcNmnO1LH7Anr_vYcjuyr8KKPeEaNvik7MQthIPhy7idj0iXA4y4AATLSToZvCztuMedFmoui5HyTL141SvqLWA5cw9i8v74t5oYPQNCgcNNVpmNQ-4mS0gzGnm0-3sn6SkmW2_tT-QSbv5gK7S9iv9GWfh0UKquymwrQYmxeQwf4_J-aTtaItYyqcvZpBr5xQ1vM2HyLFFEmgeJVJZn3RjAWqhiCeVo8zyUEBFt2cO_B7hUouPnSWJN2Qfvgmi8Idh50-odWXaUdiHkWaU9T49BP1Jnm-zRbUZVtLij4ZnXYijYW3bdRZi5BI7TZOR88vZt0nPMUnVXV19YEu3XCAmI9hbZt=w1010-h606-no', eventSettingObjects: eventSettingObjects });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EventCollection = __webpack_require__(2);

	var _EventCollection2 = _interopRequireDefault(_EventCollection);

	var _Event = __webpack_require__(3);

	var _Event2 = _interopRequireDefault(_Event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Calendar = function () {
	  // TODO: set an image for each month/year combo, or just for each month, with defaults
	  // TODO: what is the multipleEvents parameter for?
	  // firstDay is the first day of the week in the calendar: 1 is for "monday"
	  // every eventDay must have a concrete date (day, month, year) and event title, with optional event info

	  function Calendar(elementSelector, _ref) {
	    var _this = this;

	    var year = _ref.year;
	    var month = _ref.month;
	    var day = _ref.day;
	    var _ref$firstDayOfWeek = _ref.firstDayOfWeek;
	    var firstDayOfWeek = _ref$firstDayOfWeek === undefined ? 1 : _ref$firstDayOfWeek;
	    var _ref$multipleElements = _ref.multipleElements;
	    var multipleElements = _ref$multipleElements === undefined ? false : _ref$multipleElements;
	    var pictureUrl = _ref.pictureUrl;
	    var _ref$eventSettingObje = _ref.eventSettingObjects;
	    var eventSettingObjects = _ref$eventSettingObje === undefined ? [] : _ref$eventSettingObje;

	    _classCallCheck(this, Calendar);

	    var curDate = new Date();
	    year && curDate.setYear(year);
	    month && curDate.setMonth(parseInt(month) - 1);
	    // set to firstDay of Month
	    curDate.setDate(1);

	    this.pictureUrl = pictureUrl;
	    // TODO: set for multiple elements
	    this.element = document.querySelector(elementSelector);
	    this.curDay = day;
	    this.firstDayOfWeek = firstDayOfWeek || 1;
	    this.curDate = curDate;
	    // console.log(this.curDate.toString());
	    this.events = new _EventCollection2.default();
	    /*
	     although events have a date as a property, they will be organized in the following format, for mapping purposes:
	    // { 2016: [ 1:{ 20: {title, event, picture: "..."} }, 2:{} ]}
	    */
	    eventSettingObjects.forEach(function (item) {
	      // console.log(item);
	      _this.events.addEvent(new _Event2.default(item));
	    });

	    // THE RENDERING IS THE FINAL STEP

	    this.render();
	    // console.log(this.getFirstDayOfCalendar().getDate());
	  }

	  _createClass(Calendar, [{
	    key: "getHeaderNode",
	    value: function getHeaderNode() {
	      var curDate = this.curDate;

	      var headerNode = document.createElement("header");
	      var headerPictureFrameNode = document.createElement("div");
	      var headerPictureNode = document.createElement("img");
	      var headerTitleNode = document.createElement("div");

	      headerNode.classList.add("calendar-widget__header");
	      headerTitleNode.innerHTML = curDate.getFullYear() + " - " + curDate.toLocaleString(window.locale, { month: "long" });

	      headerTitleNode.classList.add("calendar-widget__title");

	      // picture-specific
	      if (this.pictureUrl) {
	        headerPictureFrameNode.classList.add("calendar-widget__picture-frame");
	        headerPictureNode.classList.add("calendar-widget__picture");
	        headerPictureNode.setAttribute("src", this.pictureUrl);

	        headerPictureFrameNode.appendChild(headerPictureNode);
	        headerNode.appendChild(headerPictureFrameNode);
	      }

	      headerNode.appendChild(headerTitleNode);

	      return headerNode;
	    }
	  }, {
	    key: "getCalendarHeaderNode",
	    value: function getCalendarHeaderNode() {
	      var headerNode = document.createElement("tr");
	      var date = this.getFirstDayOfCalendar();

	      // use the first 7 days of the calendar to render the header
	      for (var i = 0; i < 7; i++) {

	        var thNode = document.createElement("th");
	        thNode.classList.add("calendar-widget__weekday");
	        thNode.innerHTML = date.toLocaleString(window.navigator.language, { weekday: 'short' });
	        headerNode.appendChild(thNode);
	        date.setDate(date.getDate() + 1);
	      }

	      return headerNode;
	    }
	  }, {
	    key: "getCalendarNode",
	    value: function getCalendarNode() {
	      var calendarNode = document.createElement("table");
	      calendarNode.classList.add("calendar-widget__days");
	      calendarNode.appendChild(this.getCalendarHeaderNode());
	      calendarNode.appendChild(this.getCalendarDaysNode());

	      return calendarNode;
	    }
	  }, {
	    key: "getCalendarWeekNode",
	    value: function getCalendarWeekNode(firstDay) {
	      var date = new Date(firstDay);
	      var calendarWeekNode = document.createElement("tr");
	      calendarWeekNode.classList.add("calendar-widget__week");
	      // console.log(date.toString());
	      // use the first 7 days of the calendar to render the header
	      for (var i = 0; i < 7; i++) {
	        calendarWeekNode.appendChild(this.getCalendarDayNode(date));
	        date.setDate(date.getDate() + 1);
	      }

	      return calendarWeekNode;
	    }
	  }, {
	    key: "getCalendarDayNode",
	    value: function getCalendarDayNode(date) {
	      var calendarDayNode = document.createElement("td"),
	          event = this.events.getEventFor(date);

	      calendarDayNode.classList.add("calendar-widget__day");
	      calendarDayNode.innerHTML = date.getDate();

	      if (event) {
	        // console.log("an event:", event);
	        calendarDayNode.title = event.title;
	        // add a class
	        // TODO: set this class as dynamic
	        calendarDayNode.classList.add("calendar-widget__day--has-event");
	        // TODO: set a data attribute
	      }

	      return calendarDayNode;
	    }
	  }, {
	    key: "getCalendarDaysNode",
	    value: function getCalendarDaysNode() {
	      var date = this.getFirstDayOfCalendar();
	      var lastDate = this.getLastDayOfCalendar();
	      var calendarDaysNode = document.createElement("tbody");

	      while (date <= lastDate) {
	        // render week
	        calendarDaysNode.appendChild(this.getCalendarWeekNode(date));
	        date.setDate(date.getDate() + 7);
	        // console.log("now on", date.toString());
	      }
	      // console.log(dateString);
	      return calendarDaysNode;
	    }
	  }, {
	    key: "renderDayElement",
	    value: function renderDayElement(day) {
	      return day + " ";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // reset element first
	      this.element.innerHTML = "";

	      // create header document fragment
	      var node = document.createDocumentFragment();

	      node.appendChild(this.getHeaderNode());
	      node.appendChild(this.getCalendarNode());

	      this.element.appendChild(node);
	    }
	  }, {
	    key: "getLastDayOfMonth",
	    value: function getLastDayOfMonth() {
	      var curDate = this.curDate;
	      var curMonth = curDate.getMonth();
	      var nextMonth = curMonth + 1 % 12;

	      var lastDayOfMonth = new Date(curDate);
	      lastDayOfMonth.setMonth(nextMonth);
	      lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);

	      return lastDayOfMonth;
	    }
	  }, {
	    key: "getFirstDayOfCalendar",
	    value: function getFirstDayOfCalendar() {
	      // determine offset
	      var offset = this.curDate.getDay() - this.firstDayOfWeek;
	      if (offset < 0) offset += 7;
	      var firstDay = new Date(this.curDate);
	      firstDay.setDate(firstDay.getDate() - offset);
	      // console.log(firstDay.toString());
	      return firstDay;
	    }
	  }, {
	    key: "getLastDayOfCalendar",
	    value: function getLastDayOfCalendar() {
	      var lastDayOfMonth = this.getLastDayOfMonth();
	      var lastDayOfWeek = (this.firstDayOfWeek + 6) % 7;
	      // console.log(lastDayOfMonth.toString());
	      var offset = lastDayOfWeek - lastDayOfMonth.getDay();
	      if (offset < 0) {
	        offset += 7;
	      }

	      var lastDate = new Date(lastDayOfMonth);
	      lastDate.setDate(lastDate.getDate() + offset);
	      // console.log(lastDate.toString());
	      return lastDate;
	    }
	  }]);

	  return Calendar;
	}();

	exports.default = Calendar;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Event = __webpack_require__(3);

	var _Event2 = _interopRequireDefault(_Event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventCollection = function () {
	  function EventCollection() {
	    _classCallCheck(this, EventCollection);

	    this.events = {};
	  }

	  _createClass(EventCollection, [{
	    key: "addEvent",
	    value: function addEvent(event) {
	      // TODO: check for instance of event
	      var year = event.getYear(),
	          month = event.getMonth(),
	          day = event.getDay(),
	          events = this.events;
	      if (!(year in events)) {
	        events[year] = {};
	      }
	      if (!(month in events[year])) {
	        events[year][month] = {};
	      }
	      if (!(day in events[year][month])) {
	        events[year][month][day] = {};
	      }

	      events[year][month][day] = event;
	    }
	  }, {
	    key: "getEventFor",
	    value: function getEventFor(dayOrDate, month, year) {
	      var events = this.events;
	      if (dayOrDate instanceof Date) {
	        year = dayOrDate.getFullYear();
	        month = dayOrDate.getMonth() + 1;
	        dayOrDate = dayOrDate.getDate();
	      }
	      return year in events && month in events[year] && dayOrDate in events[year][month] && events[year][month][dayOrDate];
	    }
	  }]);

	  return EventCollection;
	}();

	exports.default = EventCollection;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Event = function () {
	  // WARNING: month is in the 1-12 format, not the default 0-11 one

	  function Event(_ref) {
	    var day = _ref.day;
	    var month = _ref.month;
	    var year = _ref.year;
	    var title = _ref.title;
	    var _ref$description = _ref.description;
	    var description = _ref$description === undefined ? "No description" : _ref$description;
	    var picture = _ref.picture;

	    _classCallCheck(this, Event);

	    this.date = new Date();
	    var date = this.date;
	    date.setDate(day);
	    date.setMonth(parseInt(month) - 1);
	    date.setYear(year);

	    this.title = title;
	    this.description = description;
	    this.picture = picture;
	  }

	  _createClass(Event, [{
	    key: "getYear",
	    value: function getYear() {
	      return this.date.getFullYear();
	    }
	  }, {
	    key: "getMonth",
	    value: function getMonth() {
	      return this.date.getMonth() + 1;
	    }
	  }, {
	    key: "getDay",
	    value: function getDay() {
	      return this.date.getDate();
	    }
	  }]);

	  return Event;
	}();

	exports.default = Event;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./app.post.css", function () {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./app.post.css");
				if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function () {
			update();
		});
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@use postcss-nested;\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.calendar-widget {\n  display: inline-block;\n  \n  width: 100%;\n  min-width: 240px;\n  max-width: 450px;\n  \n  border: 1px solid black;\n}\n\n.calendar-widget__picture { \n  width: 100%;\n}\n.calendar-widget__picture-frame {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.calendar-widget__title {\n text-align: center;\n  font-size: 1.3em;\n  padding: 12px 0;\n  margin-bottom: 12px;\n  box-shadow: 0 2px 5px black;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.calendar-widget__days {\n  text-align: center;\n  width: 100%;\n}\n.calendar-widget__day {\n\n  height: 35px;\n}\n.calendar-widget__day--has-event {\n  color: salmon;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: underline;\n}", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
