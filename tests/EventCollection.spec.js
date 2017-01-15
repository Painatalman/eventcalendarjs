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

beforeEach(function(){
      anEventCollection = new EventCollection();
      currentDate = new Date();
    });

describe('Event Collection Object initialiation', function()
{

  

  describe('When initialized with no specific parameters', function() {
    

    it('should be callable without parameters', function()
    {
      expect(anEventCollection)
        .to.not.be.undefined;
    });

    it('should be callable with an empty object as parameter', function()
    {
      let anotherEventCollection = new EventCollection(
      {});

      expect(anotherEventCollection)
        .to.not.be.undefined;
    });

    

    
  });
});

describe('Event Collection getEvents method', function() {
  it('should return an empty object, when initialized with no events', function()
    {
      expect(anEventCollection.getEvents())
        .to.deep.equal({});
    });

    it('should return an empty array, when initialized with no events and deserialized set to true', function()
    {
      expect(anEventCollection.getEvents(true))
        .to.deep.equal([]);
    });
});

describe('Event Collection createAndAddEvent method', function()
{
  it('should create and add an event, when provided options, similar to an event added in raw', function()
    {
      let eventDay = 24,
          eventMonth = 12,
          eventYear = 2014;

      let eventSettings = {day:eventDay, month:eventMonth, year:eventYear, title:"Christmas Eve", description:"A Christmas Eve Calendar", isYearly:false};

      let anEvent = new Event(eventSettings);
      
      anEventCollection.createAndAddEvent(eventSettings);
      
      let collectionEvents = anEventCollection.getEvents();
      
      // a mover verbose expect
      expect(collectionEvents)
        .to.deep.equal({
          2014:{
            12: {
              24: [{
                date: anEvent.getRawDate(),
                title: anEvent.getTitle(),
                id: 0,
                hours: null,
                minutes: null,
                description: anEvent.getDescription(),
                picture: anEvent.getPicture(),
                isYearly: false
              }]
            }
          }
        });

      // another approach, more object-like
      expect(collectionEvents[eventYear][eventMonth][eventDay][0]).to.deep.equal(Object.assign(anEvent, {id: 0}));
    });
});