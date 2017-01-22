import Event from "./Event.js";

export default class EventCollection {
  constructor() {
    // it is actually an object that will have years as keys
    this.events = {};

    // the id for the next event to be added to the mix
    this.nextEventId = 0;
  }

  /**
   * Creates an event.
   * This does NOT add an event to the event collection
   * Hence, this event will NOT increase the nextEventId count
   *
   * @param      {Object}  eventData  The event data required for an event creation
   * @return     {Event}   { A new Event object }
   */
  createEvent(eventData = {date, day, month, year, title, description:"No description", picture, isYearly:false, hours:null, minutes: null}) {
    return new Event(eventData);
  }

  /**
   * Creates and adds an event event based on some event data.
   *
   * @param      {<type>}  eventData  The event data
   */
  createAndAddEvent(eventData={date, day, month, year, title, description:"No description", picture, isYearly:false, hours:null, minutes: null}) {
    this.addEvent(this.createEvent(Object.assign(eventData,{id: this.nextEventId})));

    // leave the nextEventId increase to the professionals... in this case, the universal addEvent method
    // this.nextEventId += 1;
  }

  /**
   * Adds an event object to the collection
   * This also provides the event with an id defined by the collection. This will REPLACE an id attribute the Event object may have, for some reason.
   * To edit an event, use the EventCollection.updateEvent method
   *
   * @param      {Event}  event   The event
   */
  addEvent(event, {keepId=false}={}) {
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

    // if there is no event id, then it was created differently
    // keepId is intended for use with updateEvent
    if (!keepId) {
      event.id = this.nextEventId;
      this.nextEventId++;
    }

    events[year][month][day].push(event);
  }
  /**
   * removes and returns an event based on an id
   * It also deletes properties with no events AFTER the event's been removed
   */
  retrieveEvent(eventId) {
    // this includes the 'all' keyword
    let yearsWithEvents = Object.keys(this.events);
    let yearsWithEventsLength = yearsWithEvents.length;

    // first, this will only get targetEvent data
    let targetEvent;

    // it's a pointer: changing this will change the whole events object
    let events = this.events;

    for (let yearIterator=0; yearIterator < yearsWithEventsLength; yearIterator++) {

      let year = yearsWithEvents[yearIterator];
      let yearObject = events[year];
      let monthsWithEvents = Object.keys(yearObject);
      let monthsWithEventsLength = monthsWithEvents.length;

      for (let monthIterator=0; monthIterator < monthsWithEventsLength; monthIterator++) {

        let month = monthsWithEvents[monthIterator];
        let monthObject = yearObject[month];
        let daysWithEvents = Object.keys(monthObject);
        let daysWithEventsLength = daysWithEvents.length;

        // SHAME: down the rabbit hole...
        for (let dayIterator=0; dayIterator < daysWithEventsLength; dayIterator++) {

          let day = daysWithEvents[dayIterator];
          let dayEventList = monthObject[day];
          let dayEventListLength = dayEventList.length;

          for (let eventIndex=0; eventIndex < dayEventListLength; eventIndex++) {
            let event = dayEventList[eventIndex];

            // FINALLY: the id check
            if (event.id === eventId) {
              targetEvent = event;

              dayEventList.splice(eventIndex, 1);

              break;
            }
          }

          if (targetEvent) {
            // the list USED TO HAVE one element only... delete the index, now!
            if (dayEventListLength === 1) {
              delete events[year][month][day];
            }

            break;
          }
        }

        if (targetEvent) {
          // must do Object.keys again...
          if (Object.keys(monthObject) < 1) {
            delete events[year][month];
          }
          break;
        }
      }

      if (targetEvent) {
        // must do Object.keys again...
        if (Object.keys(yearObject) < 1) {
          delete events[year];
        }
        break;
      }
    }

    if (targetEvent) {
      targetEvent = new Event(targetEvent);
    }

    return targetEvent;
  }
  /**
   * retrieves an event and re-adds it, forcing the id
   *
   * @param      {<type>}  eventId    The event identifier
   * @param      {<type>}  eventData  The event data
   */
  updateEvent(eventId, eventData) {
    let event = this.retrieveEvent(eventId);

    event.update(eventData);

    this.addEvent(event, {keepId: true});
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

  fetchEventsFromGoogleCalendar(calendarId, apiKey, baseUrl='https://www.googleapis.com/calendar/v3/calendars') {
    let url = `${baseUrl}/${calendarId}/${apiKey}`;

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }
}
