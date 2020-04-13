const sub = require('date-fns/sub');
const format = require('date-fns/format');
const localeES = require('date-fns/locale/es')
const startOfMonth = require('date-fns/startOfMonth')
const endOfMonth = require('date-fns/endOfMonth')
const startOfYear = require('date-fns/startOfYear')
const endOfYear = require('date-fns/endOfYear')

const makeFilter = (date) => {

  const today = new Date(2020,0,1);
  const dateFormat = 'yyyy/MM/dd';

  let filters = [
     {
       label: 'Últimos 7 días',
       startAt: format(sub(today, { days: 7 }), dateFormat),
       endAt: format(today, dateFormat)
     },
     {
      label: 'Últimos 28 días',
      startAt: format(sub(today, { days: 28 }), dateFormat),
      endAt: format(today, dateFormat)
    },
    {
      label: 'Últimos 90 días',
      startAt: format(sub(today, { days: 90 }), dateFormat),
      endAt: format(today, dateFormat)
    },
    {
      label: 'Últimos 365 días',
      startAt: format(sub(today, { days: 365 }), dateFormat),
      endAt: format(today, dateFormat)
    }
  ];

  for (let i = 1; i <= 3; i++) {
    const pastYearDate = sub(today, {years: i});
    filters.push({
      label: format(pastYearDate, 'yyyy'),
      startAt: format(startOfYear(pastYearDate), dateFormat),
      endAt: format(endOfYear(pastYearDate), dateFormat)
    });
  }

  for (let i = 1; i <= 3; i++) {
    const pastMonthDate = sub(today, {months: i});
    filters.push({
      label: format(pastMonthDate, 'MMMM', {locale: localeES}),
      startAt: format(startOfMonth(pastMonthDate), dateFormat),
      endAt: format(endOfMonth(pastMonthDate), dateFormat)
    });
  }

  return filters;
}

module.exports = { makeFilter };