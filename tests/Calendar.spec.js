// Import chai.
var expect = require('chai')
  .expect,
  path = require('path');

require('mocha-testcheck')
  .install();


import Calendar from "../src/components/Calendar.js";
import Event from "../src/components/Event.js";
import EventCollection from "../src/components/EventCollection.js";

describe('Calendar Object', function()
{

  let anEvent;
  let aCalendar;
  let currentDate;

  let documentElement;
  let calendarElementId = 'calendar';

  describe('When initialized with no specific parameters', function() {
    beforeEach(function(){
      anEvent = new Event();
      currentDate = new Date();
    });

    it('should be callable without parameters', function()
    {
      var cleanup = require('jsdom-global')();

      documentElement = document.createElement('div');
      documentElement.id = calendarElementId;

      document.body.appendChild(documentElement);

      let aCalendar = new Calendar('#'+calendarElementId);

      expect(aCalendar)
        .to.not.be.undefined;

      cleanup();
    });

    it('should be callable with an empty object as parameter', function()
    {
      var cleanup = require('jsdom-global')();

      documentElement = document.createElement('div');
      documentElement.id = calendarElementId;

      document.body.appendChild(documentElement);

      let anotherCalendar = new Calendar('#'+calendarElementId, {});

      expect(anotherCalendar)
        .to.not.be.undefined;

      cleanup();
    });

    it('should be initialized with the current month and year', function()
    {
      
    });

    it('should be initialized with no events', function()
    {

    });

  });
});
