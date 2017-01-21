function getCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}

function getCurrentMonth() {
  let date = new Date();
  return date.getMonth()+1;
}

function getCurrentDay() {
  let date = new Date();
  return date.getDate();
}

/**
 *  An event class for creating event objects that include a day, month, year, title, description and optional picture and isYearly
 *  In case an event is yearly, it returns 'all' in the getYear method
 *  Note that, if set, the date parameter overrides year, month and day, but not hours or minutes. This is due to the fact that changing the year, month or day may end up generating an upredictable result (like creating an event for march 31st, and then setting the month to april, which would result in the may 1st date of the corresponding year)
 *  TODO: force a day, month and year... without these, there is NO valid event
 *  TODO: validate hours and minutes
 *  TODO: create a setTime method
 */
export default class Event {
  // WARNING: month is in the 1-12 format, not the default 0-11 one
  // WARNING: if there are no hours, then minutes will be ignored even if set up
  // TODO: force a type to date, if set
  constructor({date=null, day=getCurrentDay(), month=getCurrentMonth(), year=getCurrentYear(), title="", description="", picture=null, isYearly=false, id=null, hours=null, minutes=null} = {} ) {
    this.initializeEventData({date, day, month, year, title, description, picture, isYearly, id, hours, minutes});
  }
  initializeEventData({date=null, day=getCurrentDay(), month=getCurrentMonth(), year=getCurrentYear(), title="", description="", picture=null, isYearly=false, id=null, hours=null, minutes=null} = {} ) {

    // if there is a Date object set as date parameter, then use that instead of a new Date() as your starting point
    this.date = date || new Date();

    // adjust the hours and minutes BEFORE readjusting the date
    hours = hours || (date && date.getHours()) || 0;
    minutes = minutes || (date && date.getMinutes()) || 0;
    this.date.setHours(hours, minutes, 0, 0);
    this.hours = hours;
    this.minutes = minutes;

    // set year to current if it is 'all'... for creating a real date, nothing else
    if (typeof year !== 'number') {
      year = getCurrentYear();
    }
    
    // I guess the day should come last, for it may change everything else?

    // if the date parameter is not set in the objects...
    if (!date) {
      this.date.setYear(year);
      this.date.setMonth(parseInt(month) - 1);
      this.date.setDate(day);
    }

    this.isYearly = isYearly;
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.id = id;

  }
  getYear() {
    return this.isYearly ? 'all' : this.date.getFullYear();
  }
  getMonth() {
    return this.date.getMonth() + 1;
  }
  getDay() {
    return this.date.getDate();
  }
  getRawDate() {
    return this.date;
  }
  getDescription() {
    return this.description;
  }
  getTitle() {
    return this.title;
  }
  getHours() {
    return this.hours;
  }
  getMinutes() {
    return this.minutes;
  }
  getPicture() {
    return this.picture;
  }
  setPicture(pictureUrl) {
    this.picture = pictureUrl;
  }
  setDescription(text) {
    this.description = text;
  }
  setTitle(text) {
    this.title = text;
  }
  setYear(year) {
    this.date.setYear(year);
  }
  setMonth(month) {
    this.date.setMonth(month - 1);
  }
  setDay(day) {
    this.date.setDate(day);
  }
  /**
   * Sets the date. It expects a date as first parameter, or an object with the day, month and year parameters
   *
   * @param      {<type>}  dateOrObject  The date or object
   */
  setDate(dateOrObject = {date, day, month, year}) {
    if (dateOrObject instanceof Date) {
      this.date = dateOrObject;

    } else {
      let {date, day, month, year} = dateOrObject;
      
      if (date instanceof Date) {
        this.date = date;

      } else {
        year && this.setYear(year);
        month && this.setMonth(month);
        day && this.setDay(day);
      }
    }

    // readjust hours... this method is NOT for updating hours and minutes
    this.date.setHours(this.getHours(), this.getMinutes(),0,0)
  }
  setTime({hours=undefined, minutes=undefined}) {
    this.hours = hours || this.hours;
    this.minutes = minutes || this.minutes;

    this.date.setHours(hours, minutes, 0, 0);
  }
  setIsYearly(isYearly=false) {
    this.isYearly = isYearly;
  }
  getIsYearly() {
    return this.isYearly;
  }
  getId() {
    return this.id;
  }
  /**
   * gets data from the event in the same format as the one provided by EventCollection objects
   */
  getEventData() {
    return {
      date: this.getRawDate(),
      isYearly: this.getIsYearly(),
      hours: this.getHours(),
      minutes: this.getMinutes(),
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getId(),
      picture: this.getPicture()
    }
  }

  update({date=undefined, day=undefined, month=undefined, year=undefined, title=undefined, description=undefined, picture=undefined, isYearly=undefined, hours=undefined, minutes=undefined} = {} ) {

    (date && this.setDate(date)) || this.setDate({year, month, day});

    this.setTime({hours, minutes});

    title && this.setTitle(title);
    description && this.setDescription(description);
    picture && this.setPicture(picture);

    (isYearly !== undefined) && this.setIsYearly(isYearly);
  }

}
