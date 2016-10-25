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

export default class Event {
  // WARNING: month is in the 1-12 format, not the default 0-11 one
  constructor({day=getCurrentDay(), month=getCurrentMonth(), year=getCurrentYear(), title="No title", description="No description", picture, isYearly=false} ) {

    this.date = new Date();
    const date = this.date;

    // set year to current if it is 'all'... for creating a real date, nothing else
    year = year === 'all' ? getCurrentYear() : year;

    date.setDate(day);
    date.setMonth(parseInt(month) - 1);
    date.setYear(year);

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
}
