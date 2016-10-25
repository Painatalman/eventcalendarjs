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
  getEvents(deserialize=false) {
    if (!deserialize) {
      return this.events;
    }
    else {
        let events = this.events;
        let deserializedEvents = [];

        // SHAME: woah, triple loop of keys
        for (let year in events) {
          if (events.hasOwnProperty(year)) {
            let yearEvents = events[year];
            for (let month in yearEvents) {
              if (yearEvents.hasOwnProperty(month)) {
                let monthEvents = yearEvents[month];
                for (let day in monthEvents) {
                  if (monthEvents.hasOwnProperty(day)) {
                    let dayEvents = monthEvents[day];

                    dayEvents.forEach((event) => {
                      let newEvent = {};

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

        return deserializedEvents;
    }
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
