const add = require('date-fns/add');
const sub = require('date-fns/sub');
const format = require('date-fns/format');

const makeFilter = (date) => {

  let filters = [
    {
      label: 'Últimos 7 días',
      startAt: format(sub(date, {days: 7}), 'yyyy/MM/dd'),
      endAt: format(date,'yyyy/MM/dd')
    },
    {
      label: 'Últimos 28 días',
      startAt: format(sub(date, {days: 28}), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: 'Últimos 90 días',
      startAt: format(sub(date, {days: 90}), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    {
      label: 'Últimos 365 días',
      startAt: format(sub(date, {years: 1}), 'yyyy/MM/dd'),
      endAt: format(date, 'yyyy/MM/dd')
    },
    { label: '2019', startAt: format(sub(date, {years: 1}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1}), 'yyyy/MM/dd') },
    { label: '2018', startAt: format(sub(date, {years: 2}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1, years: 1}), 'yyyy/MM/dd') },
    { label: '2017', startAt: format(sub(date, {years: 3}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1, years: 2}), 'yyyy/MM/dd') },
    { label: 'diciembre', startAt: format(sub(date, {months: 1}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1}), 'yyyy/MM/dd') },
    { label: 'noviembre', startAt: format(sub(date, {months: 2}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1, months: 1}), 'yyyy/MM/dd') },
    { label: 'octubre', startAt: format(sub(date, {months: 3}), 'yyyy/MM/dd'), endAt: format(sub(date, {days: 1, months: 2}), 'yyyy/MM/dd') }
  ];
  return filters;
}


module.exports = { makeFilter };