const sub = require('date-fns/sub');
const format = require('date-fns/format');
const localeES = require('date-fns/locale/es')
const startOfMonth = require('date-fns/startOfMonth')
const endOfMonth = require('date-fns/endOfMonth')
const startOfYear = require('date-fns/startOfYear')
const endOfYear = require('date-fns/endOfYear')
const DATE_FORMAT = 'yyyy/MM/dd';

function createDayFilter(label, date, days) {
  return {
    label: label,
    startAt: format(sub(date, { days: days }), DATE_FORMAT),
    endAt: format(date, DATE_FORMAT)
  }
}

const makeFilter = (date) => {
  let filters = [
    createDayFilter('Últimos 7 días', date, 7),
    createDayFilter('Últimos 28 días', date, 28),
    createDayFilter('Últimos 90 días', date, 90),
    createDayFilter('Últimos 365 días', date, 365)
  ];

  for (let i = 1; i <= 3; i++) {
    const pastYearDate = sub(date, {years: i});
    filters.push({
      label: format(pastYearDate, 'yyyy'),
      startAt: format(startOfYear(pastYearDate), DATE_FORMAT),
      endAt: format(endOfYear(pastYearDate), DATE_FORMAT)
    });
  }

  for (let i = 1; i <= 3; i++) {
    const pastMonthDate = sub(date, {months: i});
    filters.push({
      label: format(pastMonthDate, 'MMMM', {locale: localeES}),
      startAt: format(startOfMonth(pastMonthDate), DATE_FORMAT),
      endAt: format(endOfMonth(pastMonthDate), DATE_FORMAT)
    });
  }

  return filters;
}

module.exports = { makeFilter };