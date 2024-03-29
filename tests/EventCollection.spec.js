// Import chai.
var expect = require('chai')
  .expect,
  path = require('path');

require('mocha-testcheck')
  .install();

import EventCollection from "../src/components/EventCollection.js";
import Event from "../src/components/Event.js";

let anEvent = new Event({});
let anEventCollection = new EventCollection({});
let currentDate = new Date();

beforeEach(function() {
  anEventCollection = new EventCollection();
  currentDate = new Date();
});

describe('Event Collection Object initialiation', function() {
  describe('When initialized with no specific parameters', function() {
    it('should be callable without parameters', function() {
      expect(anEventCollection)
        .to.not.be.undefined;
    });

    it('should be callable with an empty object as parameter', function() {
      let anotherEventCollection = new EventCollection({});

      expect(anotherEventCollection)
        .to.not.be.undefined;
    });

  });
});

describe('Event Collection getEvents method', function() {
  it('should return an empty object, when initialized with no events', function() {
    expect(anEventCollection.getEvents())
      .to.deep.equal({});
  });

  it('should return an empty array, when initialized with no events and deserialized set to true', function() {
    expect(anEventCollection.getEvents(true))
      .to.deep.equal([]);
  });
});

describe('Event Collection createAndAddEvent method', function() {
  it('should create and add an event, when provided options, similar to an event added in raw', function() {
    let eventDay = 24,
      eventMonth = 12,
      eventYear = 2014;

    let eventSettings = { day: eventDay, month: eventMonth, year: eventYear, title: "Christmas Eve", description: "A Christmas Eve Calendar", isYearly: false };

    let anEvent = new Event(eventSettings);

    anEventCollection.createAndAddEvent(eventSettings);

    let collectionEvents = anEventCollection.getEvents();

    // a mover verbose expect
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: anEvent.getRawDate(),
              title: anEvent.getTitle(),
              id: 0,
              hours: 0,
              minutes: 0,
              description: anEvent.getDescription(),
              picture: anEvent.getPicture(),
              isYearly: false
            }]
          }
        }
      });

    // another approach, more object-like
    expect(collectionEvents[eventYear][eventMonth][eventDay][0]).to.deep.equal(Object.assign(anEvent, { id: 0 }));
  });

  // WARNING: this test tests too much. Make smaller tests first
  it('should allow for adding multiple events with the same details, with both of them ending up with different ids', function() {

    let eventDay = 24,
      eventMonth = 12,
      eventYear = 2014,
      eventHours = 11,
      eventMinutes = 11,
      eventTitle = "Christmas Eve",
      eventDescription = "A Christmas Eve Calendar";

    let eventSettings = { day: eventDay, month: eventMonth, year: eventYear, title: eventTitle, description: eventDescription, isYearly: false, hours: eventHours, minutes: eventMinutes };

    let anEvent = new Event(eventSettings);

    let eventSettings2 = Object.assign({}, eventSettings, { month: 1, year: 2015, day: 12, minutes: 12, picture: 'http://placekitten.com/220/300', title: "A different event", description: "A different description" });

    let eventSettings3 = Object.assign({}, eventSettings, { isYearly: true, picture: 'http://placekitten.com/220/300', day: 25, title: "Actual Yearly Christmas", description: "Actual Yearly Christmas" });

    let eventSettings4 = Object.assign({}, eventSettings, { day: 26 });

    let eventSettings5 = Object.assign({}, eventSettings, { day: 12, year: 2015, month: 3 });

    // create an event with first settings
    anEventCollection.createAndAddEvent(eventSettings);
    // create an event just like the previous one
    anEventCollection.createAndAddEvent(eventSettings);
    // a new event, with the event setting 2
    anEventCollection.createAndAddEvent(eventSettings2);
    // a new event, with event setting 3
    anEventCollection.createAndAddEvent(eventSettings3);
    // a new event, with event setting 4
    anEventCollection.createAndAddEvent(eventSettings4);
    // a new event, with event setting 5
    anEventCollection.createAndAddEvent(eventSettings5);

    let collectionEvents = anEventCollection.getEvents();

    // a mover verbose expect
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: anEvent.getRawDate(),
              title: anEvent.getTitle(),
              id: 0,
              hours: 11,
              minutes: 11,
              description: anEvent.getDescription(),
              picture: anEvent.getPicture(),
              isYearly: false
            }, {
              date: anEvent.getRawDate(),
              title: anEvent.getTitle(),
              id: 1,
              hours: 11,
              minutes: 11,
              description: anEvent.getDescription(),
              picture: anEvent.getPicture(),
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: anEvent.getTitle(),
              id: 4,
              hours: 11,
              minutes: 11,
              description: anEvent.getDescription(),
              picture: anEvent.getPicture(),
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 3,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        }
      });
  })
});

