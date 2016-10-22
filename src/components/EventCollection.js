import Event from "./Event.js";

export default class EventCollection {
  constructor() {
    this.events = {};
  }

  createEvent(eventData = {day, month, year, title, description:"No description", picture, isYearly:false}) {
    return new Event(eventData);
  }

  createAndAddEvent(eventData={day, month, year, title, description:"No description", picture, isYearly:false}) {
    this.addEvent(this.createEvent(eventData));
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
      events[year][month][day] = [];
    }

    events[year][month][day].push(event);

  }
  getEventsFor(dayOrDate, month, year) {
    const events = this.events;
    if (dayOrDate instanceof Date) {
      year = dayOrDate.getFullYear();
      month = dayOrDate.getMonth() + 1;
      dayOrDate = dayOrDate.getDate();
    }

    // SHAME: repeated code for yearly events
    // TODO: create a function to get all events based on year
    let singleEvents = year in events && month in events[year] && dayOrDate in events[year][month] && events[year][month][dayOrDate] || [];
    let yearlyEvents = 'all' in events && month in events['all'] && dayOrDate in events['all'][month] && events['all'][month][dayOrDate] || [];

    return singleEvents.concat(yearlyEvents);
  }
}
