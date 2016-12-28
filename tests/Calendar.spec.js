// Import chai.
var expect = require('chai')
  .expect,
  path = require('path');

require('mocha-testcheck')
  .install();

import Calendar from "../src/components/Calendar.js";
import Event from "../src/components/Event.js";
import Event from "../src/components/EventCollection.js";

describe('Calendar Object', function()
{

  let anEvent = new Event({});
  let aCalendar = new Calendar();

  describe('When initialized with no specific parameters', function() {
    beforeEach(function(){
      anEvent = new Event();
      aCalendar = new Calendar();
      currentDate = new Date();
    });

    it('should be callable without parameters', function()
    {
      expect(aCalendar)
        .to.not.be.undefined;
    });

    it('should be callable with an empty object as parameter', function()
    {
      let anotherCalendar = new Event(
      {});

      expect(anotherCalendar)
        .to.not.be.undefined;
    });

    it('should be initialized with the current month and year', function()
    {
      
    });

    it('should be initialized with no events', function()
    {
      expect(aCalendar.getMonth())
        .to.equal(currentDate.getMonth() + 1);
    });

    it('should be initialized with the current year', function()
    {
      expect(anEvent.getYear())
        .to.equal(currentDate.getFullYear());
    });

    it('should have an empty-string description', function()
    {
      expect(anEvent.getDescription())
        .to.equal('');
    });

    it('should have an empty-string title', function()
    {
      expect(anEvent.getTitle())
        .to.equal('');
    });
    
    it('should allow changes to title and description', function()
    {
      anEvent.setTitle('Rambo day');
      anEvent.setDescription('The day Rambo was released');
      
      expect(anEvent.getTitle()).to.equal('Rambo day');
      expect(anEvent.getDescription()).to.equal('The day Rambo was released');
    });
    it('should allow for changing the month, where 3 is march (not 2)', function(){
      // march has 31 days, day will not change due to month in this case
      anEvent.setMonth(3);
      expect(anEvent.getMonth()).to.equal(3);
      expect(anEvent.getYear()).to.equal(currentDate.getFullYear());  
    });
    it('should be able to set date by providing an object with month, day and year', function() {
      anEvent.setDate({day: 21, year: 2014, month: 3});
      
      expect(anEvent.getMonth()).to.equal(3);
      expect(anEvent.getYear()).to.equal(2014);
      expect(anEvent.getDay()).to.equal(21);
    })
  });

  it('should return "all" when an event is yearly', function()
  {
    let anYearlyEvent = new Event(
    {
      isYearly: true
    })
    expect(anYearlyEvent.getYear())
      .to.equal('all');
  })

  /**
  it(name + ' should NOT work with strings that are NOT convertible to numbers', function () {
    expect(method('g8')).to.throw(Error);
  });

  describe(name + ' must behave properly when parameter is less than 2', function () {
    it ('should be 1 for 1', function() {
      expect(method(1)).to.deep.equal(1);
    });
    it ('should be 0 for 0', function() {
      expect(method(0)).to.deep.equal(0);
    });
    it ('should throw an error for a negative', function() {expect(function () {method(-3)}).to.throw(Error);});
  });
  **/

});