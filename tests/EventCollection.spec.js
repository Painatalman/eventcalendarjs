// Import chai.
var expect = require('chai')
  .expect,
  path = require('path');

require('mocha-testcheck')
  .install();

import Event from "../src/components/Event.js";



describe('Event Collection Object', function()
{

  let anEvent = new Event({});
  let anEventCollection = new Event({});
  let currentDate = new Date();

  describe('When initialized with no specific parameters', function() {
    beforeEach(function(){
      anEventCollection = new EventCollection();
      currentDate = new Date();
    });

    it('should be callable without parameters', function()
    {
      expect(anEventCollection)
        .to.not.be.undefined;
    });

    it('should be callable with an empty object as parameter', function()
    {
      let anotherEventCollection = new Event(
      {});

      expect(anotherEventCollection)
        .to.not.be.undefined;
    });

    it('should be initialized with no events, by default, as an empty object', function()
    {
      expect(anEventCollection.getEvents())
        .to.equal({});
    });
    
    it('should be initialized with no events, by default, as an array, if deserialized is set to true', function()
    {
      expect(anEventCollection.getEvents())
        .to.equal([]);
    });

    it('should allow for adding an event and then getting it', function()
    {
      let eventSettings = {day:24, month:12, year:2014, title:"Christmas Eve", description:"A Christmas Eve Calendar", picture, isYearly:false}
      let anEvent = new Event(eventSettings);
      
      anEventCollection.createAndAddEvent(eventSettings);
      
      let collectionFirstEvent = addEventCollection.getEvents();
      
      expect(anEventCollection.getEvents())
        .to.equal("");
    });
  });
});