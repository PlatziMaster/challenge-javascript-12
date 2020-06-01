const format = require('date-fns/format'); 
const sub = require('date-fns/sub'); 
const parseISO = require('date-fns/parseISO');
const lastDayYear = require('date-fns/lastDayOfYear');

const startMonth = require('date-fns/startOfMonth');
const esLocale = require('date-fns/locale/es');


const makeFilter = (date) => {
  const today = format(date, 'yyyy/MM/dd');
  let filters = [
    {
      label: 'Últimos 7 días',
      startAt: format(sub(date, {days: 7}), 'yyyy/MM/dd'),
      endAt: today,
    },
    {
      label: 'Últimos 28 días',
      startAt: format(sub(date, {days: 28}), 'yyyy/MM/dd'),
      endAt: today
    },
    {
      label: 'Últimos 90 días',
      startAt:format(sub(date, {days: 90}), 'yyyy/MM/dd'),
      endAt: today
    },
    {
      label: 'Últimos 365 días',
      startAt: format(sub(date, {days: 365}), 'yyyy/MM/dd'),
      endAt: today
    }
  ];

  for(let y = 1; y < 4; y++){
    let year = format(sub(date, {years: y}), 'yyyy');
    filters.push({
      label: year,
      startAt: format(parseISO(year), 'yyyy/MM/dd'),
      endAt: format(lastDayYear(parseISO(year)), 'yyyy/MM/dd'),
    })
  }

  for(let m = 0; m < 3; m++){
    let currMonth = format(sub(lastDayYear(date), {months: m, years: 1}), 'MMMM', {locale: esLocale});
    let currMonthFormat = format(sub(lastDayYear(date), {months: m, years: 1}), 'yyyy/MM/dd');
    filters.push({
      label: currMonth,
      startAt: format(startMonth(sub(lastDayYear(date), {months: m, years: 1})), 'yyyy/MM/dd'),
      endAt: currMonthFormat
    })
  }

  return filters;
}
module.exports = { makeFilter };