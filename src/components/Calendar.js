import EventCollection from "./EventCollection.js";
import Event from "./Event.js";

import styles from './Calendar.css';

/**
 * Calendar class with some private properties, like
 * - curDate: current date
 */
class Calendar {
  // TODO: set an image for each month/year combo, or just for each month, with defaults
  // TODO: what is the multipleEvents parameter for?
  // firstDay is the first day of the week in the calendar: 1 is for "monday"
  // every eventDay must have a concrete date (day, month, year) and event title, with optional event info
  constructor(elementSelector, {
    year, month, day, firstDayOfWeek = 1, multipleElements = false, pictureUrl, eventSettingObjects = []
  } = {}) {
    let curDate = new Date();
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
    this.events = new EventCollection();
    /*
     although events have a date as a property, they will be organized in the following format, for mapping purposes:
    // { 2016: [ 1:{ 20: {title, event, picture: "..."} }, 2:{} ]}
    */
    eventSettingObjects.forEach((item) => {
      // console.log(item);
      this.events.addEvent(new Event(item));
    });


    // THE RENDERING IS THE FINAL STEP

    // add the default class for eventCalendar to the element
    if (!this.element.classList.contains(styles["calendar-widget"])) {
      this.element.classList.add(styles["calendar-widget"]);
    }

    this.render();
    // console.log(this.getFirstDayOfCalendar().getDate());
  }

