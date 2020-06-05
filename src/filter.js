const sub = require('date-fns/sub');
const format = require('date-fns/format');
const startOfYear = require('date-fns/startOfYear');
const endOfYear = require('date-fns/endOfYear');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const esLocale = require('date-fns/locale/es');

const makeFilter = (date) => {
  const todayFormat = format(date, 'yyyy/MM/dd');
  const numOfDays = [7, 28, 90, 365];
  const numOfMonths = [1, 2, 3];
  const numOfYears = [1, 2, 3];

  let filters = [];

  numOfDays.forEach(number => {
    filters.push({
      label: `Últimos ${number} días`,
      startAt: format(sub(date, {days: number}), 'yyyy/MM/dd'),
      endAt: todayFormat
    });
  });

  numOfYears.forEach(number => {
    filters.push({
      label: format(startOfYear(sub(date, {years: number})),'yyyy'),
      startAt: format(startOfYear(sub(date, {years: number})), 'yyyy/MM/dd'),
      endAt: format(endOfYear(sub(date, {years: number})), 'yyyy/MM/dd')
    });
  });

  numOfMonths.forEach(number => {
    filters.push({
      label: format(sub(date, {months: number}),'MMMM', {locale: esLocale}),
      startAt: format(startOfMonth(sub(date, {months: number})), 'yyyy/MM/dd'),
      endAt: format(endOfMonth(sub(date, {months: number})), 'yyyy/MM/dd')
    })
  })

  return filters;
}

module.exports = { makeFilter };