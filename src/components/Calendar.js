import EventCollection from "./EventCollection.js";
import Event from "./Event.js";

import styles from './Calendar.css';

/**
 * Calendar class with some private properties, like
 * - curDate: current date
 */
class Calendar {
  // TODO: set an image for each month/year combo, or just for each month, with defaults
  // firstDay is the first day of the week in the calendar: 1 is for "monday"
  // every eventDay must have a concrete date (day, month, year) and event title, with optional event info
  constructor(elementSelectorOrNode, {
    year, month, day, firstDayOfWeek = 1, pictureUrl, pictureUrls, eventSettingObjects = []
  } = {}) {
    // today's date
    this.todayDate = new Date();
    
    // a date for the currently-displayed month
    let curDate = new Date();

    year && curDate.setYear(year);
    month && curDate.setMonth(parseInt(month) - 1);
    // set to firstDay of Month
    curDate.setDate(1);

    // defines whether the calendar has been rendered or not
    // it is set to true when rendered is first called
    this.isRendered = false;

    this.pictureUrl = pictureUrl;
    this.pictureUrls = pictureUrls;
    this.element = (elementSelectorOrNode instanceof HTMLElement) && elementSelectorOrNode || document.querySelector(elementSelectorOrNode);
    // TODO: set data attributes
    this.curDay = day;
    this.firstDayOfWeek = firstDayOfWeek || 1;

    // This is the currently-displayed date
    this.curDate = curDate;

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

    // set up an addFormNode property
    this.addEventFormNode = null;

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
  /**
   * Returns the events, either as a list or as an object
   *
   * @param      {boolean}  deserialized  The deserialized
   * @return     {<type>}   The events.
   */
  getEvents(deserialized=false) {
    return this.events.getEvents(deserialized);
  }
  hideAddEventForm(){
    this.addEventFormNode.classList.add(styles['calendar-widget__form--is-hidden']);
  }
  /**
   * Shows the form Node for adding an event
   * It is intended to be used with some parameters: year, month and day, that may be filled automatically
   *
   * @param      {<type>}  eventData  The event data
   */
  showAddEventForm(eventData = {year: undefined, month: undefined, day: undefined}) {
    let addEventFormNode = this.addEventFormNode;

    ['year', 'month', 'day'].forEach(function(parameterName){
      if (eventData[parameterName]) {
        addEventFormNode[parameterName].value = eventData[parameterName];
      }
    });

    addEventFormNode.classList.remove(styles['calendar-widget__form--is-hidden']);
  }
  /**
   * Creates and returns the Header node for the calendar
   * This includes the picture and navigator, which also involve the calendar title node and calendar nav node
   *
   * @return     {<type>}  The header node.
   */
  getHeaderNode() {
    let headerNode = document.createElement("header");
    let headerPictureFrameNode = document.createElement("div");
    // let headerPictureNode = document.createElement("img");
    let headerTitleNode = document.createElement("div");

    let prevNavNode = this.getCalendarNavNode(false);
    let nextNavNode = this.getCalendarNavNode(true);
    let titleNode = this.getCalendarTitleNode();
    let pictureUrl = this.getCalendarImageSource();

    headerNode.classList.add(styles["calendar-widget__header"]);
    headerTitleNode.appendChild(prevNavNode);
    headerTitleNode.appendChild(titleNode);
    headerTitleNode.appendChild(nextNavNode);

    headerTitleNode.classList.add(styles["calendar-widget__title"]);

    // picture-specific
    if (pictureUrl) {
      headerPictureFrameNode.classList.add(styles["calendar-widget__picture-frame"]);
      // headerPictureNode.classList.add(styles["calendar-widget__picture"]);
      headerPictureFrameNode.style.backgroundImage = `url("${pictureUrl}")`;

      // headerPictureFrameNode.appendChild(headerPictureNode);
      headerNode.appendChild(headerPictureFrameNode);
    }

    headerNode.appendChild(headerTitleNode);

    return headerNode;
  }
  /**
   * Gets the calendar title node.
   * This includes the month and year that are being rendered
   *
   * @return     {<type>}  The calendar title node.
   */
  getCalendarTitleNode() {
    let titleSpan = document.createElement("span");

    titleSpan.innerHTML += this.curDate.getFullYear() + " - " + this.curDate.toLocaleString(window.locale, {
      month: "long"
    });

    return titleSpan;
  }
  /**
   * Gets the calendar image source.
   * First, it checks for a this.pictureUrls object with either an attribute corresponding to the current year and month
   * If it does not exist, it checks for an 'all' and current month image url
   * Finally, it returns a default this.pictureUrl or this.pictureUrls.default
   */
  getCalendarImageSource() {
    let imageUrl;
    let pictureUrls = this.pictureUrls;
    let currentMonth = this.curDate.getMonth() + 1;
    let currentYear = this.curDate.getFullYear();

    if (pictureUrls 
      && pictureUrls[currentYear]
      && pictureUrls[currentYear][currentMonth]
    ) {
      imageUrl = this.pictureUrls[currentYear][currentMonth]
    } else if (pictureUrls 
      && pictureUrls['all']
      && pictureUrls['all'][currentMonth]
    ) {
      imageUrl = pictureUrls['all'][currentMonth]
    } else {
      imageUrl = pictureUrls && pictureUrls['default'] || this.pictureUrl;
    }

    return imageUrl;
  }
  /**
   * Gets a calendar navigation node, which can be used to either go to the next or previous month.
   * This is actually part of a larger navigation node
   * This is called during the rendering of the calendar header node
   *
   * @param      {(boolean|string)}  isNext  Indicates if next
   * @return     {<type>}            The calendar navigation node.
   */
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
  /**
   * This renders the TOP of the calendar day table
   * Do not confuse this with the Calendar.getHeaderNode method, which returns the main header of the calendar (picture + navigator + title)
   * In short, this is the table heading with the weekdays' names
   *
   * @return     {<type>}  The calendar header node.
   */
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
  /**
   * Gets the calendar node for the calendar table itself
   *
   * @return     {<type>}  The calendar node.
   */
  getCalendarNode() {
    let calendarNode = document.createElement("table");

    calendarNode.classList.add(styles["calendar-widget__days"]);
    calendarNode.appendChild(this.getCalendarHeaderNode());
    calendarNode.appendChild(this.getCalendarDaysNode());

    return calendarNode;
  }
  /** generates a table row for the currently-displayed month **/
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
  /**
   * Gets the calendar day node.
   * This also attaches the onclick event, which is used to show the addEventForm node, for now
   *
   * @param      {Date}  date    The date
   * @return     {<type>}  The calendar day node.
   */
  getCalendarDayNode(date) {
    let calendarDayNode = document.createElement("td"),
      events = this.events.getEventsFor(date),
      curDate = this.curDate,
      todayDate = this.todayDate;

    calendarDayNode.classList.add(styles["calendar-widget__day"]);

    // check if this day belongs to the currently-displayed month
    if (curDate.getMonth() !== date.getMonth()) {
      calendarDayNode.classList.add(styles["calendar-widget__day--is-from-another-month"]);
    }

    if (todayDate.getFullYear() === date.getFullYear() && todayDate.getDate() === date.getDate() && todayDate.getMonth() === date.getMonth()) {
        calendarDayNode.classList.add(styles["calendar-widget__day--is-current-day"]);
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

    calendarDayNode.onclick = this.showAddEventForm.bind(this, {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      day: date.getDate()
    });

    return calendarDayNode;
  }
  /**
  generate the main body for the calendar: the whole days table starting with the tbody
   **/
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
  /**
   * Gets the calendar add event form node.
   * This might be the same calendar used to edit events
   *
   * @return     {<type>}  The calendar add event form node.
   */
  getCalendarAddEventFormNode() {
    let calendarFormNode = document.createElement('form');
    let calendarReference = this;

    calendarFormNode.classList.add(styles["calendar-widget__form"]);
    calendarFormNode.classList.add(styles["calendar-widget__form--is-hidden"]);

    calendarFormNode.innerHTML = `
    <div class="${styles['calendar-widget__form-row']}">
      <input class="${styles["calendar-widget__form-input"]}" type='hidden' name='id' placeholder='title' value=''>
    </div>
    <div class="${styles['calendar-widget__form-row']}">
      <input class="${styles["calendar-widget__form-input"]}" type='text' name='title' placeholder='title'>
    </div>
    <div class="${styles["calendar-widget__form-row"]}">
      <input class="${styles["calendar-widget__form-input"]}" type='text' name='message' placeholder='message'>
    </div>
    <div class="${styles["calendar-widget__form-row"]}">
      <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-small"]}" type='number' name='year' placeholder='year' max=9999> /
      <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-small"]}" type='number' name='month' placeholder='month' min=1 max=12> /
      <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-small"]}" type='number' name='day' placeholder='day' min=1 max=31>
    </div>
    <div class="${styles["calendar-widget__form-row"]}">
      <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-small"]}" type='number' name='hours' placeholder='hours' min=0 max=23>:
      <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-small"]} " type='number' name='minutes' placeholder='minutes' min=0 max=59>
    </div>
    <div class="${styles["calendar-widget__form-row"]}">
      <label class="${styles["calendar-widget__form-label"]}">Is yearly?</label> <input class="${styles["calendar-widget__form-input"]} ${styles["calendar-widget__form-input--is-checkbox"]}" type='checkbox' name='isYearly'>
    </div>
    <div class="${styles["calendar-widget__form-row"]}">
      <input type='submit' value='submit'>
      <button type='button' data-hide-form onclick="debugger;console.log('this'); calendarFormReference.hideAddEventForm()">Hide</button>
    </div>
    `;

    // to attach an event to a button
    calendarFormNode.querySelector('[data-hide-form]').onclick = calendarReference.hideAddEventForm.bind(calendarReference);

    

    calendarFormNode.onsubmit = function(e) {
      e.preventDefault(); // prevent page refresh due to submission

      let updatedData = {
        title: this.title.value,
        message: this.message.value,
        year: parseInt(this.year.value),
        month: parseInt(this.month.value),
        day: parseInt(this.day.value),
        hours: parseInt(this.hours.value),
        minutes: parseInt(this.minutes.value),
        isYearly: this.isYearly.checked
      };

      if (this.id.value !== '') {
        calendarReference.updateEvent(this.id.value, updatedData);
      } else {
        calendarReference.createAndAddEvent(updatedData);
      }
      
    }

    return calendarFormNode;
  }
  renderDayElement(day) {
    return day + " ";
  }
  render() {
    // reset element first
    this.element.innerHTML = "";

    // update today's date
    this.todayDate = new Date();

    // create header document fragment
    let node = document.createDocumentFragment();
    this.addEventFormNode = this.getCalendarAddEventFormNode();

    node.appendChild(this.getHeaderNode());
    node.appendChild(this.getCalendarNode());
    node.appendChild(this.addEventFormNode);

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
  updateEvent(eventId, eventData) {
    this.events.updateEvent(eventId, eventData);
  }
}

module.exports = Calendar;