  createAndAddEvent(eventData={day, month, year, title, description:"No description", picture, isYearly:false}, callbacks={success: null, error: null}) {
    try {
      this.events.createAndAddEvent(eventData);
      if (this.isRendered) {
        // already rendered? Re-render it!
        this.render();
      }
      if (callbacks && typeof(callbacks.success) === 'function'){
          callbacks.success();
      }
    } catch (e) {
      if (callbacks && typeof(callbacks.error) === 'function'){ callbacks.error();}
    }
  }
  getEvents(deserialized=false) {
    return this.events.getEvents(deserialized);
  }
  getHeaderNode() {
    let curDate = this.curDate;

    let headerNode = document.createElement("header");
    let headerPictureFrameNode = document.createElement("div");
    let headerPictureNode = document.createElement("img");
    let headerTitleNode = document.createElement("div");

    let prevNavNode = this.getCalendarNavNode(false);
    let nextNavNode = this.getCalendarNavNode(true);
    let titleNode = this.getCalendarTitleNode();

    headerNode.classList.add(styles["calendar-widget__header"]);
    headerTitleNode.appendChild(prevNavNode);
    headerTitleNode.appendChild(titleNode);
    headerTitleNode.appendChild(nextNavNode);

    headerTitleNode.classList.add(styles["calendar-widget__title"]);

    // picture-specific
    if (this.pictureUrl) {
      headerPictureFrameNode.classList.add(styles["calendar-widget__picture-frame"]);
      headerPictureNode.classList.add(styles["calendar-widget__picture"]);
      headerPictureNode.setAttribute("src", this.pictureUrl);

      headerPictureFrameNode.appendChild(headerPictureNode);
      headerNode.appendChild(headerPictureFrameNode);
    }

    headerNode.appendChild(headerTitleNode);

    return headerNode;
  }
  getCalendarTitleNode() {
    let titleSpan = document.createElement("span");

    titleSpan.innerHTML += this.curDate.getFullYear() + " - " + this.curDate.toLocaleString(window.locale, {
      month: "long"
    });

    return titleSpan;
  }
  getCalendarNavNode(isNext = true) {
    let navSpan = document.createElement("span");
    let modifierClassSuffix = isNext ? "next" : "prev";

    navSpan.classList.add(styles["calendar-widget__nav"]);
    navSpan.classList.add(styles["calendar-widget__nav--" + modifierClassSuffix]);

    navSpan.addEventListener("click", () => {

      this.setPrevNextMonth(isNext);
    });

    return navSpan;
  }
  getCalendarHeaderNode() {
    let headerNode = document.createElement("tr");
    let date = this.getFirstDayOfCalendar();

    // use the first 7 days of the calendar to render the header
    for (let i = 0; i < 7; i++) {

      let thNode = document.createElement("th");
      thNode.classList.add(styles["calendar-widget__weekday"]);
      thNode.innerHTML = date.toLocaleString(window.navigator.language, {
        weekday: 'short'
      });
      headerNode.appendChild(thNode);
      date.setDate(date.getDate() + 1);
    }

    return headerNode;
  }
  getCalendarNode() {
    let calendarNode = document.createElement("table");

    calendarNode.classList.add(styles["calendar-widget__days"]);
    calendarNode.appendChild(this.getCalendarHeaderNode());
    calendarNode.appendChild(this.getCalendarDaysNode());

    return calendarNode;
  }
  getCalendarWeekNode(firstDay) {
    let date = new Date(firstDay);
    let calendarWeekNode = document.createElement("tr");
    calendarWeekNode.classList.add(styles["calendar-widget__week"]);
    // console.log(date.toString());
    // use the first 7 days of the calendar to render the header
    for (let i = 0; i < 7; i++) {
      calendarWeekNode.appendChild(this.getCalendarDayNode(date));
      date.setDate(date.getDate() + 1);
    }

    return calendarWeekNode;
  }
  getCalendarDayNode(date) {
    let calendarDayNode = document.createElement("td"),
      events = this.events.getEventsFor(date);

    calendarDayNode.classList.add(styles["calendar-widget__day"]);

    // check if this day belongs to the currently-displayed month
    if (this.curDate.getMonth() !== date.getMonth()) {
      calendarDayNode.classList.add(styles["calendar-widget__day--is-from-another-month"]);
    }

    calendarDayNode.innerHTML = date.getDate();

    if (events.length) {
      // console.log("an event:", event);
      calendarDayNode.title = events.map(function(event){return event.title}).reduce(function(finalTitle, title){
        return `${finalTitle} | ${title}`;
      });
      // add a class
      // TODO: set this class as dynamic
      calendarDayNode.classList.add(styles["calendar-widget__day--has-event"]);
      // TODO: set a data attribute
    }

    return calendarDayNode;
  }
  getCalendarDaysNode() {
    let date = this.getFirstDayOfCalendar();
    let lastDate = this.getLastDayOfCalendar();
    let calendarDaysNode = document.createElement("tbody");

    while (date <= lastDate) {
      // render week
      calendarDaysNode.appendChild(this.getCalendarWeekNode(date));
      date.setDate(date.getDate() + 7);
      // console.log("now on", date.toString());
    }
    // console.log(dateString);
    return calendarDaysNode;
  }
  renderDayElement(day) {
    return day + " ";
  }
  render() {
    // reset element first
    this.element.innerHTML = "";

    // create header document fragment
    let node = document.createDocumentFragment();

    node.appendChild(this.getHeaderNode());
    node.appendChild(this.getCalendarNode());

    this.element.appendChild(node);

    this.isRendered = true;
  }
  getLastDayOfMonth() {
    let curDate = this.curDate;
    let curMonth = curDate.getMonth();
    let nextMonth = curMonth + 1 % 12;

    let lastDayOfMonth = new Date(curDate);
    lastDayOfMonth.setMonth(nextMonth);
    lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);

    return lastDayOfMonth;
  }
  getFirstDayOfCalendar() {
    // determine offset
    let offset = this.curDate.getDay() - this.firstDayOfWeek;
    if (offset < 0) offset += 7;
    let firstDay = new Date(this.curDate);
    firstDay.setDate(firstDay.getDate() - offset);
    // console.log(firstDay.toString());
    return firstDay;
  }
  getLastDayOfCalendar() {
    let lastDayOfMonth = this.getLastDayOfMonth();
    let lastDayOfWeek = (this.firstDayOfWeek + 6) % 7;
    // console.log(lastDayOfMonth.toString());
    let offset = lastDayOfWeek - lastDayOfMonth.getDay();
    if (offset < 0) {
      offset += 7;
    }

    var lastDate = new Date(lastDayOfMonth);
    lastDate.setDate(lastDate.getDate() + offset);
    // console.log(lastDate.toString());
    return lastDate;
  }
  setPrevNextMonth(isNext = true) {
    let gap = isNext ? 1 : -1;

    this.curDate.setMonth(this.curDate.getMonth() + gap);

    // console.log(this.curDate.getMonth());

    // re-render afterwards
    this.render();
  }
}

module.exports = Calendar;
