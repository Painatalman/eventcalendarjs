import Event from "./Event.js";

export default class EventCollection {
  constructor() {
    this.events = {};
  }

  addEvent(event) {
    // TODO: check for instance of event
    const year = event.getYear(),
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
  getEventFor(dayOrDate, month, year) {
    const events = this.events;
    if (dayOrDate instanceof Date) {
      year = dayOrDate.getFullYear();
      month = dayOrDate.getMonth() + 1;
      dayOrDate = dayOrDate.getDate();
    }
    return (year in events && month in events[year] && dayOrDate in events[year][month] && events[year][month][dayOrDate]);
  }
}
