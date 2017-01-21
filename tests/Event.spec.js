// Import chai.
var expect = require('chai')
  .expect,
  path = require('path');

require('mocha-testcheck')
  .install();

import Event from "../src/components/Event.js";



describe('Event Object', function()
{

  let anEvent = new Event({});
  let currentDate = new Date();

  describe('When initialized with no specific parameters', function() {
    beforeEach(function(){
      anEvent = new Event();
      currentDate = new Date();
    });

    it('should be callable without parameters', function()
    {
      expect(anEvent)
        .to.not.be.undefined;
    });

    it('should be callable with an empty object as parameter', function()
    {
      let anotherEvent = new Event(
      {});

      expect(anotherEvent)
        .to.not.be.undefined;
    });

    it('should be initialized with the current day, by default', function()
    {
      expect(anEvent.getDay())
        .to.equal(currentDate.getDate());
    });

    it('should be initialized with the current month, by default, with 1 being January and 12 being December', function()
    {
      expect(anEvent.getMonth())
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

  it('should allow initialization by providing a date parameter, which sets the year, month and day', function(){
    let anYearlyEvent = new Event(
    {
      date: new Date(2016,7,12,11,23)
    })

    expect(anYearlyEvent.getYear()).to.equal(2016);
    expect(anYearlyEvent.getMonth()).to.equal(8);
    expect(anYearlyEvent.getDay()).to.equal(12);
    expect(anYearlyEvent.getHours()).to.equal(11);
    expect(anYearlyEvent.getMinutes()).to.equal(23);

  });

  it('should ignore month, day and year (if not set to "all") parameters if date is set. This is due to the fact that, if you changed the month only, you could get a wrong date, like 31st of february', function(){
    let anYearlyEvent = new Event(
    {
      date: new Date(2016,7,12,11,23),
      month: 10,
      day: 1,
      year: 2015
    })

    expect(anYearlyEvent.getYear()).to.equal(2016);
    expect(anYearlyEvent.getMonth()).to.equal(8);
    expect(anYearlyEvent.getDay()).to.equal(12);
    expect(anYearlyEvent.getHours()).to.equal(11);
    expect(anYearlyEvent.getMinutes()).to.equal(23);

  });

  it('getYear should STILL return "all" is isYearly is set to true', function(){
    let anYearlyEvent = new Event(
    {
      date: new Date(2016,7,12,11,23),
      month: 10,
      day: 1,
      year: 2015,
      isYearly: true
    })

    expect(anYearlyEvent.getYear()).to.equal('all');
    expect(anYearlyEvent.getMonth()).to.equal(8);
    expect(anYearlyEvent.getDay()).to.equal(12);
    expect(anYearlyEvent.getHours()).to.equal(11);
    expect(anYearlyEvent.getMinutes()).to.equal(23);
  });

  it('should STILL allow hours and minutes to be overridden', function(){
    let anYearlyEvent = new Event(
    {
      date: new Date(2016,7,12,11,11),
      month: 10,
      day: 1,
      year: 2015,
      hours: 23,
      minutes: 24
    })

    expect(anYearlyEvent.getYear()).to.equal(2016);
    expect(anYearlyEvent.getMonth()).to.equal(8);
    expect(anYearlyEvent.getDay()).to.equal(12);
    expect(anYearlyEvent.getHours()).to.equal(23);
    expect(anYearlyEvent.getMinutes()).to.equal(24);

  });


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