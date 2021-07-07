const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const esLocale = require('date-fns/locale/es');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');

class DateFilter {
  /**
   * Create date filter
   * @param {string} label label of filter
   * @param {Date} startAt start at date
   * @param {Date} endAt end at date
   */
  constructor(label, startAt, endAt) {
    this.label = label;
    this.startAt = format(startAt, 'yyyy/MM/dd');
    this.endAt = format(endAt, 'yyyy/MM/dd');
  }
}

class FilterPerDay extends DateFilter {
  /**
   * Create filter per day
   * @param {Date} date base date
   * @param {number} day Previous days
   */
  constructor(date, day) {
    super(`Últimos ${day} días`, sub(date, { days: day }), date);
  }
}

/**
 * Create filters with arrays of days
 * @param {Date} date base date
 * @param {number[]} days days for filters
 * @returns {FilterPerDay[]} Array of filters per day
 */
const makeFilterPerDay = (date, days) => days.map(day => new FilterPerDay(date, day));


class FilterPerYear extends DateFilter {
  /**
   * Create filter per year
   * @param {*} date base date
   * @param {*} year Previous years
   */
  constructor(date, year) {
    const yearBaseDate = sub(date, { years: year });
    super(
      format(yearBaseDate, 'yyyy'),
      startOfYear(yearBaseDate),
      endOfYear(yearBaseDate)
    );
  }
}

/**
 * Create filters with arrays of years
 * @param {date} date base date
 * @param {number[]} years years for filters
 * @returns {FilterPerYear[]} Array of filters per year
 */
const makeFilterPerYear = (date, years) => years.map(year => new FilterPerYear(date, year));


class FilterPerMonth extends DateFilter {
  /**
   * Create filter per month
   * @param {Date} date base date
   * @param {number} month Previous months
   */
  constructor(date, month) {
    const monthBaseDate = sub(date, { months: month });
    super(
      format(monthBaseDate, 'MMMM', { locale: esLocale }),
      startOfMonth(monthBaseDate),
      endOfMonth(monthBaseDate)
    );
  }
}

/**
 * Create filters with arrays of months
 * @param {Date} date base date
 * @param {number[]} months months for filters
 * @returns {FilterPerMonth[]} Array of filters per months
 */
const makeFilterPerMonth = (date, months) => months.map(month => new FilterPerMonth(date, month));

const makeFilter = (date) => {
  let filters = [
    ...makeFilterPerDay(date, [7, 28, 90, 365]),
    ...makeFilterPerYear(date, [1, 2, 3]),
    ...makeFilterPerMonth(date, [1, 2, 3])
  ];
  return filters;
}

module.exports = { makeFilter };