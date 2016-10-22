export default class Event {
  // WARNING: month is in the 1-12 format, not the default 0-11 one
  constructor({day, month, year, title, description="No description", picture, isYearly=false} ) {
    this.ALL_YEARS_VALUE = 'all';

    this.date = new Date();
    const date = this.date;
    date.setDate(day);
    date.setMonth(parseInt(month) - 1);
    date.setYear(year);

    this.isYearly = isYearly;
    this.title = title;
    this.description = description;
    this.picture = picture;
  }
  getYear() {
    return this.isYearly ? this.ALL_YEARS_VALUE : this.date.getFullYear();
  }
  getMonth() {
    return this.date.getMonth() + 1;
  }
  getDay() {
    return this.date.getDate();
  }
}
