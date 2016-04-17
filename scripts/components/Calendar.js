import EventCollection from "./EventCollection.js";
import Event from "./Event.js";

export default class Calendar {
  // TODO: set an image for each month/year combo, or just for each month, with defaults
  // TODO: what is the multipleEvents parameter for?
  // firstDay is the first day of the week in the calendar: 1 is for "monday"
  // every eventDay must have a concrete date (day, month, year) and event title, with optional event info
  constructor(elementSelector, {year, month, day, firstDayOfWeek=1, multipleElements=false, pictureUrl, eventSettingObjects=[]}) {
      let curDate = new Date();
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

      this.render();
    // console.log(this.getFirstDayOfCalendar().getDate());
    }
  getHeaderNode() {
    let curDate = this.curDate;

    let headerNode = document.createElement("header");
    let headerPictureFrameNode = document.createElement("div");
    let headerPictureNode = document.createElement("img");
    let headerTitleNode = document.createElement("div");

    headerNode.classList.add("calendar-widget__header");
    headerTitleNode.innerHTML = curDate.getFullYear() + " - " + curDate.toLocaleString(window.locale,{month:"long"})

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
  getCalendarHeaderNode() {
    let headerNode = document.createElement("tr");
    let date = this.getFirstDayOfCalendar();

    // use the first 7 days of the calendar to render the header
    for (let i=0; i< 7; i++) {

      let thNode = document.createElement("th");
      thNode.classList.add("calendar-widget__weekday");
      thNode.innerHTML = date.toLocaleString(window.navigator.language, {weekday: 'short'});
      headerNode.appendChild(thNode);
      date.setDate(date.getDate() + 1);
    }

    return headerNode;
  }
  getCalendarNode() {
    let calendarNode = document.createElement("table");
    calendarNode.classList.add("calendar-widget__days");
    calendarNode.appendChild(this.getCalendarHeaderNode());
    calendarNode.appendChild(this.getCalendarDaysNode());

    return calendarNode;
  }
  getCalendarWeekNode(firstDay) {
    let date = new Date(firstDay);
    let calendarWeekNode = document.createElement("tr");
    calendarWeekNode.classList.add("calendar-widget__week");
    // console.log(date.toString());
    // use the first 7 days of the calendar to render the header
    for (let i=0; i< 7; i++) {
     calendarWeekNode.appendChild(this.getCalendarDayNode(date));
      date.setDate(date.getDate() + 1);
    }

    return calendarWeekNode;
  }
  getCalendarDayNode(date) {
    let calendarDayNode = document.createElement("td"),
        event = this.events.getEventFor(date);

    calendarDayNode.classList.add("calendar-widget__day");
    calendarDayNode.innerHTML = date.getDate();

    if (event){
        // console.log("an event:", event);
      calendarDayNode.title = event.title;
      // add a class
      // TODO: set this class as dynamic
      calendarDayNode.classList.add("calendar-widget__day--has-event");
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
  getLastDayOfCalendar () {
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
}