describe('Event Collection retrieveEvent method', function() {
  beforeEach(function() {

    let eventDay = 24,
      eventMonth = 12,
      eventYear = 2014,
      eventHours = 11,
      eventMinutes = 11,
      eventTitle = "Christmas Eve",
      eventDescription = "A Christmas Eve Calendar";

    let eventSettings = { day: eventDay, month: eventMonth, year: eventYear, title: eventTitle, description: eventDescription, isYearly: false, hours: eventHours, minutes: eventMinutes };

    anEvent = new Event(eventSettings);

    let eventSettings2 = Object.assign({}, eventSettings, { month: 1, year: 2015, day: 12, minutes: 12, picture: 'http://placekitten.com/220/300', title: "A different event", description: "A different description" });

    let eventSettings3 = Object.assign({}, eventSettings, { isYearly: true, picture: 'http://placekitten.com/220/300', day: 25, title: "Actual Yearly Christmas", description: "Actual Yearly Christmas" });

    let eventSettings4 = Object.assign({}, eventSettings, { day: 26 });

    let eventSettings5 = Object.assign({}, eventSettings, { day: 12, year: 2015, month: 3 });

    // create an event with first settings
    anEventCollection.createAndAddEvent(eventSettings);
    // create an event just like the previous one
    anEventCollection.createAndAddEvent(eventSettings);
    // a new event, with the event setting 2
    anEventCollection.createAndAddEvent(eventSettings2);
    // a new event, with event setting 3
    anEventCollection.createAndAddEvent(eventSettings3);
    // a new event, with event setting 4
    anEventCollection.createAndAddEvent(eventSettings4);

    anEventCollection.createAndAddEvent(eventSettings5);
  });

  it('should return an event', function() {
    let event = anEventCollection.retrieveEvent(0);

    expect(event).to.be.an.instanceof(Event);

  });

  it('should return an object with the same data as the requested event', function() {
    let event = anEventCollection.retrieveEvent(0);

    expect(event).to.deep.equal({
      date: new Date(2014, 11, 24, 11, 11, 0, 0),
      title: "Christmas Eve",
      id: 0,
      hours: 11,
      minutes: 11,
      description: "A Christmas Eve Calendar",
      picture: null,
      isYearly: false
    });
  });

  it('should remove an event without deleting any property, when the target day still has other events', function() {
    let event = anEventCollection.retrieveEvent(0);
    let collectionEvents = anEventCollection.getEvents();

    // a mover verbose expect
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 3,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        }
      });
  });

  it('should remove an unneeded day after deletion', function() {
    anEventCollection.retrieveEvent(0);
    anEventCollection.retrieveEvent(1);
    let collectionEvents = anEventCollection.getEvents();

    // the day 24 was removed
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 3,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        }
      });
  });

  it('should remove an unneeded month after deletion', function() {
    anEventCollection.retrieveEvent(5);

    let collectionEvents = anEventCollection.getEvents();

    // the day 24 was removed
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 0,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            },{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 3,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          }
        }
      });
  });

  it('should remove an unneeded year after deletion', function() {
    anEventCollection.retrieveEvent(5);
    anEventCollection.retrieveEvent(2);

    let collectionEvents = anEventCollection.getEvents();

    // the day 24 was removed
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 0,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            },{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 3,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        }
      });
  });

  it('should remove an unneeded year after deletion EVEN if that year is "all"', function() {
    anEventCollection.retrieveEvent(3);

    let collectionEvents = anEventCollection.getEvents();

    // the day 24 was removed
    expect(collectionEvents)
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 0,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            },{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        }
      });
  });

  it('should not affect the addEvent method behaviour, for a retrieved event that is readded will have a new id', function(){
    let event = anEventCollection.retrieveEvent(3);
    anEventCollection.addEvent(event);

    expect(anEventCollection.getEvents())
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 0,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            },{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        'all': {
          12: {
            25: [{
              date: new Date(2014, 11, 25, 11, 11, 0, 0),
              title: "Actual Yearly Christmas",
              id: 6,
              hours: 11,
              minutes: 11,
              description: "Actual Yearly Christmas",
              picture: 'http://placekitten.com/220/300',
              isYearly: true
            }]
          }
        }
      });
  });
});

