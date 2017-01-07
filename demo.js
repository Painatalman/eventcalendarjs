/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	
	// var Calendar = require('./dist/app.js');
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
	
	calendar.createAndAddEvent({
	  day: 25,
	  month: 12,
	  year: 1900,
	  isYearly: true,
	  title: "Natal"
	});
	
	calendar.createAndAddEvent({
	  day: 1,
	  month: 1,
	  year: 2017,
	  isYearly: false,
	  title: "Ano novo 2017"
	});
	
	calendar.createAndAddEvent({
	  day: 1,
	  month: 1,
	  year: 2016,
	  isYearly: true,
	  title: "Ano novo (geral)"
	}, {
	  success: function success() {
	    console.log(JSON.stringify(calendar.getEvents(true)));
	  }
	});
	
	// testing no year
	calendar.createAndAddEvent({
	  day: 1,
	  month: 11,
	  isYearly: true,
	  title: "Dia de los muertos"
	}, {
	  success: function success() {
	    console.log(JSON.stringify(calendar.getEvents(true)));
	  }
	});
	
	calendar.createAndAddEvent({
	  title: "Today day!"
	});
	
	calendar.createAndAddEvent({
	  day: 21,
	  month: 6,
	  isYearly: true,
	  year: 'all'
	});
	
	window.calendar = calendar;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventCollection = __webpack_require__(2);
	
	var _EventCollection2 = _interopRequireDefault(_EventCollection);
	
	var _Event = __webpack_require__(3);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Calendar = __webpack_require__(4);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Calendar class with some private properties, like
	 * - curDate: current date
	 */
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
	
	    // defines whether the calendar has been rendered or not
	    // it is set to true when rendered is first called
	    this.isRendered = false;
	
	    this.pictureUrl = pictureUrl;
	    // TODO: set for multiple elements
	    this.element = document.querySelector(elementSelector);
	    // TODO: set data attributes
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
	
	    // add the default class for eventCalendar to the element
	    if (!this.element.classList.contains(_Calendar2.default["calendar-widget"])) {
	      this.element.classList.add(_Calendar2.default["calendar-widget"]);
	    }
	
	    this.render();
	    // console.log(this.getFirstDayOfCalendar().getDate());
	  }
	
	  _createClass(Calendar, [{
	    key: "createAndAddEvent",
	    value: function createAndAddEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false };
	      var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { success: null, error: null };
	
	      try {
	        this.events.createAndAddEvent(eventData);
	        if (this.isRendered) {
	          // already rendered? Re-render it!
	          this.render();
	        }
	        if (callbacks && typeof callbacks.success === 'function') {
	          callbacks.success();
	        }
	      } catch (e) {
	        if (callbacks && typeof callbacks.error === 'function') {
	          callbacks.error();
	        }
	      }
	    }
	  }, {
	    key: "getEvents",
	    value: function getEvents() {
	      var deserialized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      return this.events.getEvents(deserialized);
	    }
	  }, {
	    key: "getHeaderNode",
	    value: function getHeaderNode() {
	      var curDate = this.curDate;
	
	      var headerNode = document.createElement("header");
	      var headerPictureFrameNode = document.createElement("div");
	      var headerPictureNode = document.createElement("img");
	      var headerTitleNode = document.createElement("div");
	
	      var prevNavNode = this.getCalendarNavNode(false);
	      var nextNavNode = this.getCalendarNavNode(true);
	      var titleNode = this.getCalendarTitleNode();
	
	      headerNode.classList.add(_Calendar2.default["calendar-widget__header"]);
	      headerTitleNode.appendChild(prevNavNode);
	      headerTitleNode.appendChild(titleNode);
	      headerTitleNode.appendChild(nextNavNode);
	
	      headerTitleNode.classList.add(_Calendar2.default["calendar-widget__title"]);
	
	      // picture-specific
	      if (this.pictureUrl) {
	        headerPictureFrameNode.classList.add(_Calendar2.default["calendar-widget__picture-frame"]);
	        headerPictureNode.classList.add(_Calendar2.default["calendar-widget__picture"]);
	        headerPictureNode.setAttribute("src", this.pictureUrl);
	
	        headerPictureFrameNode.appendChild(headerPictureNode);
	        headerNode.appendChild(headerPictureFrameNode);
	      }
	
	      headerNode.appendChild(headerTitleNode);
	
	      return headerNode;
	    }
	  }, {
	    key: "getCalendarTitleNode",
	    value: function getCalendarTitleNode() {
	      var titleSpan = document.createElement("span");
	
	      titleSpan.innerHTML += this.curDate.getFullYear() + " - " + this.curDate.toLocaleString(window.locale, {
	        month: "long"
	      });
	
	      return titleSpan;
	    }
	  }, {
	    key: "getCalendarNavNode",
	    value: function getCalendarNavNode() {
	      var _this2 = this;
	
	      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      var navSpan = document.createElement("span");
	      var modifierClassSuffix = isNext ? "next" : "prev";
	
	      navSpan.classList.add(_Calendar2.default["calendar-widget__nav"]);
	      navSpan.classList.add(_Calendar2.default["calendar-widget__nav--" + modifierClassSuffix]);
	
	      navSpan.addEventListener("click", function () {
	
	        _this2.setPrevNextMonth(isNext);
	      });
	
	      return navSpan;
	    }
	  }, {
	    key: "getCalendarHeaderNode",
	    value: function getCalendarHeaderNode() {
	      var headerNode = document.createElement("tr");
	      var date = this.getFirstDayOfCalendar();
	
	      // use the first 7 days of the calendar to render the header
	      for (var i = 0; i < 7; i++) {
	
	        var thNode = document.createElement("th");
	        thNode.classList.add(_Calendar2.default["calendar-widget__weekday"]);
	        thNode.innerHTML = date.toLocaleString(window.navigator.language, {
	          weekday: 'short'
	        });
	        headerNode.appendChild(thNode);
	        date.setDate(date.getDate() + 1);
	      }
	
	      return headerNode;
	    }
	  }, {
	    key: "getCalendarNode",
	    value: function getCalendarNode() {
	      var calendarNode = document.createElement("table");
	
	      calendarNode.classList.add(_Calendar2.default["calendar-widget__days"]);
	      calendarNode.appendChild(this.getCalendarHeaderNode());
	      calendarNode.appendChild(this.getCalendarDaysNode());
	
	      return calendarNode;
	    }
	  }, {
	    key: "getCalendarWeekNode",
	    value: function getCalendarWeekNode(firstDay) {
	      var date = new Date(firstDay);
	      var calendarWeekNode = document.createElement("tr");
	      calendarWeekNode.classList.add(_Calendar2.default["calendar-widget__week"]);
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
	          events = this.events.getEventsFor(date);
	
	      calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day"]);
	
	      // check if this day belongs to the currently-displayed month
	      if (this.curDate.getMonth() !== date.getMonth()) {
	        calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day--is-from-another-month"]);
	      }
	
	      calendarDayNode.innerHTML = date.getDate();
	
	      if (events.length) {
	        // console.log("an event:", event);
	        calendarDayNode.title = events.map(function (event) {
	          return event.title;
	        }).reduce(function (finalTitle, title) {
	          return finalTitle + " | " + title;
	        });
	        // add a class
	        // TODO: set this class as dynamic
	        calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day--has-event"]);
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
	
	      this.isRendered = true;
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
	  }, {
	    key: "setPrevNextMonth",
	    value: function setPrevNextMonth() {
	      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      var gap = isNext ? 1 : -1;
	
	      this.curDate.setMonth(this.curDate.getMonth() + gap);
	
	      // console.log(this.curDate.getMonth());
	
	      // re-render afterwards
	      this.render();
	    }
	  }]);
	
	  return Calendar;
	}();
	
	module.exports = Calendar;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Event = __webpack_require__(3);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventCollection = function () {
	  function EventCollection() {
	    _classCallCheck(this, EventCollection);
	
	    // it is actually an object that will have years as keys
	    this.events = {};
	  }
	
	  /**
	   * Creates an event.
	   * This does NOT add an event to the event collection
	   *
	   * @param      {Object}  eventData  The event data required for an event creation
	   * @return     {Event}   { A new Event object }
	   */
	
	
	  _createClass(EventCollection, [{
	    key: "createEvent",
	    value: function createEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false };
	
	      return new _Event2.default(eventData);
	    }
	  }, {
	    key: "createAndAddEvent",
	    value: function createAndAddEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false };
	
	      this.addEvent(this.createEvent(eventData));
	    }
	  }, {
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
	        events[year][month][day] = [];
	      }
	
	      events[year][month][day].push(event);
	    }
	  }, {
	    key: "getEvents",
	    value: function getEvents() {
	      var _this = this;
	
	      var deserialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (!deserialize) {
	        return this.events;
	      } else {
	        var _ret = function () {
	          var events = _this.events;
	          var deserializedEvents = [];
	
	          // SHAME: woah, triple loop of keys
	          for (var _year in events) {
	            if (events.hasOwnProperty(_year)) {
	              var yearEvents = events[_year];
	              for (var _month in yearEvents) {
	                if (yearEvents.hasOwnProperty(_month)) {
	                  var monthEvents = yearEvents[_month];
	                  for (var _day in monthEvents) {
	                    if (monthEvents.hasOwnProperty(_day)) {
	                      var dayEvents = monthEvents[_day];
	
	                      dayEvents.forEach(function (event) {
	                        var newEvent = {};
	
	                        Object.assign(newEvent, event, {
	                          day: event.getDay(),
	                          month: event.getMonth(),
	                          year: event.getYear()
	                        });
	
	                        delete newEvent.date;
	
	                        deserializedEvents.push(newEvent);
	                      });
	                    }
	                  }
	                }
	              }
	            }
	          }
	
	          return {
	            v: deserializedEvents
	          };
	        }();
	
	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }, {
	    key: "getEventsFor",
	    value: function getEventsFor(dayOrDate, month, year) {
	      var events = this.events;
	      if (dayOrDate instanceof Date) {
	        year = dayOrDate.getFullYear();
	        month = dayOrDate.getMonth() + 1;
	        dayOrDate = dayOrDate.getDate();
	      }
	
	      // SHAME: repeated code for yearly events
	      // TODO: create a function to get all events based on year
	      var singleEvents = year in events && month in events[year] && dayOrDate in events[year][month] && events[year][month][dayOrDate] || [];
	      var yearlyEvents = 'all' in events && month in events['all'] && dayOrDate in events['all'][month] && events['all'][month][dayOrDate] || [];
	
	      return singleEvents.concat(yearlyEvents);
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
	
	function getCurrentYear() {
	  var date = new Date();
	  return date.getFullYear();
	}
	
	function getCurrentMonth() {
	  var date = new Date();
	  return date.getMonth() + 1;
	}
	
	function getCurrentDay() {
	  var date = new Date();
	  return date.getDate();
	}
	
	/**
	 *  An event class for creating event objects that include a day, month, year, title, description and optional picture and isYearly
	 *  In case an event is yearly, it returns 'all' in the getYear method
	 */
	
	var Event = function () {
	  // WARNING: month is in the 1-12 format, not the default 0-11 one
	  function Event() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _ref$day = _ref.day;
	    var day = _ref$day === undefined ? getCurrentDay() : _ref$day;
	    var _ref$month = _ref.month;
	    var month = _ref$month === undefined ? getCurrentMonth() : _ref$month;
	    var _ref$year = _ref.year;
	    var year = _ref$year === undefined ? getCurrentYear() : _ref$year;
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? "" : _ref$title;
	    var _ref$description = _ref.description;
	    var description = _ref$description === undefined ? "" : _ref$description;
	    var picture = _ref.picture;
	    var _ref$isYearly = _ref.isYearly;
	    var isYearly = _ref$isYearly === undefined ? false : _ref$isYearly;
	
	    _classCallCheck(this, Event);
	
	    this.date = new Date();
	    // reset the hours, too
	    // TODO: set option for hours and minutes
	    this.date.setHours(0, 0, 0, 0);
	
	    // set year to current if it is 'all'... for creating a real date, nothing else
	    if (typeof year !== 'number') {
	      year = getCurrentYear();
	    }
	
	    // I guess the day should come last, for it may change everything else?
	    this.date.setYear(year);
	    this.date.setMonth(parseInt(month) - 1);
	    this.date.setDate(day);
	
	    this.isYearly = isYearly;
	    this.title = title;
	    this.description = description;
	    this.picture = picture;
	  }
	
	  _createClass(Event, [{
	    key: "getYear",
	    value: function getYear() {
	      return this.isYearly ? 'all' : this.date.getFullYear();
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
	  }, {
	    key: "getRawDate",
	    value: function getRawDate() {
	      return this.date;
	    }
	  }, {
	    key: "getDescription",
	    value: function getDescription() {
	      return this.description;
	    }
	  }, {
	    key: "getTitle",
	    value: function getTitle() {
	      return this.title;
	    }
	  }, {
	    key: "getPicture",
	    value: function getPicture() {
	      return this.picture;
	    }
	  }, {
	    key: "setPicture",
	    value: function setPicture(pictureUrl) {
	      this.picture = pictureUrl;
	    }
	  }, {
	    key: "setDescription",
	    value: function setDescription(text) {
	      this.description = text;
	    }
	  }, {
	    key: "setTitle",
	    value: function setTitle(text) {
	      this.title = text;
	    }
	  }, {
	    key: "setYear",
	    value: function setYear(year) {
	      this.date.setYear(year);
	    }
	  }, {
	    key: "setMonth",
	    value: function setMonth(month) {
	      this.date.setMonth(month - 1);
	    }
	  }, {
	    key: "setDay",
	    value: function setDay(day) {
	      this.date.setDate(day);
	    }
	  }, {
	    key: "setDate",
	    value: function setDate() {
	      var dateOrObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year };
	
	      if (dateOrObject instanceof Date) {
	        this.date = dateOrObject;
	      } else {
	        var _day = dateOrObject.day;
	        var _month = dateOrObject.month;
	        var _year = dateOrObject.year;
	
	
	        _year && this.setYear(_year);
	        _month && this.setMonth(_month);
	        _day && this.setDay(_day);
	      }
	    }
	  }, {
	    key: "isYearly",
	    value: function isYearly() {
	      return this.isYearly;
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./Calendar.css", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./Calendar.css");
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
	exports.push([module.id, "/**\n@use postcss-nested;\n**/\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n._20I9VEEji0s14PwqBp3tBd {\n  display: inline-block;\n\n  width: 100%;\n  min-width: 240px;\n  max-width: 450px;\n\n  border: 1px solid black;\n}\n\n._24lt64jWBF7GU3wrTEsjlO {\n\n}\n\n.iZ5NERKXuDEBNZf4YWTWR {\n  width: 100%;\n}\n._2yaNxRA_OKEWfQ4QJHWOEL {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n._2HigPtClDF1kAFkKvX0Tes {\n text-align: center;\n  font-size: 1.3em;\n  padding: 12px 0;\n  margin-bottom: 12px;\n  box-shadow: 0 2px 5px black;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n._2a3hDQbJCUej8fdLCnIl3u {\n  text-align: center;\n  width: 100%;\n}\n._1Kx9i6nPLghy3kISjsUO4y {\n\n  height: 35px;\n}\n._1mL5_0d8xEPxuWSNvTw-WC {\n  color: salmon;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.TEpu29FpFto3Y_gMU92uF {\n  color: lightgray;\n}\n\n._2tSmy4npf6HLp4pP0MlFXP {\n  padding: 0 32px;\n\n  cursor: pointer;\n}\n\n._1yQg1VhhWUU_lnggq6Lo_s {\n  float: left;\n}\n\n._1yQg1VhhWUU_lnggq6Lo_s::before {\n  content:\"\\25C3\";\n}\n\n.LndY2V7viDXupPQS2K9JP {\n  float: right;\n}\n\n.LndY2V7viDXupPQS2K9JP::before {\n  content:\"\\25B6\";\n}\n", ""]);
	
	// exports
	exports.locals = {
		"calendar-widget": "_20I9VEEji0s14PwqBp3tBd",
		"calendar-widget__header": "_24lt64jWBF7GU3wrTEsjlO",
		"calendar-widget__picture": "iZ5NERKXuDEBNZf4YWTWR",
		"calendar-widget__picture-frame": "_2yaNxRA_OKEWfQ4QJHWOEL",
		"calendar-widget__title": "_2HigPtClDF1kAFkKvX0Tes",
		"calendar-widget__days": "_2a3hDQbJCUej8fdLCnIl3u",
		"calendar-widget__day": "_1Kx9i6nPLghy3kISjsUO4y",
		"calendar-widget__day--has-event": "_1mL5_0d8xEPxuWSNvTw-WC",
		"calendar-widget__day--is-from-another-month": "TEpu29FpFto3Y_gMU92uF",
		"calendar-widget__nav": "_2tSmy4npf6HLp4pP0MlFXP",
		"calendar-widget__nav--prev": "_1yQg1VhhWUU_lnggq6Lo_s",
		"calendar-widget__nav--next": "LndY2V7viDXupPQS2K9JP"
	};

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
//# sourceMappingURL=demo.js.map