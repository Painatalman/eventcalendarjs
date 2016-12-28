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
 */
export default class Event {
  // WARNING: month is in the 1-12 format, not the default 0-11 one
  constructor({day=getCurrentDay(), month=getCurrentMonth(), year=getCurrentYear(), title="", description="", picture, isYearly=false} = {} ) {

    this.date = new Date();

    // set year to current if it is 'all'... for creating a real date, nothing else
    if (typeof year !== 'number') {
      year = getCurrentYear();
    }
    
    // I guess the day should come last, for it may change everything else?
    this.date.setYear(year);
    this.date.setMonth(parseInt(month) - 1);
    this.date.setDate(day);

    this.isYearly = isYearly;
    this.title = title;
    this.description = description;
    this.picture = picture;
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
  getDescription() {
    return this.description;
  }
  getTitle() {
    return this.title;
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
  setDate(dateOrObject = {day, month, year}) {
    if (dateOrObject instanceof Date) {
      this.date = dateOrObject;
    } else {
      let {day, month, year} = dateOrObject;
      
      year && this.setYear(year);
      month && this.setMonth(month);
      day && this.setDay(day);
    }
  }
  isYearly() {
    return this.isYearly;
  }
}