describe('Event Collection updateEvent method', function() {
  beforeEach(function() {

    let eventDay = 24,
      eventMonth = 12,
      eventYear = 2014,
      eventHours = 11,
      eventMinutes = 11,
      eventTitle = "Christmas Eve",
      eventDescription = "A Christmas Eve Calendar";

    let eventSettings = { day: eventDay, month: eventMonth, year: eventYear, title: eventTitle, description: eventDescription, isYearly: false, hours: eventHours, minutes: eventMinutes };

    anEvent = new Event(eventSettings);

    let eventSettings2 = Object.assign({}, eventSettings, { month: 1, year: 2015, day: 12, minutes: 12, picture: 'http://placekitten.com/220/300', title: "A different event", description: "A different description" });

    let eventSettings3 = Object.assign({}, eventSettings, { isYearly: true, picture: 'http://placekitten.com/220/300', day: 25, title: "Actual Yearly Christmas", description: "Actual Yearly Christmas" });

    let eventSettings4 = Object.assign({}, eventSettings, { day: 26 });

    let eventSettings5 = Object.assign({}, eventSettings, { day: 12, year: 2015, month: 3 });

    // create an event with first settings
    anEventCollection.createAndAddEvent(eventSettings);
    // create an event just like the previous one
    anEventCollection.createAndAddEvent(eventSettings);
    // a new event, with the event setting 2
    anEventCollection.createAndAddEvent(eventSettings2);
    // a new event, with event setting 3
    anEventCollection.createAndAddEvent(eventSettings3);
    // a new event, with event setting 4
    anEventCollection.createAndAddEvent(eventSettings4);

    anEventCollection.createAndAddEvent(eventSettings5);
  });

  it('should re-add the involved event, in the right section and with the same id', function(){
    anEventCollection.updateEvent(3, {
      date: new Date(2020, 10, 22, 10, 10, 0, 0),
      hours: 20,
      minutes: 44,
      isYearly: false,
      title: 'Totally not Christmas Eve',
      description: 'Totally not Christmas Eve description'
    });

    expect(anEventCollection.getEvents())
      .to.deep.equal({
        2014: {
          12: {
            24: [{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 0,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            },{
              date: new Date(2014, 11, 24, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 1,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }],
            26: [{
              date: new Date(2014, 11, 26, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 4,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        2015: {
          1: {
            12: [{
              date: new Date(2015, 0, 12, 11, 12, 0, 0),
              title: "A different event",
              id: 2,
              hours: 11,
              minutes: 12,
              description: "A different description",
              picture: 'http://placekitten.com/220/300',
              isYearly: false
            }]
          },
          3: {
            12: [{
              date: new Date(2015, 2, 12, 11, 11, 0, 0),
              title: "Christmas Eve",
              id: 5,
              hours: 11,
              minutes: 11,
              description: "A Christmas Eve Calendar",
              picture: null,
              isYearly: false
            }]
          }
        },
        2020: {
          11: {
            22: [{
              date: new Date(2020, 10, 22, 20, 44, 0, 0),
              hours: 20,
              minutes: 44,
              id: 3,
              isYearly: false,
              picture: 'http://placekitten.com/220/300',
              description: 'Totally not Christmas Eve description',
              title: 'Totally not Christmas Eve'
            }]
          }
        }
      });
  });
});
